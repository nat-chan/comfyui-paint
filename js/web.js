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

      nodeType.prototype.color = LGraphCanvas.node_colors.green.color;
      nodeType.prototype.bgcolor = LGraphCanvas.node_colors.green.bgcolor;
    }
  },

  async setup() {
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
                  let compressed = pako.deflate(reader.result);
                  let base64 = btoa(String.fromCharCode.apply(null, compressed));
                  console.log(base64);
                  console.log(typeof(base64));
									let data = JSON.stringify({ fileData: base64 });
									fetch(`http://${hostname}:${port}/recieve_psd`, {
										method: "POST",
										headers: {
											'Content-Type': 'application/json'
										},
										body: data
									})
									.then(response => response.json())
									.then(data => {
										console.log("PSDデータが正常に送信されました。");
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

//	async registerCustomNodes() {
//    function MyAddNode() {
//      this.isVirtualNode = true;
//      this.serialize_widgets = false;
//      this.addInput("A","string");
//      this.addInput("B","string");
//      this.addOutput("A+B","string");
//    }
//    //name to show
//    MyAddNode.title = "Sum";
//
//    //function to call when the node is executed
//    MyAddNode.prototype.onExecute = function() {
//      var A = this.getInputData(0);
//      console.log(A, typeof(A));
//      if( A === undefined )
//        A = "0";
//      var B = this.getInputData(1);
//      console.log(B, typeof(B));
//      if( B === undefined )
//        B = "0";
//      this.setOutputData( 0, `${A} + ${B}` );
//    }
//
//    //register in the system
//    LiteGraph.registerNodeType("basic/sum", MyAddNode);
//  }
});