// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8vcQl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6502977e21b77a10";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"iRXNP":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"\u5411\u5DE6/\u53F3\u5207\u6362","toggle-show-tools":"\u663E\u793A/\u9690\u85CF\u5DE5\u5177","scroll":"\u4E0A\u6ED1/\u4E0B\u6ED1","donate":"\u8D5E\u52A9","home":"\u4E3B\u9875","modal-new-tab":"\u5728\u65B0\u9875\u9762\u6253\u5F00","tab-edit":"\u7F16\u8F91","tab-file":"\u6587\u4EF6","tool-brush":"\u753B\u7B14\u5DE5\u5177","tool-paint-bucket":"\u6CB9\u6F06\u6876","tool-gradient":"\u6E10\u53D8","tool-shape":"\u5F62\u72B6","tool-text":"\u6587\u672C","tool-hand":"\u624B\u578B\u5DE5\u5177","tool-zoom":"\u7F29\u653E\u5DE5\u5177","undo":"\u64A4\u9500","redo":"\u91CD\u505A","brush-pen":"\u753B\u7B14","brush-blend":"\u6C34\u5F69\u5237","brush-sketchy":"\u7D20\u63CF\u7B14","brush-pixel":"\u50CF\u7D20\u5316","brush-chemy":"\u5F02\u5F62\u56FE\u5F62","brush-smudge":"\u6655\u67D3","brush-size":"\u753B\u7B14\u5927\u5C0F","brush-blending":"\u6655\u67D3","brush-toggle-pressure":"\u7B14\u538B\u654F\u5EA6","brush-pen-circle":"\u5706\u5F62","brush-pen-chalk":"\u7C89\u7B14","brush-pen-calligraphy":"\u659C\u89D2\u7B14","brush-pen-square":"\u65B9\u5F62","brush-sketchy-scale":"\u7F51\u683C\u957F\u5EA6","brush-pixel-dither":"\u50CF\u7D20\u6296\u52A8","brush-chemy-fill":"\u586B\u5145","brush-chemy-stroke":"\u7EBF\u6761","brush-chemy-mirror-x":"\u6C34\u5E73\u5BF9\u79F0","brush-chemy-mirror-y":"\u5782\u76F4\u5BF9\u79F0","brush-chemy-gradient":"\u6E10\u53D8","brush-eraser-transparent-bg":"\u5E95\u5C42\u900F\u660E\u5EA6","stabilizer":"\u6296\u52A8\u4FEE\u6B63","stabilizer-title":"\u6296\u52A8\u4FEE\u6B63\u7EBF\u6761","eyedropper":"\u989C\u8272\u9009\u53D6","secondary-color":"\u4E8C\u7EA7\u8272","manual-color-input":"\u624B\u52A8\u8F93\u5165\u989C\u8272","mci-hex":"16\u8FDB\u5236","mci-copy":"\u590D\u5236","modal-ok":"Ok","modal-cancel":"\u53D6\u6D88","modal-close":"\u5173\u95ED","layers-active-layer":"\u5F53\u524D\u56FE\u5C42","layers-layer":"\u56FE\u5C42","layers-copy":"\u526F\u672C","layers-blending":"\u6DF7\u5408\u6A21\u5F0F","layers-new":"\u65B0\u5EFA\u56FE\u5C42","layers-remove":"\u5220\u9664\u56FE\u5C42","layers-duplicate":"\u590D\u5236\u56FE\u5C42","layers-merge":"\u5411\u4E0B\u5408\u5E76","layers-rename":"\u91CD\u547D\u540D","layers-active-layer-visible":"\u5F53\u524D\u56FE\u5C42\u53EF\u89C1","layers-active-layer-hidden":"\u5F53\u524D\u56FE\u5C42\u9690\u85CF","layers-visibility-toggle":"\u56FE\u5C42\u53EF\u89C1\u6027","layers-blend-normal":"\u6B63\u5E38","layers-blend-darken":"\u53D8\u6697","layers-blend-multiply":"\u6B63\u7247\u53E0\u5E95","layers-blend-color-burn":"\u989C\u8272\u52A0\u6DF1","layers-blend-lighten":"\u53D8\u4EAE","layers-blend-screen":"\u6EE4\u8272","layers-blend-color-dodge":"\u989C\u8272\u51CF\u6DE1","layers-blend-overlay":"\u53E0\u52A0","layers-blend-soft-light":"\u67D4\u5149","layers-blend-hard-light":"\u5F3A\u5149","layers-blend-difference":"\u5DEE\u503C","layers-blend-exclusion":"\u6392\u9664","layers-blend-hue":"\u8272\u76F8","layers-blend-saturation":"\u9971\u548C\u5EA6","layers-blend-color":"\u989C\u8272","layers-blend-luminosity":"\u660E\u5EA6","layers-rename-title":"\u91CD\u547D\u540D\u56FE\u5C42","layers-rename-name":"\u91CD\u547D\u540D","layers-rename-clear":"\u6E05\u9664","layers-rename-sketch":"\u8349\u56FE","layers-rename-colors":"\u8272\u5F69","layers-rename-shading":"\u9634\u5F71","layers-rename-lines":"\u7EBF\u6761","layers-rename-effects":"\u89C6\u89C9\u6548\u679C","layers-rename-foreground":"\u524D\u666F","layers-merge-modal-title":"\u5411\u4E0B\u5408\u5E76","layers-merge-description":"\u9009\u4E2D\u5C42\u4E0E\u5E95\u4E0B\u4E00\u5C42\u5408\u5E76\u3002\u9009\u62E9\u6DF7\u5408\u6A21\u5F0F\uFF1A","file-no-autosave":"\u4E0D\u80FD\u81EA\u52A8\u4FDD\u5B58\uFF0C\u6CA1\u6709\u4E91\u5B58\u50A8","file-new":"\u65B0\u5EFA","file-import":"\u6253\u5F00","file-save":"\u4FDD\u5B58","file-format":"\u6587\u4EF6\u683C\u5F0F","file-copy":"\u590D\u5236","file-copy-title":"\u590D\u5236\u5230\u526A\u8D34\u677F","file-share":"\u5206\u4EAB","file-storage":"\u4FDD\u5B58\u81F3\u6D4F\u89C8\u5668","file-storage-thumb-title":"\u91CD\u65B0\u6253\u5F00\u9875\u9762\u65F6\u6062\u590D","file-storage-about":"\u5173\u4E8E\u4FDD\u5B58\u81F3\u6D4F\u89C8\u5668","file-storage-cant-access":"\u65E0\u6CD5\u83B7\u53D6","file-storage-empty":"\u65E0\u5185\u5BB9","file-storage-store":"\u4FDD\u5B58","file-storage-clear":"\u6E05\u9664","file-storage-storing":"\u4FDD\u5B58\u4E2D","file-storage-overwrite":"\u8986\u76D6","file-storage-min-ago":"{x}\u5206\u949F\u524D","file-storage-hours-ago":"{x}\u5C0F\u65F6\u524D","file-storage-days-ago":"{x}\u5929\u524D","file-storage-month-ago":">\u4E00\u4E2A\u6708\u524D","file-storage-restored":"\u4ECE\u6D4F\u89C8\u5668\u5185\u5B58\u4E2D\u6062\u590D","file-storage-stored":"\u4FDD\u5B58\u81F3\u6D4F\u89C8\u5668\u5185\u5B58","file-storage-failed":"\u4FDD\u5B58\u5931\u8D25","file-storage-failed-1":"\u4FDD\u5B58\u5931\u8D25\u3002\u53EF\u80FD\u662F\u7531\u4E8E\uFF1A","file-storage-failed-2":"\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3","file-storage-failed-3":"\u9690\u8EAB\u9875\u9762\u4E2D\u7981\u7528\u5B58\u50A8\u529F\u80FD","file-storage-failed-4":"\u6D4F\u89C8\u5668\u4E0D\u652F\u6301","file-storage-failed-clear":"\u6E05\u9664\u5931\u8D25","file-upload":"\u4E0A\u4F20","cleared-layer":"\u56FE\u5C42\u5DF2\u6E05\u9664","filled":"\u56FE\u5C42\u5DF2\u586B\u5145","new-title":"\u65B0\u5EFA\u9879\u76EE","new-current":"\u5F53\u524D\u5927\u5C0F","new-fit":"\u9002\u5E94\u9875\u9762","new-oversize":"\u5927\u753B\u5E03","new-square":"\u6B63\u65B9\u5F62","new-landscape":"\u6A2A\u5411\u5C3A\u5BF8","new-portrait":"\u7EB5\u5411\u5C3A\u5BF8","new-screen":"\u663E\u793A\u5206\u8FA8\u7387","new-video":"\u89C6\u9891","new-din-paper":"\u7EB8\u5F20\u5927\u5C0F","new-px":"\u50CF\u7D20","new-ratio":"\u6BD4\u4F8B","upload-title":"\u4E0A\u4F20\u5230Imgur","upload-link-notice":"\u4ED6\u4EBA\u53EF\u4EE5\u901A\u8FC7\u751F\u6210\u7684\u56FE\u7247\u94FE\u63A5\u67E5\u770B\u4F60\u7684\u4F5C\u54C1\u3002","upload-name":"\u6807\u9898","upload-title-untitled":"\u672A\u547D\u540D","upload-caption":"\u63CF\u8FF0","upload-submit":"\u4E0A\u4F20","upload-uploading":"\u4E0A\u4F20\u4E2D...","upload-success":"\u4E0A\u4F20\u6210\u529F","upload-failed":"\u4E0A\u4F20\u5931\u8D25","upload-delete":"\u8981\u4ECEImgur\u5220\u9664\u4F60\u7684\u56FE\u7247, \u8BF7\u8BBF\u95EE:","cropcopy-title-copy":"\u590D\u5236\u5230\u526A\u8D34\u677F","cropcopy-title-crop":"\u88C1\u526A","cropcopy-click-hold":"\u70B9\u51FB\u53F3\u952E\u6216\u957F\u6309\u8FDB\u884C\u590D\u5236\u3002","cropcopy-btn-copy":"\u81F3\u526A\u8D34\u677F","cropcopy-copied":"\u5DF2\u590D\u5236","cropcopy-btn-crop":"\u5E94\u7528\u88C1\u526A","crop-drag-to-crop":"\u62D6\u52A8\u88C1\u526A","filter-crop-extend":"\u753B\u5E03\u5927\u5C0F","filter-flip":"\u7FFB\u8F6C","filter-perspective":"\u900F\u89C6","filter-resize":"\u56FE\u50CF\u5927\u5C0F","filter-rotate":"\u65CB\u8F6C","filter-transform":"\u81EA\u7531\u53D8\u6362","filter-bright-contrast":"\u4EAE\u5EA6/\u5BF9\u6BD4","filter-curves":"\u66F2\u7EBF","filter-hue-sat":"\u8272\u76F8/\u9971\u548C\u5EA6","filter-invert":"\u53CD\u76F8","filter-tilt-shift":"\u79FB\u8F74","filter-to-alpha":"\u8F6C\u6362\u81F3Alpha","filter-triangle-blur":"\u6A21\u7CCA","filter-unsharp-mask":"USM \u9510\u5316","filter-crop-title":"\u753B\u5E03\u5927\u5C0F","filter-crop-description":"\u88C1\u526A\u56FE\u7247","filter-crop-left":"\u5DE6","filter-crop-right":"\u53F3","filter-crop-top":"\u4E0A","filter-crop-bottom":"\u4E0B","filter-crop-rule-thirds":"\u4E09\u5206\u6CD5","filter-crop-fill":"\u586B\u5145","filter-flip-title":"\u7FFB\u8F6C","filter-flip-description":"\u7FFB\u8F6C\u56FE\u5C42\u6216\u6574\u4E2A\u56FE\u50CF","filter-flip-horizontal":"\u6C34\u5E73","filter-flip-vertical":"\u5782\u76F4","filter-flip-image":"\u7FFB\u8F6C\u56FE\u50CF","filter-flip-layer":"\u7FFB\u8F6C\u56FE\u5C42","filter-perspective-title":"\u900F\u89C6","filter-perspective-description":"\u53D8\u6362\u5DF2\u9009\u56FE\u5C42","filter-resize-title":"\u56FE\u50CF\u5927\u5C0F","filter-resize-description":"\u66F4\u6539\u56FE\u50CF\u5927\u5C0F","filter-rotate-title":"\u65CB\u8F6C","filter-rotate-description":"\u65CB\u8F6C\u56FE\u50CF","filter-transform-empty":"\u56FE\u5C42\u4E3A\u7A7A","filter-transform-title":"\u53D8\u6362","filter-transform-description":"\u53D8\u6362\u5DF2\u9009\u56FE\u5C42\u3002\u6309\u4F4FShift\u64CD\u4F5C\u3002","filter-transform-rotation":"\u65CB\u8F6C","filter-transform-flip":"\u7FFB\u8F6C","filter-transform-center":"\u5C45\u4E2D","filter-transform-constrain":"\u4FDD\u6301","filter-transform-snap":"\u5BF9\u9F50","filter-transform-snap-title":"\u65CB\u8F6C\u5BF9\u9F50/\u6C34\u5E73\u5BF9\u9F50","filter-bright-contrast-title":"\u4EAE\u5EA6/\u5BF9\u6BD4","filter-bright-contrast-description":"\u66F4\u6539\u5DF2\u9009\u56FE\u5C42\u7684\u4EAE\u5EA6\u548C\u5BF9\u6BD4\u5EA6\u3002","filter-bright-contrast-brightness":"\u4EAE\u5EA6","filter-bright-contrast-contrast":"\u5BF9\u6BD4","filter-curves-title":"\u66F2\u7EBF","filter-curves-description":"\u5E94\u7528\u66F2\u7EBF\u5230\u5DF2\u9009\u56FE\u5C42\u3002","filter-curves-all":"\u5168\u90E8","filter-hue-sat-title":"\u8272\u76F8/\u9971\u548C\u5EA6","filter-hue-sat-description":"\u66F4\u6539\u5DF2\u9009\u56FE\u5C42\u7684\u8272\u76F8\u548C\u9971\u548C\u5EA6\u3002","filter-hue-sat-hue":"\u8272\u76F8","filter-hue-sat-saturation":"\u9971\u548C\u5EA6","filter-applied":"\u5E94\u7528","filter-tilt-shift-title":"\u79FB\u8F74","filter-tilt-shift-description":"\u5E94\u7528\u79FB\u8F74\u5230\u5DF2\u9009\u56FE\u5C42\u3002","filter-tilt-shift-blur":"\u6A21\u7CCA\u534A\u5F84","filter-tilt-shift-gradient":"\u68AF\u5EA6\u534A\u5F84","filter-to-alpha-title":"\u81F3Alpha","filter-to-alpha-description":"\u5BF9\u5DF2\u9009\u56FE\u5C42\u751F\u6210Alpha\u901A\u9053\uFF1A","filter-to-alpha-inverted-lum":"\u4EAE\u5EA6\u7FFB\u8F6C","filter-to-alpha-lum":"\u4EAE\u5EA6","filter-to-alpha-replace":"\u66FF\u6362RGB","filter-triangle-blur-title":"\u6A21\u7CCA","filter-triangle-blur-description":"\u5E94\u7528\u6A21\u7CCA\u5230\u5DF2\u9009\u56FE\u5C42\u3002","filter-unsharp-mask-title":"USM\u9510\u5316","filter-unsharp-mask-description":"\u6839\u636E\u9644\u8FD1\u50CF\u7D20\u7684\u5747\u503C\u5E94\u7528\u9510\u5316\u5230\u5DF2\u9009\u56FE\u5C42\u3002","filter-unsharp-mask-strength":"\u5F3A\u5EA6","filter-grid":"\u7F51\u683C","filter-grid-description":"\u7ED9\u5F53\u524D\u5C42\u6DFB\u52A0\u7F51\u683C\u7EBF\u3002","filter-noise":"\u566A\u97F3","filter-noise-description":"\u5E94\u7528\u566A\u97F3\u5230\u5DF2\u9009\u56FE\u5C42\u3002","filter-noise-scale":"\u56FE\u6848\u5927\u5C0F","filter-noise-alpha":"Alpha","filter-pattern":"\u56FE\u6848","filter-pattern-description":"\u4E3A\u6240\u9009\u56FE\u5C42\u751F\u6210\u56FE\u6848\u3002\u62D6\u52A8\u9F20\u6807\u8FDB\u884C\u66F4\u591A\u64CD\u4F5C\u3002","filter-distort":"\u53D8\u5F62","filter-distort-description":"\u5BF9\u6240\u9009\u56FE\u5C42\u8FDB\u884C\u53D8\u5F62\u64CD\u4F5C\u3002","filter-distort-phase":"\u76F8\u4F4D","filter-distort-stepsize":"\u6B65\u957F","filter-distort-sync-xy":"\u540C\u6B65XY","filter-vanish-point":"\u6D88\u5931\u70B9","filter-vanish-point-title":"\u6D88\u5931\u70B9","filter-vanish-point-description":"\u6DFB\u52A0\u6D88\u5931\u70B9\u81F3\u6240\u9009\u56FE\u5C42\u3002 \u62D6\u52A8\u9F20\u6807\u79FB\u52A8\u6D88\u5931\u70B9\u3002","filter-vanish-point-lines":"\u7EBF\u6761\u6570\u91CF","import-opening":"\u6253\u5F00\u6587\u4EF6...","import-title":"\u5BFC\u5165\u56FE\u50CF","import-too-large":"\u56FE\u50CF\u8FC7\u5927\uFF0C\u5C06\u4F1A\u8FDB\u884C\u7F29\u5C0F\u3002","import-btn-as-layer":"\u4F5C\u4E3A\u56FE\u5C42","import-btn-as-image":"\u4F5C\u4E3A\u56FE\u50CF","import-as-layer-title":"\u5BFC\u5165\u56FE\u50CF\u4F5C\u4E3A\u65B0\u56FE\u5C42","import-as-layer-description":"\u8C03\u6574\u5BFC\u5165\u56FE\u50CF\u7684\u4F4D\u7F6E\u3002","import-as-layer-limit-reached":"\u8FBE\u5230\u56FE\u5C42\u6570\u91CF\u4E0A\u9650\u3002\u56FE\u50CF\u5C06\u4F1A\u5E94\u7528\u5230\u5DF2\u6709\u56FE\u5C42\u3002","import-as-layer-fit":"\u9002\u5E94","import-flatten":"\u62FC\u5408\u56FE\u50CF","import-unsupported-file":"\u4E0D\u652F\u6301\u6B64\u7C7B\u6587\u4EF6\u7C7B\u578B\u3002\u67E5\u770B\u5E2E\u52A9\u3002","import-broken-file":"\u4E0D\u80FD\u52A0\u8F7D\u56FE\u50CF\u3002\u6587\u4EF6\u53EF\u80FD\u53D7\u635F\u3002","import-psd-unsupported":"\u4E0D\u652F\u6301\u8BE5\u529F\u80FD\u3002PSD\u9700\u8981\u62FC\u5408\u3002","import-psd-limited-support":"PSD\u652F\u6301\u53D7\u9650\u3002\u62FC\u5408\u529F\u80FD\u5C06\u4F1A\u66F4\u8FD1\u539F\u59CB\u56FE\u50CF\u3002","import-psd-too-large":"\u56FE\u50CF\u8D85\u8FC7{x} x {x}\u4E2A\u50CF\u7D20\u3002\u4E0D\u80FD\u5BFC\u5165\u3002","import-psd-size":"\u56FE\u50CF\u5927\u5C0F","hand-reset":"\u91CD\u7F6E","hand-fit":"\u9002\u5E94","bucket-tolerance":"\u5BB9\u5DEE","bucket-sample":"\u91C7\u6837","bucket-sample-title":"\u4ECE\u7279\u5B9A\u56FE\u5C42\u8FDB\u884C\u8272\u5F69\u91C7\u6837","bucket-sample-all":"\u5168\u90E8","bucket-sample-active":"\u5F53\u524D","bucket-sample-above":"\u4E4B\u524D","bucket-grow":"\u586B\u5145\u6269\u5C55","bucket-grow-title":"\u6269\u5C55\u586B\u5145\u7684\u533A\u57DF\uFF08\u50CF\u7D20\uFF09","bucket-contiguous":"\u8FDE\u7EED\u7684","bucket-contiguous-title":"\u4EC5\u586B\u5145\u76F8\u8FDE\u7684\u533A\u57DF","gradient-linear":"\u7EBF\u6027","gradient-linear-mirror":"\u5BF9\u79F0","gradient-radial":"\u5F84\u5411","shape-stroke":"\u7EBF\u6761","shape-fill":"\u586B\u5145","shape-rect":"\u65B9\u5F62","shape-ellipse":"\u5706\u5F62","shape-line":"\u7EBF\u6761","shape-line-width":"\u7EBF\u6761\u5BBD\u5EA6","shape-outwards":"\u81EA\u4E2D\u5FC3\u5411\u5916","shape-fixed":"\u9501\u5B9A 1:1","text-instruction":"\u70B9\u51FB\u753B\u5E03\u6DFB\u52A0\u6587\u672C","text-title":"\u6DFB\u52A0\u6587\u672C","text-text":"\u6587\u672C","text-font":"\u5B57\u4F53","text-placeholder":"\u8BF7\u8F93\u5165","text-color":"\u8272\u5F69","text-size":"\u5927\u5C0F","text-line-height":"\u884C\u95F4\u8DDD","text-letter-spacing":"\u5B57\u7B26\u95F4\u8DDD","text-left":"\u5DE6\u5BF9\u9F50","text-center":"\u5C45\u4E2D","text-right":"\u53F3\u5BF9\u9F50","text-italic":"\u659C\u4F53","text-bold":"\u52A0\u7C97","save-reminder-title":"\u4F5C\u54C1\u672A\u4FDD\u5B58","save-reminder-text":"\u56FE\u753B\u5DF2{a}\u5206\u949F{b}\u672A\u4FDD\u5B58\u3002\u7ACB\u523B\u4FDD\u5B58\u4EE5\u907F\u514D\u8FDB\u5EA6\u4E22\u5931\u3002","save-reminder-save-psd":"\u4FDD\u5B58\u4E3APSD","save-reminder-psd-layers":"PSD\u53EF\u4FDD\u7559\u6240\u6709\u56FE\u5C42\u3002","backup-drawing":"\u4F60\u53EF\u4EE5\u5907\u4EFD\u7ED8\u753B\u3002","submit":"\u63D0\u4EA4","submit-title":"\u63D0\u4EA4\u4F5C\u54C1","submit-prompt":"\u786E\u8BA4\u63D0\u4EA4\uFF1F","submit-submitting":"\u63D0\u4EA4\u4E2D","embed-init-loading":"\u52A0\u8F7Dapp","embed-init-waiting":"\u56FE\u50CF\u4E0A\u4F20\u4E2D","unsaved":"\u672A\u4FDD\u5B58","help":"\u5E2E\u52A9","tab-settings":"\u8BBE\u7F6E","settings-language":"\u8BED\u8A00","settings-language-reload":"\u5237\u65B0\u540E\u66F4\u6539\u8BED\u8A00","settings-theme":"\u4E3B\u9898","theme-dark":"\u6DF1\u8272","theme-light":"\u6D45\u8272","terms-of-service":"\u670D\u52A1\u6761\u6B3E","licenses":"\u8BB8\u53EF","source-code":"\u6E90\u4EE3\u7801","auto":"\u81EA\u52A8","zoom-in":"\u653E\u5927","zoom-out":"\u7F29\u5C0F","radius":"\u534A\u5F84","constrain-proportions":"\u4FDD\u6301\u7EB5\u6A2A\u6BD4","width":"\u5BBD\u5EA6","height":"\u9AD8\u5EA6","opacity":"\u4E0D\u900F\u660E\u5EA6","red":"\u7EA2","green":"\u7EFF","blue":"\u84DD","eraser":"\u6A61\u76AE\u64E6","center":"\u5C45\u4E2D","layers":"\u56FE\u5C42","background":"\u80CC\u666F","scaling-algorithm":"\u7F29\u653E\u7B97\u6CD5","algorithm-smooth":"\u5E73\u6ED1","algorithm-pixelated":"\u50CF\u7D20\u5316","preview":"\u9884\u89C8","angle-snap":"\u5BF9\u9F50","angle-snap-title":"\u4EE545\xb0\u89D2\u5EA6\u5BF9\u9F50","lock-alpha":"\u9501\u5B9A","lock-alpha-title":"\u9501\u5B9A\u56FE\u5C42\u900F\u660E\u5EA6","reverse":"\u53CD\u5411","compare-before":"\u4E4B\u524D","compare-after":"\u4E4B\u540E","loading":"\u52A0\u8F7D\u4E2D","x-minutes":"{x}\u5206\u949F"}');

},{}]},["8vcQl"], null, "parcelRequire94c2")

//# sourceMappingURL=zh-CN.21b77a10.js.map
