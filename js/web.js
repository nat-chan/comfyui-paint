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

app.registerExtension({
  name: "comfyui-paint",

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
            textContent: "Toggle Paint",
            title: "show and hide paint canvas",
            style: {
              "font-size": "20px",
              "width": "100%",
//              color: "red !important",
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
          })
        ]
      )
    );
  }
})
