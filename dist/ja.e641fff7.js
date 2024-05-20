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
})({"9Fs61":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "488c4f4fe641fff7";
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

},{}],"hU4y7":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"\u5DE6\u53F3\u5207\u308A\u66FF\u3048","toggle-show-tools":"\u8868\u793A/\u975E\u8868\u793A","scroll":"\u30B9\u30AF\u30ED\u30FC\u30EB","donate":"\u5BC4\u4ED8","home":"\u30DB\u30FC\u30E0","modal-new-tab":"\u65B0\u3057\u3044\u30BF\u30D6\u3067\u958B\u304F","tab-edit":"\u7DE8\u96C6","tab-file":"\u30D5\u30A1\u30A4\u30EB","tool-brush":"\u30D6\u30E9\u30B7","tool-paint-bucket":"\u30D0\u30B1\u30C4","tool-gradient":"\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3","tool-shape":"\u56F3\u5F62","tool-text":"\u30C6\u30AD\u30B9\u30C8","tool-hand":"\u624B\u306E\u3072\u3089\u30C4\u30FC\u30EB","tool-zoom":"\u30BA\u30FC\u30E0","undo":"\u30A2\u30F3\u30C9\u30A5","redo":"\u30EA\u30C9\u30A5","brush-pen":"\u30DA\u30F3","brush-blend":"\u6C34\u5F69","brush-sketchy":"\u30B9\u30B1\u30C3\u30C1","brush-pixel":"\u30D4\u30AF\u30BB\u30EB","brush-chemy":"\u30B1\u30DF\u30FC","brush-smudge":"\u6307\u5148\u30C4\u30FC\u30EB","brush-size":"\u30B5\u30A4\u30BA","brush-blending":"\u6C34\u5206\u91CF","brush-toggle-pressure":"\u7B46\u5727","brush-pen-circle":"\u5186","brush-pen-chalk":"\u30C1\u30E7\u30FC\u30AF","brush-pen-calligraphy":"\u30AB\u30EA\u30B0\u30E9\u30D5\u30A3\u30FC","brush-pen-square":"\u89D2","brush-sketchy-scale":"\u30B9\u30B1\u30FC\u30EB","brush-pixel-dither":"\u30C9\u30C3\u30C8","brush-chemy-fill":"\u5857\u308A\u6F70\u3057","brush-chemy-stroke":"\u7DDA","brush-chemy-mirror-x":"\u5DE6\u53F3\u5BFE\u79F0","brush-chemy-mirror-y":"\u4E0A\u4E0B\u5BFE\u79F0","brush-chemy-gradient":"\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3","brush-eraser-transparent-bg":"\u80CC\u666F\u306E\u900F\u660E\u5316","stabilizer":"\u624B\u3076\u308C\u88DC\u6B63","stabilizer-title":"\u624B\u3076\u308C\u88DC\u6B63","eyedropper":"\u30B9\u30DD\u30A4\u30C8","secondary-color":"\u30BB\u30AB\u30F3\u30C0\u30EA\u30FC\u30AB\u30E9\u30FC","manual-color-input":"\u6570\u5024\u5165\u529B","mci-hex":"Hex","mci-copy":"\u30B3\u30D4\u30FC","modal-ok":"Ok","modal-cancel":"\u30AD\u30E3\u30F3\u30BB\u30EB","modal-close":"\u9589\u3058\u308B","layers-active-layer":"\u30A2\u30AF\u30C6\u30A3\u30D6\u30EC\u30A4\u30E4\u30FC","layers-layer":"\u30EC\u30A4\u30E4\u30FC","layers-copy":"\u30B3\u30D4\u30FC","layers-blending":"\u5408\u6210\u65B9\u6CD5","layers-new":"\u65B0\u898F","layers-remove":"\u524A\u9664","layers-duplicate":"\u8907\u88FD","layers-merge":"\u4E0B\u306E\u30EC\u30A4\u30E4\u30FC\u3068\u7D50\u5408","layers-rename":"\u30EA\u30CD\u30FC\u30E0","layers-active-layer-visible":"\u30EC\u30A4\u30E4\u30FC\u8868\u793A\u4E2D","layers-active-layer-hidden":"\u30EC\u30A4\u30E4\u30FC\u975E\u8868\u793A\u4E2D","layers-visibility-toggle":"\u30EC\u30A4\u30E4\u30FC\u8868\u793A/\u975E\u8868\u793A","layers-blend-normal":"\u901A\u5E38","layers-blend-darken":"\u6BD4\u8F03(\u6697)","layers-blend-multiply":"\u4E57\u7B97","layers-blend-color-burn":"\u713C\u304D\u8FBC\u307F","layers-blend-lighten":"\u6BD4\u8F03(\u660E)","layers-blend-screen":"\u30B9\u30AF\u30EA\u30FC\u30F3","layers-blend-color-dodge":"\u8986\u3044\u713C\u304D","layers-blend-overlay":"\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4","layers-blend-soft-light":"\u30BD\u30D5\u30C8\u30E9\u30A4\u30C8","layers-blend-hard-light":"\u30CF\u30FC\u30C9\u30E9\u30A4\u30C8","layers-blend-difference":"\u5DEE\u306E\u7D76\u5BFE\u5024","layers-blend-exclusion":"\u9664\u5916","layers-blend-hue":"\u8272\u76F8","layers-blend-saturation":"\u5F69\u5EA6","layers-blend-color":"\u30AB\u30E9\u30FC","layers-blend-luminosity":"\u8F1D\u5EA6","layers-rename-title":"\u30EA\u30CD\u30FC\u30E0","layers-rename-name":"\u30EC\u30A4\u30E4\u30FC\u540D","layers-rename-clear":"\u30AF\u30EA\u30A2","layers-rename-sketch":"\u30E9\u30D5","layers-rename-colors":"\u8272","layers-rename-shading":"\u5F71","layers-rename-lines":"\u7DDA","layers-rename-effects":"\u52B9\u679C","layers-rename-foreground":"\u4E0A","layers-merge-modal-title":"\u30EC\u30A4\u30E4\u30FC\u7D50\u5408","layers-merge-description":"\u4E0B\u306E\u30EC\u30A4\u30E4\u30FC\u3068\u7D50\u5408\u3057\u307E\u3059\u3002 \u5408\u6210\u65B9\u6CD5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002:","file-no-autosave":"\u30AF\u30E9\u30A6\u30C9\u306B\u81EA\u52D5\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093","file-new":"\u65B0\u898F","file-import":"\u914D\u7F6E","file-save":"\u4FDD\u5B58","file-format":"\u4FDD\u5B58\u5F62\u5F0F","file-copy":"\u30B3\u30D4\u30FC","file-copy-title":"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC","file-share":"\u30B7\u30A7\u30A2","file-storage":"\u30D6\u30E9\u30A6\u30B6\u30B9\u30C8\u30EC\u30FC\u30B8","file-storage-thumb-title":"\u518D\u8AAD\u307F\u8FBC\u307F\u6642\u306B\u5FA9\u5143\u3057\u307E\u3059\u3002","file-storage-about":"\u30D6\u30E9\u30A6\u30B6\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u3064\u3044\u3066","file-storage-cant-access":"\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u305B\u3093\u3002","file-storage-empty":"\u7A7A","file-storage-store":"\u4FDD\u7BA1","file-storage-clear":"\u524A\u9664","file-storage-storing":"\u4FDD\u7BA1\u4E2D\u3002","file-storage-overwrite":"\u4E0A\u66F8\u304D","file-storage-min-ago":"{x}\u5206\u524D","file-storage-hours-ago":"{x}\u6642\u9593\u524D","file-storage-days-ago":"{x}\u65E5\u524D","file-storage-month-ago":"\u4E00\u30F6\u6708\u4EE5\u4E0A","file-storage-restored":"\u30D6\u30E9\u30A6\u30B6\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u5FA9\u5143\u3057\u307E\u3057\u305F\u3002","file-storage-stored":"\u30D6\u30E9\u30A6\u30B6\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002","file-storage-failed":"\u30D6\u30E9\u30A6\u30B6\u30B9\u30C8\u30EC\u30FC\u30B8\u3078\u306E\u4FDD\u5B58\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002","file-storage-failed-1":"\u4FDD\u5B58\u306B\u5931\u6557\u3057\u305F\u539F\u56E0:","file-storage-failed-2":"\u30C7\u30A3\u30B9\u30AF\u5BB9\u91CF\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059\u3002","file-storage-failed-3":"\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u30BF\u30D6\u306E\u305F\u3081\u30B9\u30C8\u30EC\u30FC\u30B8\u304C\u4F7F\u3048\u307E\u305B\u3093\u3002","file-storage-failed-4":"\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u30B9\u30C8\u30EC\u30FC\u30B8\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002","file-storage-failed-clear":"\u524A\u9664\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002","file-upload":"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","cleared-layer":"\u30EC\u30A4\u30E4\u30FC\u3092\u30AF\u30EA\u30A2\u3057\u307E\u3057\u305F\u3002","filled":"Filled","new-title":"\u65B0\u898F\u753B\u50CF","new-current":"Current","new-fit":"Fit","new-oversize":"Oversize","new-square":"Square","new-landscape":"Landscape","new-portrait":"Portrait","new-screen":"Screen","new-video":"Video","new-din-paper":"DIN Paper","new-px":"px","new-ratio":"\u7E26\u6A2A\u6BD4","upload-title":"Imgur\u306B\u6295\u7A3F","upload-link-notice":"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u305F\u753B\u50CF\u306F\u3001URL\u3092\u77E5\u3063\u3066\u3044\u308B\u4EBA\u306A\u3089\u8AB0\u3067\u3082\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","upload-name":"\u984C\u540D","upload-title-untitled":"\u540D\u79F0\u672A\u8A2D\u5B9A","upload-caption":"\u30AD\u30E3\u30D7\u30B7\u30E7\u30F3","upload-submit":"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","upload-uploading":"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3066\u3044\u307E\u3059\u3002","upload-success":"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002","upload-failed":"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002","upload-delete":"\u3053\u3053\u304B\u3089\u524A\u9664\u3067\u304D\u307E\u3059:","cropcopy-title-copy":"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC","cropcopy-title-crop":"\u5207\u308A\u53D6\u308A","cropcopy-click-hold":"\u53F3\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F\u9577\u62BC\u3057\u3067\u30B3\u30D4\u30FC\u3002","cropcopy-btn-copy":"\u30B3\u30D4\u30FC","cropcopy-copied":"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002","cropcopy-btn-crop":"\u5207\u308A\u53D6\u308A\u307E\u3059","crop-drag-to-crop":"\u5207\u308A\u53D6\u308B\u7BC4\u56F2","filter-crop-extend":"\u5207\u308A\u53D6\u308A","filter-flip":"\u53CD\u8EE2","filter-perspective":"\u30D1\u30FC\u30B9","filter-resize":"\u30EA\u30B5\u30A4\u30BA","filter-rotate":"\u56DE\u8EE2","filter-transform":"\u81EA\u7531\u5909\u5F62","filter-bright-contrast":"\u660E\u5EA6","filter-curves":"\u30AB\u30FC\u30D6","filter-hue-sat":"\u8272\u76F8","filter-invert":"\u30CD\u30AC\u30DD\u30B8","filter-tilt-shift":"\u88AB\u5199\u754C\u6DF1\u5EA6","filter-to-alpha":"\u900F\u660E\u5316","filter-triangle-blur":"\u30D6\u30E9\u30FC","filter-unsharp-mask":"\u30B7\u30E3\u30FC\u30D7","filter-crop-title":"\u5207\u308A\u53D6\u308A","filter-crop-description":"\u753B\u50CF\u306E\u30C8\u30EA\u30DF\u30F3\u30B0\u307E\u305F\u306F\u62E1\u5F35\u3002","filter-crop-left":"\u5DE6","filter-crop-right":"\u53F3","filter-crop-top":"\u4E0A","filter-crop-bottom":"\u4E0B","filter-crop-rule-thirds":"\u4E09\u5206\u5272\u6CD5","filter-crop-fill":"\u5857\u308A\u6F70\u3057","filter-flip-title":"\u53CD\u8EE2","filter-flip-description":"\u30EC\u30A4\u30E4\u30FC\u307E\u305F\u306F\u753B\u50CF\u5168\u4F53\u3092\u53CD\u8EE2\u3057\u307E\u3059\u3002","filter-flip-horizontal":"\u5DE6\u53F3\u53CD\u8EE2","filter-flip-vertical":"\u4E0A\u4E0B\u53CD\u8EE2","filter-flip-image":"\u753B\u50CF","filter-flip-layer":"\u30EC\u30A4\u30E4\u30FC","filter-perspective-title":"\u30D1\u30FC\u30B9","filter-perspective-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u3092\u5909\u5F62\u3057\u307E\u3059\u3002","filter-resize-title":"\u30EA\u30B5\u30A4\u30BA","filter-resize-description":"\u753B\u50CF\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3057\u307E\u3059\u3002","filter-rotate-title":"\u56DE\u8EE2","filter-rotate-description":"\u753B\u50CF\u3092\u56DE\u8EE2\u3002","filter-transform-empty":"\u30EC\u30A4\u30E4\u30FC\u304C\u7A7A\u3067\u3059\u3002","filter-transform-title":"\u81EA\u7531\u5909\u5F62","filter-transform-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u3092\u5909\u5F62\u3057\u307E\u3059\u3002\u30B7\u30D5\u30C8\u30AD\u30FC\u3092\u62BC\u4E0B\u3059\u308B\u3068\u52D5\u4F5C\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002","filter-transform-rotation":"\u89D2\u5EA6","filter-transform-flip":"\u53CD\u8EE2","filter-transform-center":"\u4E2D\u592E","filter-transform-constrain":"\u7E26\u6A2A\u6BD4","filter-transform-snap":"\u30B9\u30CA\u30C3\u30D7","filter-transform-snap-title":"\u56DE\u8EE2\uFF65\u79FB\u52D5\u6642\u306B\u30B9\u30CA\u30C3\u30D7\u3057\u307E\u3059","filter-bright-contrast-title":"\u660E\u5EA6/\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8","filter-bright-contrast-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u306E\u660E\u5EA6/\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u3092\u5909\u66F4\u3057\u307E\u3059\u3002","filter-bright-contrast-brightness":"\u660E\u5EA6","filter-bright-contrast-contrast":"\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8","filter-curves-title":"\u30AB\u30FC\u30D6","filter-curves-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u306E\u8272\u8ABF\u3092\u30AB\u30FC\u30D6\u3067\u8ABF\u6574\u3057\u307E\u3059\u3002","filter-curves-all":"\u5168\u3066","filter-hue-sat-title":"\u8272\u76F8/\u5F69\u5EA6","filter-hue-sat-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u306E\u8272\u76F8\u3068\u5F69\u5EA6\u3092\u5909\u66F4\u3057\u307E\u3059\u3002","filter-hue-sat-hue":"\u8272\u76F8","filter-hue-sat-saturation":"\u5F69\u5EA6","filter-applied":"\u53CD\u8EE2\u3057\u307E\u3057\u305F\u3002","filter-tilt-shift-title":"\u88AB\u5199\u754C\u6DF1\u5EA6","filter-tilt-shift-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u306E\u30D4\u30F3\u30C8\u306E\u5408\u3046\u7BC4\u56F2\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002","filter-tilt-shift-blur":"\u307C\u304B\u3057\u534A\u5F84","filter-tilt-shift-gradient":"\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u534A\u5F84","filter-to-alpha-title":"\u900F\u660E\u5316","filter-to-alpha-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u306E\u8F1D\u5EA6\u3092\u900F\u660E\u5EA6\u306B\u5909\u63DB\u3057\u307E\u3059\u3002","filter-to-alpha-inverted-lum":"\u8F1D\u5EA6\u53CD\u8EE2","filter-to-alpha-lum":"\u8F1D\u5EA6","filter-to-alpha-replace":"Replace RGB","filter-triangle-blur-title":"\u30D6\u30E9\u30FC","filter-triangle-blur-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u306B\u307C\u304B\u3057\u3092\u304B\u3051\u307E\u3059\u3002","filter-unsharp-mask-title":"\u30A2\u30F3\u30B7\u30E3\u30FC\u30D7\u30DE\u30B9\u30AF","filter-unsharp-mask-description":"\u9078\u629E\u4E2D\u306E\u30EC\u30A4\u30E4\u30FC\u306E\u753B\u50CF\u3092\u30B7\u30E3\u30FC\u30D7\u306B\u3057\u307E\u3059\u3002","filter-unsharp-mask-strength":"\u5F37\u3055","filter-grid":"\u30B0\u30EA\u30C3\u30C9","filter-grid-description":"\u9078\u629E\u30EC\u30A4\u30E4\u30FC\u306B\u30B0\u30EA\u30C3\u30C9\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002","filter-noise":"\u30CE\u30A4\u30BA","filter-noise-description":"\u9078\u629E\u30EC\u30A4\u30E4\u30FC\u306B\u30CE\u30A4\u30BA\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002","filter-noise-scale":"\u30B9\u30B1\u30FC\u30EB","filter-noise-alpha":"\u900F\u660E","filter-pattern":"\u30D1\u30BF\u30FC\u30F3","filter-pattern-description":"\u9078\u629E\u30EC\u30A4\u30E4\u30FC\u306B\u30D1\u30BF\u30FC\u30F3\u3092\u4F5C\u308A\u307E\u3059\u3002\u30D7\u30EC\u30D3\u30E5\u30FC\u306F\u30C9\u30E9\u30C3\u30B0\u3067\u304D\u307E\u3059\u3002","filter-distort":"\u3086\u304C\u307F","filter-distort-description":"\u9078\u629E\u30EC\u30A4\u30E4\u30FC\u306B\u3086\u304C\u307F\u3092\u9069\u7528\u3057\u307E\u3059\u3002","filter-distort-phase":"\u30D5\u30A7\u30A4\u30BA","filter-distort-stepsize":"\u30B9\u30C6\u30C3\u30D7\u30B5\u30A4\u30BA","filter-distort-sync-xy":"\u540C\u671F XY","filter-vanish-point":"\u96C6\u4E2D\u7DDA","filter-vanish-point-title":"\u96C6\u4E2D\u7DDA","filter-vanish-point-description":"\u9078\u629E\u30EC\u30A4\u30E4\u30FC\u306B\u96C6\u4E2D\u7DDA\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u30D7\u30EC\u30D3\u30E5\u30FC\u306F\u30C9\u30E9\u30C3\u30B0\u3067\u304D\u307E\u3059\u3002","filter-vanish-point-lines":"\u7DDA\u306E\u6570","import-opening":"\u753B\u50CF\u3092\u958B\u3044\u3066\u3044\u307E\u3059\u3002","import-title":"\u753B\u50CF\u306E\u8AAD\u307F\u8FBC\u307F","import-too-large":"\u753B\u50CF\u304C\u5927\u304D\u3059\u304E\u308B\u305F\u3081\u3001\u7E2E\u5C0F\u3057\u307E\u3059\u3002","import-btn-as-layer":"\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066","import-btn-as-image":"\u753B\u50CF\u3068\u3057\u3066","import-as-layer-title":"\u65B0\u898F\u30EC\u30A4\u30E4\u30FC\u306B\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002","import-as-layer-description":"\u753B\u50CF\u306E\u4F4D\u7F6E\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002","import-as-layer-limit-reached":"\u5236\u9650\u679A\u6570\u3092\u8D85\u3048\u307E\u3057\u305F\u3002\u753B\u50CF\u306F\u65E2\u5B58\u306E\u30EC\u30A4\u30E4\u30FC\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002","import-as-layer-fit":"\u30D5\u30A3\u30C3\u30C8","import-flatten":"\u30EC\u30A4\u30E4\u30FC\u7D50\u5408","import-unsupported-file":"\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u3067\u3059\u3002\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u306F\u30D8\u30EB\u30D7\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002","import-broken-file":"\u753B\u50CF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30D5\u30A1\u30A4\u30EB\u304C\u7834\u640D\u3057\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002","import-psd-unsupported":"\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u5F62\u5F0F\u3067\u3059\u3002","import-psd-limited-support":"PSD\u306E\u30B5\u30DD\u30FC\u30C8\u306F\u9650\u5B9A\u7684\u3067\u3059\u3002\u7D50\u5408\u3059\u308C\u3070\u6B63\u3057\u304F\u8868\u793A\u3055\u308C\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002","import-psd-too-large":"\u753B\u50CF\u304C {x} x {x} \u30D4\u30AF\u30BB\u30EB\u3092\u8D85\u3048\u3066\u3044\u308B\u305F\u3081\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u307E\u305B\u3093\u3002","import-psd-size":"\u753B\u50CF\u306E\u30B5\u30A4\u30BA","hand-reset":"\u30EA\u30BB\u30C3\u30C8","hand-fit":"\u30D5\u30A3\u30C3\u30C8","bucket-tolerance":"\u8A31\u5BB9\u7BC4\u56F2","bucket-sample":"\u53C2\u7167","bucket-sample-title":"\u3069\u306E\u30EC\u30A4\u30E4\u30FC\u3092\u53C2\u7167\u3059\u308B\u304B","bucket-sample-all":"\u5168\u3066","bucket-sample-active":"\u73FE\u5728","bucket-sample-above":"\u4E00\u3064\u4E0A","bucket-grow":"\u62E1\u5F35","bucket-grow-title":"\u5857\u308A\u6F70\u3057\u306E\u7BC4\u56F2\u3092\u62E1\u5F35\uFF08\u5358\u4F4D\u30D4\u30AF\u30BB\u30EB\uFF09","bucket-contiguous":"\u96A3\u63A5","bucket-contiguous-title":"\u96A3\u63A5\u3057\u305F\u9818\u57DF\u306E\u307F\u3092\u5857\u308A\u6F70\u3057\u307E\u3059","gradient-linear":"\u7DDA\u72B6","gradient-linear-mirror":"\u53CD\u5C04\u5F62","gradient-radial":"\u653E\u5C04\u72B6","shape-stroke":"\u30B9\u30C8\u30ED\u30FC\u30AF","shape-fill":"\u5857\u308A\u6F70\u3057","shape-rect":"\u77E9\u5F62","shape-ellipse":"\u6955\u5186","shape-line":"\u7DDA","shape-line-width":"\u7DDA\u306E\u5E45","shape-outwards":"\u5916\u65B9\u5411","shape-fixed":"\u7E26\u6A2A1:1","text-instruction":"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3002","text-title":"\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0","text-placeholder":"\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B","text-color":"\u30AB\u30E9\u30FC","text-size":"\u30B5\u30A4\u30BA","text-left":"\u5DE6\u5BC4\u305B","text-center":"\u4E2D\u592E","text-right":"\u53F3\u5BC4\u305B","text-italic":"\u659C\u4F53","text-bold":"\u592A\u5B57","save-reminder-title":"\u4F5C\u696D\u3092\u4FDD\u5B58\u3057\u3066\u3044\u307E\u305B\u3093\u3002","save-reminder-text":"\u753B\u50CF\u306F{a}\u5206\u9593{b}\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u4F5C\u696D\u3092\u5931\u308F\u306A\u3044\u3088\u3046\u306B\u4ECA\u3059\u3050\u4FDD\u5B58\u3057\u3066\u304F\u3060\u3055\u3044\u3002","save-reminder-save-psd":"PSD\u3067\u4FDD\u5B58\u3002","save-reminder-psd-layers":"PSD\u306F\u5168\u30EC\u30A4\u30E4\u30FC\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002","backup-drawing":"\u753B\u50CF\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3067\u304D\u307E\u3059\u3002","submit":"\u9001\u4FE1","submit-title":"\u753B\u50CF\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002","submit-prompt":"\u753B\u50CF\u3092\u9001\u4FE1\u3057\u3066\u3082\u5B9C\u3057\u3044\u3067\u3059\u304B?","submit-submitting":"\u51E6\u7406\u3057\u3066\u3044\u307E\u3059\u3002","embed-init-loading":"Loading app","embed-init-waiting":"\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u3002","unsaved":"\u672A\u4FDD\u5B58","help":"\u30D8\u30EB\u30D7","tab-settings":"\u8A2D\u5B9A","settings-language":"\u8A00\u8A9E","settings-language-reload":"\u30EA\u30ED\u30FC\u30C9\u5F8C\u306B\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002","settings-theme":"\u30C6\u30FC\u30DE","theme-dark":"\u30C0\u30FC\u30AF","theme-light":"\u30E9\u30A4\u30C8","terms-of-service":"Terms of Service","licenses":"Licenses","source-code":"Source Code","auto":"\u81EA\u52D5\u691C\u51FA","zoom-in":"\u62E1\u5927","zoom-out":"\u7E2E\u5C0F","radius":"\u534A\u5F84","constrain-proportions":"\u7E26\u6A2A\u6BD4\u3092\u4FDD\u6301","width":"\u5E45","height":"\u9AD8\u3055","opacity":"\u4E0D\u900F\u660E\u5EA6","red":"\u8D64","green":"\u7DD1","blue":"\u9752","eraser":"\u6D88\u3057\u30B4\u30E0","center":"\u4E2D\u592E","layers":"\u30EC\u30A4\u30E4\u30FC","background":"\u80CC\u666F","scaling-algorithm":"\u30B9\u30B1\u30FC\u30EA\u30F3\u30B0","algorithm-smooth":"\u30B9\u30E0\u30FC\u30BA","algorithm-pixelated":"\u30D4\u30AF\u30BB\u30EB\u5316","preview":"\u30D7\u30EC\u30D3\u30E5\u30FC","angle-snap":"\u30B9\u30CA\u30C3\u30D7","angle-snap-title":"45\xb0\u306E\u89D2\u5EA6\u306B\u30B9\u30CA\u30C3\u30D7\u3057\u307E\u3059","lock-alpha":"\u900F\u660E\u90E8\u5206","lock-alpha-title":"\u900F\u660E\u90E8\u5206\u306E\u4FDD\u8B77","reverse":"\u53CD\u8EE2","compare-before":"\u30D3\u30D5\u30A9\u30A2","compare-after":"\u30A2\u30D5\u30BF\u30FC","x-minutes":"{x}\u5206"}');

},{}]},["9Fs61"], null, "parcelRequire94c2")

//# sourceMappingURL=ja.e641fff7.js.map
