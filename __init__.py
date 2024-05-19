import base64
import io
import re
from abc import ABCMeta
from pathlib import Path
from PIL import Image
import numpy as np

import aiohttp
import torch
from psd_tools import PSDImage
from server import PromptServer  # noqa

NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}
WEB_DIRECTORY = "./js"
__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]

MANAGED_PSD = dict()


"""
https://zenn.dev/4kk11/articles/4e36fc68293bd2
https://github.com/chrisgoringe/Comfy-Custom-Node-How-To/wiki/api
"""


# {{{ node ---
def format_class_name(class_name: str) -> str:
    """先頭以外の大文字の前に空白を挟む"""
    formatted_name = re.sub(r"(?<!^)(?=[A-Z])", " ", class_name)
    return formatted_name


class CustomNodeMeta(ABCMeta):
    def __new__(
        cls,
        name: str,
        bases: list,
        attrs: dict,
    ) -> "CustomNodeMeta":
        global NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS

        @classmethod
        def _(cls):
            return {"required": cls.REQUIRED}

        new_class = super().__new__(
            cls,
            name,
            bases,
            attrs
            | {
                "FUNCTION": "run",
                "CATEGORY": "Paint",
                "INPUT_TYPES": _,
            },
        )
        NODE_CLASS_MAPPINGS[name] = new_class
        NODE_DISPLAY_NAME_MAPPINGS[name] = format_class_name(name) + "🎨"
        return new_class


def matches_pattern(pattern: str, input_text: str) -> bool:
    regex = re.compile(pattern)
    return regex.fullmatch(input_text) is not None


class RecieveFromPaint(metaclass=CustomNodeMeta):
    OUTPUT_NODE = True
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("layer",)
    REQUIRED = {
        "layer_name": ("STRING", {"multiline": False, "default": "レイヤー 1"}),
        "seed": ("INT:seed", {}),
    }

    def run(
        self,
        layer_name: str,
        seed: int,
    ) -> tuple[str]:
        for layer in MANAGED_PSD["psd"]:
            if matches_pattern(layer_name, layer.name):
                np_array = layer.numpy()
                tensor_array = torch.from_numpy(np_array).unsqueeze(0)
                return (tensor_array,)
        return (None,)

class SendToPaint(metaclass=CustomNodeMeta):
    OUTPUT_NODE = True
    RETURN_TYPES = ()
    RETURN_NAMES = ()
    REQUIRED = {
        "layer_name": ("STRING", {"multiline": False, "default": "output"}),
        "image": ("IMAGE",),
    }

    def run(
        self,
        layer_name,
        image: torch.Tensor,
    ) -> tuple:
        array = image.detach().cpu().squeeze(0).mul(255).numpy().astype(np.uint8)
        pil_image = Image.fromarray(array)
        buffered = io.BytesIO()
        pil_image.save(buffered, format="PNG")
        base64png = base64.b64encode(buffered.getvalue()).decode("utf-8")
        payload = {"base64png": f"data:image/png;base64,{base64png}", "layer_name": layer_name}
        PromptServer.instance.send_sync("send_to_paint", payload)
        # , client_id) 第三引数にsid指定できる PromptServer.instance.client_id
        return ()


# --- node }}}

# {{{ server ---
routes: aiohttp.web_routedef.RouteTableDef = PromptServer.instance.routes
app: aiohttp.web_app.Application = PromptServer.instance.app


@routes.get("/paint")
async def get_root(request):
    #    file = Path(__file__).parent.parent.parent/"index.html"
    file = Path(__file__).parent / "index.html"
    return aiohttp.web.FileResponse(file)


@routes.get("/dist/{filename}")
async def get_js_file(request):
    filename = request.match_info["filename"]
    file_path = Path(__file__).parent / "dist" / f"{filename}"
    return aiohttp.web.FileResponse(file_path)


@routes.post("/recieve_psd")
async def recieve_psd(request):
    global MANAGED_PSD
    data = await request.json()
    fileData = data["fileData"]
    header = "data:application/octet-stream;base64,"
    assert fileData[: len(header)] == header
    decompressed = fileData[len(header) :]
    dedecoded = base64.b64decode(decompressed)
    psd = PSDImage.open(io.BytesIO(dedecoded))
    MANAGED_PSD["psd"] = psd
    return aiohttp.web.json_response({"status": "success"})


# --- server }}}
