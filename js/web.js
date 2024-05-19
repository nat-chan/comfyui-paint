import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";
import { $el, ComfyDialog } from "../../scripts/ui.js";

let find_element = function(xpath, i){
    let results = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    ).snapshotItem(i);
    return results;
};

let hostname = window.location.hostname;
let port = window.location.port;
let pathname = window.location.pathname;

api.addEventListener("send_to_paint", ({ detail }) => {
//  let { node, progress, text } = detail;
  let layer_name = detail.layer_name;
  let base64png = detail.base64png;
  window.klecks.injectLayer(base64png, layer_name);
});

app.registerExtension({
  name: "comfyui-paint",
  async beforeRegisterNodeDef(nodeType, nodeData, app) {
    if (nodeData.name === "RecieveFromPaint") {
      const origOnNodeCreated = nodeType.prototype.onNodeCreated;
      nodeType.prototype.onNodeCreated = function () {
        const r = origOnNodeCreated ? origOnNodeCreated.apply(this) : undefined;
        for (const w of this.widgets) {
          if (w.name === "seed") {
            w.type = "converted-widget";
            if (!w.linkedWidgets) continue;
            for (const lw of w.linkedWidgets) {
              lw.type = "converted-widget";
            }
          }
        }
        return r;
      }
    }
    if (nodeData.name === "RecieveFromPaint" || nodeData.name === "SendToPaint") {
      nodeType.prototype.color = LGraphCanvas.node_colors.green.color;
      nodeType.prototype.bgcolor = LGraphCanvas.node_colors.green.bgcolor;
    }
  },
  async setup() {
    if (pathname !== "/paint") { return; }
    app.ui.menuContainer.appendChild(
      $el(
        "div.comfy-list",
        {
          style: {
            width: "100%",
            "border-style": "none",
            "margin-bottom": "none",
          }
        },
        [
          $el("button", {
            id: "comfyui-paint-toggle",
            textContent: "Toggle🎨",
            title: "show and hide paint canvas",
            style: {
              "font-size": "20px",
              "width": "100%",
              "background-color": "darkcyan",
            },
            onclick: () => {
              let g_root_elem = find_element('//div[@class="g-root"]', 0);
              let rgthree_progress_bar_elem = find_element('//rgthree-progress-bar', 0);
              if (g_root_elem === null) {
                console.log("g-root elem not found");
                return;
              }
              if (g_root_elem.style.display === "none") {
                g_root_elem.style.display = "";
                if (g_root_elem !== null) {
                  rgthree_progress_bar_elem.style.display = "none";
                }
              } else {
                g_root_elem.style.display = "none";
                if (g_root_elem !== null) {
                  rgthree_progress_bar_elem.style.display = "";
                }
              }
            }
          }),
          $el("button", {
            id: "comfyui-paint-run",
            textContent: "Run🎨",
            title: "save canvas state and run workflow",
            style: {
              "font-size": "20px",
              "width": "100%",
              "background-color": "darkmagenta",
            },
            onclick: () => {
							window.klecks.getPSD().then((blob) => {
								let reader = new FileReader();
								reader.onload = function() {
									let data = JSON.stringify({ fileData: reader.result });
									fetch(`http://${hostname}:${port}/recieve_psd`, {
										method: "POST",
										headers: {
											'Content-Type': 'application/json'
										},
										body: data
									})
									.then(response => response.json())
									.then(data => {
										console.log("PSDデータが正常に送信されました。", data);
                    app.queuePrompt(0);
									})
									.catch(error => {
										console.log("PSDデータの送信中にエラーが発生しました。", error);
									});
								};
								reader.readAsDataURL(blob);
							});
              console.log(`http://${hostname}:${port}/recieve_psd`);
            }
          })
        ]
      )
    );
  },
});