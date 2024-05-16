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
})({"8LvWj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d0284af88c8bd043";
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

},{}],"itgWX":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"\u041C\u0435\u043D\u044E \u0432\u043B\u0435\u0432\u043E/\u0432\u043F\u0440\u0430\u0432\u043E","toggle-show-tools":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C/\u0441\u043A\u0440\u044B\u0442\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B","scroll":"\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430","donate":"\u041F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u0442\u044C","home":"\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430","modal-new-tab":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435","tab-edit":"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C","tab-file":"\u0424\u0430\u0439\u043B","tool-brush":"\u041A\u0438\u0441\u0442\u044C","tool-paint-bucket":"\u0417\u0430\u043B\u0438\u0432\u043A\u0430","tool-gradient":"\u0413\u0440\u0430\u0434\u0438\u0435\u043D\u0442","tool-shape":"\u0424\u043E\u0440\u043C\u0430","tool-text":"\u0422\u0435\u043A\u0441\u0442","tool-hand":"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \xab\u0420\u0443\u043A\u0430\xbb","tool-zoom":"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C/\u043E\u0442\u0434\u0430\u043B\u0438\u0442\u044C","undo":"\u041E\u0442\u043C\u0435\u043D\u0430","redo":"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","brush-pen":"\u0420\u0443\u0447\u043A\u0430","brush-blend":"\u041F\u0435\u0440\u0435\u0445\u043E\u0434","brush-sketchy":"\u042D\u0441\u043A\u0438\u0437","brush-pixel":"\u041F\u0438\u043A\u0441\u0435\u043B\u0438","brush-chemy":"\u0413\u0440\u0430\u0444\u0438\u043A\u0430 \u043E\u0441\u043E\u0431\u043E\u0439 \u0444\u043E\u0440\u043C\u044B","brush-smudge":"\u041F\u0430\u043B\u0435\u0446","brush-size":"\u0420\u0430\u0437\u043C\u0435\u0440","brush-blending":"\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435","brush-toggle-pressure":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F","brush-pen-circle":"\u041A\u0440\u0443\u0433","brush-pen-chalk":"\u041C\u0435\u043B","brush-pen-calligraphy":"\u041A\u0430\u043B\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u044F","brush-pen-square":"\u041A\u0432\u0430\u0434\u0440\u0430\u0442","brush-sketchy-scale":"\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435","brush-pixel-dither":"\u0414\u0438\u0437\u0435\u0440\u0438\u043D\u0433","brush-chemy-fill":"\u0417\u0430\u043B\u0438\u0432\u043A\u0430","brush-chemy-stroke":"\u041E\u0431\u0432\u043E\u0434\u043A\u0430","brush-chemy-mirror-x":"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F","brush-chemy-mirror-y":"\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F","brush-chemy-gradient":"\u0413\u0440\u0430\u0434\u0438\u0435\u043D\u0442","brush-eraser-transparent-bg":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0444\u043E\u043D","stabilizer":"\u0421\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440","stabilizer-title":"\u0421\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043E\u0431\u0432\u043E\u0434\u043A\u0438","eyedropper":"\u041F\u0438\u043F\u0435\u0442\u043A\u0430","secondary-color":"\u0412\u0442\u043E\u0440\u0438\u0447\u043D\u044B\u0439 \u0446\u0432\u0435\u0442","manual-color-input":"\u0412\u0432\u043E\u0434 \u0446\u0432\u0435\u0442\u0430 \u0432\u0440\u0443\u0447\u043D\u0443\u044E","mci-hex":"\u0428\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043D\u044B\u0439","mci-copy":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","modal-ok":"OK","modal-cancel":"\u041E\u0442\u043C\u0435\u043D\u0430","modal-close":"\u0417\u0430\u043A\u0440\u044B\u0442\u044C","layers-active-layer":"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043B\u043E\u0439","layers-layer":"\u0421\u043B\u043E\u0439","layers-copy":"\u043A\u043E\u043F\u0438\u044F","layers-blending":"\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u0435","layers-new":"\u041D\u043E\u0432\u044B\u0439 \u0441\u043B\u043E\u0439","layers-remove":"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u043E\u0439","layers-duplicate":"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u043E\u0439","layers-merge":"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u0441\u043E \u0441\u043B\u043E\u0451\u043C \u043D\u0438\u0436\u0435","layers-merge-all":"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u0432\u0441\u0435","layers-rename":"\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C","layers-active-layer-visible":"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043B\u043E\u0439 \u0432\u0438\u0434\u0438\u043C\u044B\u0439","layers-active-layer-hidden":"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043B\u043E\u0439 \u0441\u043A\u0440\u044B\u0442","layers-visibility-toggle":"\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u043B\u043E\u044F","layers-blend-normal":"\u043E\u0431\u044B\u0447\u043D\u044B\u0439","layers-blend-darken":"\u0437\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435","layers-blend-multiply":"\u0443\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u0435","layers-blend-color-burn":"\u0437\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u044B","layers-blend-lighten":"\u043E\u0441\u0432\u0435\u0442\u043B\u0435\u043D\u0438\u0435","layers-blend-screen":"\u044D\u043A\u0440\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435","layers-blend-color-dodge":"\u043E\u0441\u0432\u0435\u0442\u043B\u0435\u043D\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u044B","layers-blend-overlay":"\u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0442\u0438\u0435","layers-blend-soft-light":"\u043C\u044F\u0433\u043A\u0438\u0439 \u0441\u0432\u0435\u0442","layers-blend-hard-light":"\u0436\u0451\u0441\u0442\u043A\u0438\u0439 \u0441\u0432\u0435\u0442","layers-blend-difference":"\u0440\u0430\u0437\u043D\u0438\u0446\u0430","layers-blend-exclusion":"\u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435","layers-blend-hue":"\u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0442\u043E\u043D","layers-blend-saturation":"\u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C","layers-blend-color":"\u0446\u0432\u0435\u0442\u043D\u043E\u0441\u0442\u044C","layers-blend-luminosity":"\u0441\u0432\u0435\u0442\u0438\u043C\u043E\u0441\u0442\u044C","layers-rename-title":"\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u043E\u0439","layers-rename-name":"\u0418\u043C\u044F","layers-rename-clear":"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0438\u043C\u044F","layers-rename-sketch":"\u042D\u0441\u043A\u0438\u0437","layers-rename-colors":"\u0426\u0432\u0435\u0442\u0430","layers-rename-shading":"\u0417\u0430\u0442\u0435\u043D\u0435\u043D\u0438\u0435","layers-rename-lines":"\u041B\u0438\u043D\u0438\u0438","layers-rename-effects":"\u042D\u0444\u0444\u0435\u043A\u0442\u044B","layers-rename-foreground":"\u041F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D","layers-merge-modal-title":"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435/\u0441\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 \u0441\u043B\u043E\u0451\u0432","layers-merge-description":"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0439 \u0441 \u0442\u0435\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u043E\u0434 \u043D\u0438\u043C. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043C \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F:","file-no-autosave":"\u041D\u0435\u0442 \u0430\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u043D\u0435\u0442 \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0433\u043E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430","file-new":"\u041D\u043E\u0432\u044B\u0439","file-import":"\u0418\u043C\u043F\u043E\u0440\u0442","file-save":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C","file-format":"\u0424\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430","file-copy":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","file-copy-title":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430","file-share":"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F","file-storage":"\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430","file-storage-thumb-title":"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u043C \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B","file-storage-about":"\u041E \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430","file-storage-cant-access":"\u041D\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044F \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F","file-storage-empty":"\u041F\u0443\u0441\u0442\u043E","file-storage-store":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C","file-storage-clear":"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C","file-storage-storing":"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435","file-storage-overwrite":"\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C","file-storage-min-ago":"{x} \u043C\u0438\u043D. \u043D\u0430\u0437\u0430\u0434","file-storage-hours-ago":"{x} \u0447. \u043D\u0430\u0437\u0430\u0434","file-storage-days-ago":"{x} \u0434\u043D. \u043D\u0430\u0437\u0430\u0434","file-storage-month-ago":"> 1 \u043C\u0435\u0441\u044F\u0446 \u043D\u0430\u0437\u0430\u0434","file-storage-restored":"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0438\u0437 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430","file-storage-stored":"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430","file-storage-failed":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430","file-storage-failed-1":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u044B:","file-storage-failed-2":"\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u0438\u0441\u043A\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430","file-storage-failed-3":"\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E","file-storage-failed-4":"\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435","file-storage-failed-clear":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C.","file-upload":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C","cleared-layer":"\u041E\u0447\u0438\u0449\u0435\u043D\u043D\u044B\u0439 \u0441\u043B\u043E\u0439","filled":"\u0417\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0439","new-title":"\u041D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","new-current":"\u0422\u0435\u043A\u0443\u0449\u0435\u0435","new-fit":"\u041F\u043E\u0434\u0433\u043E\u043D\u043A\u0430","new-oversize":"\u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F","new-square":"\u041A\u0432\u0430\u0434\u0440\u0430\u0442","new-landscape":"\u0410\u043B\u044C\u0431\u043E\u043C\u043D\u0430\u044F","new-portrait":"\u041A\u043D\u0438\u0436\u043D\u0430\u044F","new-screen":"\u042D\u043A\u0440\u0430\u043D","new-video":"\u0412\u0438\u0434\u0435\u043E","new-din-paper":"\u0424\u043E\u0440\u043C\u0430\u0442 \u0431\u0443\u043C\u0430\u0433\u0438","new-px":"\u043F\u0438\u043A\u0441.","new-ratio":"\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435","upload-title":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430 Imgur","upload-link-notice":"\u041B\u044E\u0431\u043E\u0439, \u0443 \u043A\u043E\u0433\u043E \u0435\u0441\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0435 \u0432\u0430\u043C\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0441\u043C\u043E\u0436\u0435\u0442 \u0435\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C.","upload-name":"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","upload-title-untitled":"\u0411\u0435\u0437\u044B\u043C\u044F\u043D\u043D\u044B\u0439","upload-caption":"\u041F\u043E\u0434\u043F\u0438\u0441\u044C","upload-submit":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C","upload-uploading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...","upload-success":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443\u0434\u0430\u043B\u0430\u0441\u044C","upload-failed":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C.","upload-delete":"\u0427\u0442\u043E\u0431\u044B \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0432\u043E\u0451 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441 Imgur, \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435 \u0441\u0430\u0439\u0442:","cropcopy-title-copy":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430","cropcopy-title-crop":"\u0420\u0430\u043C\u043A\u0430","cropcopy-click-hold":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u043C\u044B\u0448\u0438 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C.","cropcopy-btn-copy":"\u0412 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430","cropcopy-copied":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E.","cropcopy-btn-crop":"\u041F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u0440\u0435\u0437\u043A\u0438","crop-drag-to-crop":"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u043B\u044F \u043A\u0430\u0434\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F","filter-crop-extend":"\u041A\u0430\u0434\u0440\u0438\u0440./\u0440\u0430\u0441\u0442\u044F\u0433\u0438\u0432.","filter-flip":"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C","filter-perspective":"\u041F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430","filter-resize":"\u0418\u0437\u043C. \u0440\u0430\u0437\u043C\u0435\u0440\u0430","filter-rotate":"\u041F\u043E\u0432\u043E\u0440\u043E\u0442","filter-transform":"\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C.","filter-bright-contrast":"\u042F\u0440\u043A./\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442.","filter-curves":"\u041A\u0440\u0438\u0432\u044B\u0435","filter-hue-sat":"\u0426\u0432. \u0442\u043E\u043D/\u041D\u0430\u0441\u044B\u0449.","filter-invert":"\u0418\u043D\u0432\u0435\u0440\u0441\u0438\u044F","filter-tilt-shift":"\u0413\u043B\u0443\u0431. \u0440\u0435\u0437\u043A\u043E\u0441\u0442\u0438","filter-to-alpha":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","filter-triangle-blur":"\u0422\u0440\u0435\u0443\u0433. \u0440\u0430\u0437\u043C\u044B\u0442\u0438\u0435","filter-unsharp-mask":"\u041D\u0435\u0440\u0435\u0437\u043A\u0430\u044F \u043C\u0430\u0441\u043A\u0430","filter-crop-title":"\u041A\u0430\u0434\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 / \u0440\u0430\u0441\u0442\u044F\u0433\u0438\u0432\u0430\u043D\u0438\u0435","filter-crop-description":"\u041E\u0431\u0440\u0435\u0437\u043A\u0430 \u0438\u043B\u0438 \u0440\u0430\u0441\u0442\u044F\u0433\u0438\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.","filter-crop-left":"\u0412\u043B\u0435\u0432\u043E","filter-crop-right":"\u0412\u043F\u0440\u0430\u0432\u043E","filter-crop-top":"\u0412\u0432\u0435\u0440\u0445","filter-crop-bottom":"\u0412\u043D\u0438\u0437","filter-crop-rule-thirds":"\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0442\u0440\u0435\u0442\u0435\u0439","filter-crop-fill":"\u0417\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435","filter-flip-title":"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C","filter-flip-description":"\u041F\u0435\u0440\u0435\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u0441\u043B\u043E\u044F \u0438\u043B\u0438 \u0432\u0441\u0435\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.","filter-flip-horizontal":"\u041F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438","filter-flip-vertical":"\u041F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438","filter-flip-image":"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","filter-flip-layer":"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u043B\u043E\u0439","filter-perspective-title":"\u041F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430","filter-perspective-description":"\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F.","filter-resize-title":"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u0430","filter-resize-description":"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.","filter-rotate-title":"\u041F\u043E\u0432\u043E\u0440\u043E\u0442","filter-rotate-description":"\u041F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.","filter-transform-empty":"\u0421\u043B\u043E\u0439 \u043F\u0443\u0441\u0442\u043E\u0439.","filter-transform-title":"\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","filter-transform-description":"\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F. \u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 Shift \u0434\u043B\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F.","filter-transform-rotation":"\u041F\u043E\u0432\u043E\u0440\u043E\u0442","filter-transform-flip":"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C","filter-transform-center":"\u0426\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C","filter-transform-constrain":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C","filter-transform-snap":"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C","filter-transform-snap-title":"\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435","filter-bright-contrast-title":"\u042F\u0440\u043A\u043E\u0441\u0442\u044C / \u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u044C","filter-bright-contrast-description":"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u044F\u0440\u043A\u043E\u0441\u0442\u0438 \u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F.","filter-bright-contrast-brightness":"\u042F\u0440\u043A\u043E\u0441\u0442\u044C","filter-bright-contrast-contrast":"\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442","filter-curves-title":"\u041A\u0440\u0438\u0432\u044B\u0435","filter-curves-description":"\u041F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043A\u0440\u0438\u0432\u044B\u0435 \u043A \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0441\u043B\u043E\u044E.","filter-curves-all":"\u0412\u0441\u0435","filter-hue-sat-title":"\u0426\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0442\u043E\u043D / \u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C","filter-hue-sat-description":"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0430 \u0438 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F.","filter-hue-sat-hue":"\u0426\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0442\u043E\u043D","filter-hue-sat-saturation":"\u041D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C","filter-applied":"- \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u043E","filter-tilt-shift-title":"\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0440\u0435\u0437\u043A\u043E\u0441\u0442\u0438","filter-tilt-shift-description":"\u041F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0433\u043B\u0443\u0431\u0438\u043D\u044B \u0440\u0435\u0437\u043A\u043E\u0441\u0442\u0438 \u043A \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0441\u043B\u043E\u044E.","filter-tilt-shift-blur":"\u0420\u0430\u0434\u0438\u0443\u0441 \u0440\u0430\u0437\u043C\u044B\u0442\u0438\u044F","filter-tilt-shift-gradient":"\u0420\u0430\u0434\u0438\u0443\u0441 \u0433\u0440\u0430\u0434\u0438\u0435\u043D\u0442\u0430","filter-to-alpha-title":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","filter-to-alpha-description":"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0430\u043B\u044C\u0444\u0430-\u043A\u0430\u043D\u0430\u043B\u0430 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F:","filter-to-alpha-inverted-lum":"\u0418\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u044F\u0440\u043A\u043E\u0441\u0442\u044C","filter-to-alpha-lum":"\u042F\u0440\u043A\u043E\u0441\u0442\u044C","filter-to-alpha-replace":"\u0417\u0430\u043C\u0435\u043D\u0430 RGB","filter-triangle-blur-title":"\u0422\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0437\u043C\u044B\u0442\u0438\u0435","filter-triangle-blur-description":"\u041F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0442\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u044B\u0442\u0438\u044F \u043A \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0441\u043B\u043E\u044E.","filter-unsharp-mask-title":"\u041D\u0435\u0440\u0435\u0437\u043A\u0430\u044F \u043C\u0430\u0441\u043A\u0430","filter-unsharp-mask-description":"\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u043A\u043E\u0441\u0442\u0438 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F, \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u044F \u043F\u0438\u043A\u0441\u0435\u043B\u0438 \u043E\u0442 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438\u0445 \u0441\u043E\u0441\u0435\u0434\u0435\u0439.","filter-unsharp-mask-strength":"\u0418\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u044C","filter-grid":"\u0421\u0435\u0442\u043A\u0430","filter-grid-description":"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u0435\u0442\u043A\u0438 \u043D\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u043E\u0435.","filter-noise":"\u0428\u0443\u043C","filter-noise-description":"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0448\u0443\u043C\u0430 \u043A \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0441\u043B\u043E\u044E.","filter-noise-scale":"\u041C\u0430\u0441\u0448\u0442\u0430\u0431","filter-noise-alpha":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C","filter-pattern":"\u0428\u0430\u0431\u043B\u043E\u043D","filter-pattern-description":"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u043D\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u043E\u0435. \u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u043B\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F.","filter-distort":"\u0418\u0441\u043A\u0430\u0436\u0435\u043D\u0438\u0435","filter-distort-description":"\u0418\u0441\u043A\u0430\u0436\u0435\u043D\u0438\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F.","filter-distort-phase":"\u0424\u0430\u0437\u0430","filter-distort-stepsize":"\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0430\u0433\u0430","filter-distort-sync-xy":"\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F XY","filter-vanish-point":"\u0418\u0441\u043F\u0440. \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B","filter-vanish-point-title":"\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B","filter-vanish-point-description":"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B \u043A \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C\u0443 \u0441\u043B\u043E\u044E. \u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C.","filter-vanish-point-lines":"\u041B\u0438\u043D\u0438\u0438","import-opening":"\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0444\u0430\u0439\u043B\u0430...","import-title":"\u0418\u043C\u043F\u043E\u0440\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F","import-too-large":"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435, \u043E\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043E.","import-btn-as-layer":"\u041A\u0430\u043A \u0441\u043B\u043E\u0439","import-btn-as-image":"\u041A\u0430\u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","import-as-layer-title":"\u0418\u043C\u043F\u043E\u0440\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043A\u0430\u043A \u043D\u043E\u0432\u043E\u0433\u043E \u0441\u043B\u043E\u044F","import-as-layer-description":"\u0420\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.","import-as-layer-limit-reached":"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0451\u0432. \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0441\u043B\u043E\u0439.","import-as-layer-fit":"\u041F\u043E\u0434\u0433\u043E\u043D\u043A\u0430","import-flatten":"\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435","import-unsupported-file":"\u041D\u0435\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0442\u0438\u043F \u0444\u0430\u0439\u043B\u0430. \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0442\u0438\u043F\u044B \u0441\u043C. \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \xab\u041F\u043E\u043C\u043E\u0449\u044C\xbb.","import-broken-file":"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0444\u0430\u0439\u043B \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D.","import-psd-unsupported":"\u041D\u0435\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438. PSD \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0431\u044B\u043B\u043E \u0441\u0432\u0435\u0434\u0438\u0442\u044C.","import-psd-limited-support":"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 PSD \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0430. \u0421\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442, \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.","import-psd-too-large":"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B {x} x {x} \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439. \u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C.","import-psd-size":"\u0420\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F","hand-reset":"\u0421\u0431\u0440\u043E\u0441","hand-fit":"\u041F\u043E\u0434\u0433\u043E\u043D\u043A\u0430","bucket-tolerance":"\u0414\u043E\u043F\u0443\u0441\u043A","bucket-sample":"\u041E\u0431\u0440\u0430\u0437\u0435\u0446","bucket-sample-title":"\u0418\u0437 \u043A\u0430\u043A\u0438\u0445 \u0441\u043B\u043E\u0451\u0432 \u0431\u0440\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u0446\u0432\u0435\u0442\u0430","bucket-sample-all":"\u0412\u0441\u0435\u0445","bucket-sample-active":"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439","bucket-sample-above":"\u0412\u044B\u0448\u0435","bucket-grow":"\u0420\u0430\u0441\u0448. \u0437\u0430\u043F\u043E\u043B\u043D.","bucket-grow-title":"\u0420\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C (\u0432 \u043F\u0438\u043A\u0441\u0435\u043B\u044F\u0445)","bucket-contiguous":"\u0421\u043C\u0435\u0436. \u043F\u0438\u043A\u0441","bucket-contiguous-title":"\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438","gradient-linear":"\u041B\u0438\u043D\u0435\u0439\u043D\u044B\u0439","gradient-linear-mirror":"\u041B\u0438\u043D\u0435\u0439\u043D\u043E-\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u044B\u0439","gradient-radial":"\u041B\u0443\u0447\u0435\u0432\u043E\u0439","shape-stroke":"\u041E\u0431\u0432\u043E\u0434\u043A\u0430","shape-fill":"\u0417\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435","shape-rect":"\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A","shape-ellipse":"\u042D\u043B\u043B\u0438\u043F\u0441","shape-line":"\u041B\u0438\u043D\u0438\u044F","shape-line-width":"\u0428\u0438\u0440\u0438\u043D\u0430 \u043B\u0438\u043D\u0438\u0438","shape-outwards":"\u0412\u043D\u0435\u0448\u043D\u0435","shape-fixed":"\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F 1:1","text-instruction":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0445\u043E\u043B\u0441\u0442, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442","text-title":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442","text-text":"\u0422\u0435\u043A\u0441\u0442","text-font":"\u0428\u0440\u0438\u0444\u0442","text-placeholder":"\u0412\u0430\u0448 \u0442\u0435\u043A\u0441\u0442","text-color":"\u0426\u0432\u0435\u0442","text-size":"\u0420\u0430\u0437\u043C\u0435\u0440","text-line-height":"\u0412\u044B\u0441\u043E\u0442\u0430 \u043B\u0438\u043D\u0438\u0438","text-letter-spacing":"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0431\u0443\u043A\u0432\u0430\u043C\u0438","text-left":"\u0421\u043B\u0435\u0432\u0430","text-center":"\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443","text-right":"\u0421\u043F\u0440\u0430\u0432\u0430","text-italic":"\u041A\u0443\u0440\u0441\u0438\u0432","text-bold":"\u0416\u0438\u0440\u043D\u044B\u0439","save-reminder-title":"\u041D\u0435\u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430","save-reminder-text":"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0435 \u0431\u044B\u043B\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 {a} \u043C\u0438\u043D{b}. \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0443\u044E \u043F\u043E\u0442\u0435\u0440\u044E.","save-reminder-save-psd":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A PSD","save-reminder-psd-layers":"PSD \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0442 \u0432\u0441\u0435 \u0441\u043B\u043E\u0438.","backup-drawing":"\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E \u0441\u0432\u043E\u0435\u0433\u043E \u0440\u0438\u0441\u0443\u043D\u043A\u0430.","submit":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","submit-title":"\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0440\u0438\u0441\u0443\u043D\u043A\u0430","submit-prompt":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0438\u0441\u0443\u043D\u043E\u043A?","submit-submitting":"\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430","embed-init-loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F","embed-init-waiting":"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F","unsaved":"\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E","help":"\u041F\u043E\u043C\u043E\u0449\u044C","tab-settings":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438","settings-language":"\u042F\u0437\u044B\u043A","settings-language-reload":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438.","settings-theme":"\u0422\u0435\u043C\u0430","settings-save-reminder-label":"\u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u0441\u043E\u0445\u0440.","settings-save-reminder-disabled":"\u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E","settings-save-reminder-confirm-title":"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438?","settings-save-reminder-confirm-a":"\u0417\u0434\u0435\u0441\u044C \u043D\u0435\u0442 \u0430\u0432\u0442\u043E\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F, \u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043D\u0435 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432\u0435\u0447\u043D\u043E. \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C, \u0442\u043E, \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0442\u0435 \u0440\u0438\u0441\u0443\u043D\u043E\u043A.","settings-save-reminder-confirm-b":"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 \u0441\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u0445 \u0438 \u0440\u0438\u0441\u043A?","settings-save-reminder-confirm-disable":"\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C","theme-dark":"\u0422\u0451\u043C\u043D\u0430\u044F","theme-light":"\u0421\u0432\u0435\u0442\u043B\u0430\u044F","terms-of-service":"\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F","licenses":"\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438","source-code":"\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434","auto":"\u0430\u0432\u0442\u043E","zoom-in":"\u041F\u0440\u0438\u0431\u043B\u0438\u0436\u0435\u043D\u0438\u0435","zoom-out":"\u041E\u0442\u0434\u0430\u043B\u0435\u043D\u0438\u0435","radius":"\u0420\u0430\u0434\u0438\u0443\u0441","constrain-proportions":"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0439","width":"\u0428\u0438\u0440\u0438\u043D\u0430","height":"\u0412\u044B\u0441\u043E\u0442\u0430","opacity":"\u041F\u0440\u043E\u0437\u0440\u0430\u0447.","red":"\u041A\u0440\u0430\u0441\u043D\u044B\u0439","green":"\u0417\u0435\u043B\u0451\u043D\u044B\u0439","blue":"\u0421\u0438\u043D\u0438\u0439","eraser":"\u041B\u0430\u0441\u0442\u0438\u043A","center":"\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443","layers":"\u0421\u043B\u043E\u0438","background":"\u0424\u043E\u043D","scaling-algorithm":"\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F","algorithm-smooth":"\u0413\u043B\u0430\u0434\u043A\u0438\u0439","algorithm-pixelated":"\u041F\u0438\u043A\u0441\u0435\u043B\u044C\u043D\u044B\u0439","preview":"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440","angle-snap":"\u041F\u0440\u0438\u0432\u044F\u0437\u043A\u0430","angle-snap-title":"\u0423\u0433\u043B\u043E\u0432\u0430\u044F \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 45\xb0","lock-alpha":"\u0410\u043B\u044C\u0444\u0430-\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430","lock-alpha-title":"\u0411\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442 \u0430\u043B\u044C\u0444\u0430-\u043A\u0430\u043D\u0430\u043B \u0441\u043B\u043E\u044F","reverse":"\u0420\u0435\u0432\u0435\u0440\u0441\u0438\u0432\u043D\u044B\u0439","compare-before":"\u0414\u043E","compare-after":"\u041F\u043E\u0441\u043B\u0435","loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430","more":"\u0415\u0449\u0451","x-minutes":"{x} \u043C\u0438\u043D."}');

},{}]},["8LvWj"], null, "parcelRequire94c2")

//# sourceMappingURL=ru.8c8bd043.js.map
