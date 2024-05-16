import server  # noqa
from server import PromptServer  # noqa
import aiohttp
from pathlib import Path

NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}
WEB_DIRECTORY = "./js"
__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]

"""
https://zenn.dev/4kk11/articles/4e36fc68293bd2
https://github.com/chrisgoringe/Comfy-Custom-Node-How-To/wiki/api
https://github.com/chrisgoringe/Comfy-Custom-Node-How-To/wiki/data_types
"""

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
