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
})({"9TCfI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4f1526def5088a9d";
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

},{}],"6hVnH":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"UI \uC88C\uC6B0 \uBC30\uCE58 \uC804\uD658","toggle-show-tools":"\uB3C4\uAD6C \uBCF4\uC774\uAE30/\uC228\uAE30\uAE30","scroll":"\uC2A4\uD06C\uB864","donate":"\uAE30\uBD80","home":"\uD648","modal-new-tab":"\uC0C8 \uD0ED\uC5D0\uC11C \uC5F4\uAE30","tab-edit":"\uD3B8\uC9D1","tab-file":"\uD30C\uC77C","tool-brush":"\uBD93","tool-paint-bucket":"\uD398\uC778\uD2B8\uD1B5","tool-gradient":"\uADF8\uB77C\uB370\uC774\uC158","tool-shape":"\uB3C4\uD615","tool-text":"\uD14D\uC2A4\uD2B8","tool-hand":"\uC190 \uB3C4\uAD6C","tool-zoom":"\uC90C","undo":"\uC2E4\uD589 \uCDE8\uC18C","redo":"\uB2E4\uC2DC \uC2E4\uD589","brush-pen":"\uD39C","brush-blend":"\uC218\uCC44 \uBE14\uB80C\uB4DC","brush-sketchy":"\uC2A4\uCF00\uCE58","brush-pixel":"\uD53D\uC140","brush-chemy":"Chemy","brush-smudge":"\uBC88\uC9C0\uAE30","brush-size":"\uD06C\uAE30","brush-blending":"\uD63C\uD569\uB3C4","brush-toggle-pressure":"\uD544\uC555 \uAC10\uC9C0 \uC804\uD658","brush-pen-circle":"\uC6D0\uD615","brush-pen-chalk":"\uBD84\uD544","brush-pen-calligraphy":"\uC11C\uC608","brush-pen-square":"\uC0AC\uAC01\uD615","brush-sketchy-scale":"\uC2A4\uCF00\uCE58 \uB3C4\uB2EC \uAC70\uB9AC","brush-pixel-dither":"\uB514\uB354\uB9C1","brush-chemy-fill":"\uCC44\uC6B0\uAE30","brush-chemy-stroke":"\uD68D","brush-chemy-mirror-x":"\uC218\uD3C9 \uB300\uCE6D","brush-chemy-mirror-y":"\uC218\uC9C1 \uB300\uCE6D","brush-chemy-gradient":"\uADF8\uB77C\uB370\uC774\uC158","brush-eraser-transparent-bg":"\uD22C\uBA85 \uBC30\uACBD","stabilizer":"\uC548\uC815\uD654","stabilizer-title":"\uD68D \uC548\uC815\uD654","eyedropper":"\uC2A4\uD3EC\uC774\uB4DC","secondary-color":"\uBCF4\uC870 \uC0C9\uC0C1","manual-color-input":"\uC9C1\uC811 \uC0C9\uC0C1 \uC785\uB825","mci-hex":"16\uC9C4\uBC95 \uAC12","mci-copy":"\uBCF5\uC0AC","modal-ok":"\uD655\uC778","modal-cancel":"\uCDE8\uC18C","modal-close":"\uB2EB\uAE30","layers-active-layer":"\uD65C\uC131 \uB808\uC774\uC5B4","layers-layer":"\uB808\uC774\uC5B4","layers-copy":"\uBCF5\uC0AC\uBCF8","layers-blending":"\uD63C\uD569 \uBAA8\uB4DC","layers-new":"\uC0C8 \uB808\uC774\uC5B4","layers-remove":"\uB808\uC774\uC5B4 \uC81C\uAC70","layers-duplicate":"\uB808\uC774\uC5B4 \uBCF5\uC81C","layers-merge":"\uC544\uB798 \uB808\uC774\uC5B4\uC640 \uBCD1\uD569","layers-merge-all":"\uBAA8\uB450 \uBCD1\uD569","layers-rename":"\uC774\uB984 \uBCC0\uACBD","layers-active-layer-visible":"\uD65C\uC131 \uB808\uC774\uC5B4\uAC00 \uBCF4\uC785\uB2C8\uB2E4","layers-active-layer-hidden":"\uD65C\uC131\uB41C \uB808\uC774\uC5B4\uAC00 \uC228\uACA8\uC838 \uC788\uC2B5\uB2C8\uB2E4","layers-visibility-toggle":"\uB808\uC774\uC5B4 \uBCF4\uC774\uAE30/\uC228\uAE30\uAE30","layers-blend-normal":"\uBCF4\uD1B5","layers-blend-darken":"\uC5B4\uB461\uAC8C","layers-blend-multiply":"\uACF1\uD558\uAE30","layers-blend-color-burn":"\uC0C9\uC0C1 \uBC88","layers-blend-lighten":"\uBC1D\uAC8C","layers-blend-screen":"\uC2A4\uD06C\uB9B0","layers-blend-color-dodge":"\uC0C9\uC0C1 \uB2F7\uC9C0","layers-blend-overlay":"\uC624\uBC84\uB808\uC774","layers-blend-soft-light":"\uC18C\uD504\uD2B8 \uB77C\uC774\uD2B8","layers-blend-hard-light":"\uD558\uB4DC \uB77C\uC774\uD2B8","layers-blend-difference":"\uCC28\uC774","layers-blend-exclusion":"\uC81C\uC678","layers-blend-hue":"\uC0C9\uC870","layers-blend-saturation":"\uCC44\uB3C4","layers-blend-color":"\uC0C9\uC0C1","layers-blend-luminosity":"\uAD11\uB3C4","layers-rename-title":"\uB808\uC774\uC5B4 \uC774\uB984 \uBCC0\uACBD","layers-rename-name":"\uC774\uB984","layers-rename-clear":"\uC774\uB984 \uC9C0\uC6B0\uAE30","layers-rename-sketch":"\uC2A4\uCF00\uCE58","layers-rename-colors":"\uC0C9\uC0C1","layers-rename-shading":"\uC74C\uC601","layers-rename-lines":"\uC120","layers-rename-effects":"\uD6A8\uACFC","layers-rename-foreground":"\uC804\uACBD","layers-merge-modal-title":"\uB808\uC774\uC5B4 \uBCD1\uD569/\uD63C\uD569","layers-merge-description":"\uC120\uD0DD\uD55C \uB808\uC774\uC5B4\uB97C \uC544\uB798 \uB808\uC774\uC5B4\uC640 \uBCD1\uD569\uD569\uB2C8\uB2E4. \uD63C\uD569 \uBAA8\uB4DC\uB97C \uC120\uD0DD\uD558\uC138\uC694:","file-no-autosave":"\uC790\uB3D9\uC800\uC7A5/\uD074\uB77C\uC6B0\uB4DC \uC800\uC7A5\uC18C \uC5C6\uC74C","file-new":"\uC0C8\uB85C \uB9CC\uB4E4\uAE30","file-import":"\uAC00\uC838\uC624\uAE30","file-save":"\uC800\uC7A5","file-format":"\uD30C\uC77C \uD615\uC2DD","file-copy":"\uBCF5\uC0AC","file-copy-title":"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC","file-share":"\uACF5\uC720","file-storage":"\uBE0C\uB77C\uC6B0\uC800 \uC800\uC7A5\uC18C","file-storage-thumb-title":"\uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC \uC5F4 \uB54C \uBCF5\uC6D0","file-storage-about":"\uBE0C\uB77C\uC6B0\uC800 \uC800\uC7A5\uC18C\uC5D0 \uB300\uD558\uC5EC","file-storage-cant-access":"\uC811\uADFC\uD560 \uC218 \uC5C6\uC74C","file-storage-empty":"\uBE44\uC5B4 \uC788\uC74C","file-storage-store":"\uC800\uC7A5","file-storage-clear":"\uC9C0\uC6B0\uAE30","file-storage-storing":"\uC800\uC7A5 \uC911","file-storage-overwrite":"\uB36E\uC5B4\uC4F0\uAE30","file-storage-min-ago":"{x}\uBD84 \uC804","file-storage-hours-ago":"{x}\uC2DC\uAC04 \uC804","file-storage-days-ago":"{x}\uC77C \uC804","file-storage-month-ago":"1\uAC1C\uC6D4 \uC774\uC0C1 \uC804","file-storage-restored":"\uBE0C\uB77C\uC6B0\uC800 \uC800\uC7A5\uC18C\uC5D0\uC11C \uBCF5\uC6D0\uB418\uC5C8\uC2B5\uB2C8\uB2E4","file-storage-stored":"\uBE0C\uB77C\uC6B0\uC800 \uC800\uC7A5\uC18C\uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4","file-storage-failed":"\uBE0C\uB77C\uC6B0\uC800 \uC800\uC7A5\uC18C\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4","file-storage-failed-1":"\uC800\uC7A5\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4. \uCD94\uC815 \uC6D0\uC778:","file-storage-failed-2":"\uB514\uC2A4\uD06C \uACF5\uAC04 \uBD80\uC871","file-storage-failed-3":"\uC0AC\uC0DD\uD65C \uBCF4\uD638 \uCC3D\uC5D0\uC11C \uC800\uC7A5\uC18C \uC0AC\uC6A9 \uBD88\uAC00","file-storage-failed-4":"\uBE0C\uB77C\uC6B0\uC800\uAC00 \uC800\uC7A5\uC18C\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","file-storage-failed-clear":"\uC0AD\uC81C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","file-upload":"\uC5C5\uB85C\uB4DC","cleared-layer":"\uB808\uC774\uC5B4 \uBE44\uC6C0","filled":"\uCC44\uC6CC\uC9D0","new-title":"\uC0C8 \uC774\uBBF8\uC9C0","new-current":"\uD604\uC7AC","new-fit":"\uB9DE\uCDA4","new-oversize":"\uD070 \uC0AC\uC774\uC988","new-square":"\uC815\uC0AC\uAC01\uD615","new-landscape":"\uAC00\uB85C","new-portrait":"\uC138\uB85C","new-screen":"\uD654\uBA74","new-video":"\uC601\uC0C1","new-din-paper":"DIN \uC885\uC774","new-px":"px","new-ratio":"\uBE44\uC728","upload-title":"Imgur\uC5D0 \uC5C5\uB85C\uB4DC","upload-link-notice":"\uC8FC\uC18C\uB97C \uAC00\uC9C0\uACE0 \uC788\uB294 \uBAA8\uB4E0 \uC0AC\uB78C\uB4E4\uC740 \uC5C5\uB85C\uB4DC\uB41C \uC774\uBBF8\uC9C0\uB97C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.","upload-name":"\uC81C\uBAA9","upload-title-untitled":"\uBB34\uC81C","upload-caption":"\uC124\uBA85","upload-submit":"\uC5C5\uB85C\uB4DC","upload-uploading":"\uC5C5\uB85C\uB4DC \uC911...","upload-success":"\uC5C5\uB85C\uB4DC \uC131\uACF5","upload-failed":"\uC5C5\uB85C\uB4DC \uC2E4\uD328","upload-delete":"Imgur\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uC0AD\uC81C\uD558\uB824\uBA74 \uC774\uACF3\uC5D0 \uBC29\uBB38\uD558\uC138\uC694:","cropcopy-title-copy":"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC","cropcopy-title-crop":"\uC790\uB974\uAE30","cropcopy-click-hold":"\uBCF5\uC0AC\uD558\uB824\uBA74 \uB9C8\uC6B0\uC2A4 \uC624\uB978\uCABD \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uAC70\uB098 \uAE38\uAC8C \uB204\uB974\uC138\uC694.","cropcopy-btn-copy":"\uD074\uB9BD\uBCF4\uB4DC\uB85C","cropcopy-copied":"\uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","cropcopy-btn-crop":"\uC790\uB974\uAE30 \uC801\uC6A9","crop-drag-to-crop":"\uB4DC\uB798\uADF8\uD558\uC5EC \uC798\uB77C\uB0BC \uC601\uC5ED\uC744 \uC870\uC815\uD558\uC138\uC694","filter-crop-extend":"\uC790\uB974\uAE30/\uD655\uC7A5\uD558\uAE30","filter-flip":"\uB4A4\uC9D1\uAE30","filter-perspective":"\uC6D0\uADFC\uBC95","filter-resize":"\uD06C\uAE30 \uC870\uC815","filter-rotate":"\uD68C\uC804","filter-transform":"\uBCC0\uD615","filter-bright-contrast":"\uBC1D\uAE30/\uB300\uBE44","filter-curves":"\uCEE4\uBE0C","filter-hue-sat":"\uC0C9\uC870/\uCC44\uB3C4","filter-invert":"\uC0C9\uC0C1 \uBC18\uC804","filter-tilt-shift":"\uD2F8\uD2B8 \uC2DC\uD504\uD2B8","filter-to-alpha":"\uC54C\uD30C\uB85C \uBCC0\uD658","filter-triangle-blur":"\uC0BC\uAC01\uD615 \uBE14\uB7EC","filter-unsharp-mask":"\uC5B8\uC0E4\uD504 \uB9C8\uC2A4\uD06C","filter-crop-title":"\uC790\uB974\uAE30 / \uD655\uC7A5\uD558\uAE30","filter-crop-description":"\uC774\uBBF8\uC9C0\uB97C \uC790\uB974\uAC70\uB098 \uD655\uC7A5\uD569\uB2C8\uB2E4.","filter-crop-left":"\uC67C\uCABD","filter-crop-right":"\uC624\uB978\uCABD","filter-crop-top":"\uC704\uCABD","filter-crop-bottom":"\uC544\uB798\uCABD","filter-crop-rule-thirds":"\uC0BC\uB4F1\uBD84 \uBC95\uCE59","filter-crop-fill":"\uCC44\uC6B0\uAE30","filter-flip-title":"\uB4A4\uC9D1\uAE30","filter-flip-description":"\uB808\uC774\uC5B4 \uB610\uB294 \uC804\uCCB4 \uC774\uBBF8\uC9C0\uB97C \uB4A4\uC9D1\uC2B5\uB2C8\uB2E4.","filter-flip-horizontal":"\uC218\uD3C9","filter-flip-vertical":"\uC218\uC9C1","filter-flip-image":"\uC774\uBBF8\uC9C0 \uB4A4\uC9D1\uAE30","filter-flip-layer":"\uB808\uC774\uC5B4 \uB4A4\uC9D1\uAE30","filter-perspective-title":"\uC6D0\uADFC\uBC95","filter-perspective-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uB97C \uBCC0\uD615\uD569\uB2C8\uB2E4.","filter-resize-title":"\uD06C\uAE30 \uC870\uC815","filter-resize-description":"\uC774\uBBF8\uC9C0\uC758 \uD06C\uAE30\uB97C \uC870\uC815\uD569\uB2C8\uB2E4.","filter-rotate-title":"\uD68C\uC804","filter-rotate-description":"\uC774\uBBF8\uC9C0\uB97C \uD68C\uC804\uD569\uB2C8\uB2E4.","filter-transform-empty":"\uB808\uC774\uC5B4\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4.","filter-transform-title":"\uBCC0\uD615","filter-transform-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uB97C \uBCC0\uD615\uD569\uB2C8\uB2E4. \uCD94\uAC00\uC801\uC778 \uB3D9\uC791\uC744 \uC704\uD574 Shift\uB97C \uB204\uB974\uC138\uC694.","filter-transform-rotation":"\uD68C\uC804","filter-transform-flip":"\uB4A4\uC9D1\uAE30","filter-transform-center":"\uC911\uC559","filter-transform-constrain":"\uBE44\uC728 \uC720\uC9C0","filter-transform-snap":"\uB9DE\uCDA4","filter-transform-snap-title":"\uD68C\uC804 \uBC0F \uC704\uCE58 \uC790\uB3D9 \uB9DE\uCDA4","filter-bright-contrast-title":"\uBC1D\uAE30 / \uB300\uBE44","filter-bright-contrast-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC758 \uBC1D\uAE30\uC640 \uB300\uBE44\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4.","filter-bright-contrast-brightness":"\uBC1D\uAE30","filter-bright-contrast-contrast":"\uB300\uBE44","filter-curves-title":"\uACE1\uC120","filter-curves-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC5D0 \uACE1\uC120\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4.","filter-curves-all":"\uC804\uCCB4","filter-hue-sat-title":"\uC0C9\uC870 / \uCC44\uB3C4","filter-hue-sat-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC758 \uC0C9\uC870\uC640 \uCC44\uB3C4\uB97C \uBCC0\uACBD\uD569\uB2C8\uB2E4.","filter-hue-sat-hue":"\uC0C9\uC870","filter-hue-sat-saturation":"\uCC44\uB3C4","filter-applied":"\uC801\uC6A9\uB428","filter-tilt-shift-title":"\uD2F8\uD2B8 \uC2DC\uD504\uD2B8","filter-tilt-shift-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC5D0 \uD2F8\uD2B8 \uC2DC\uD504\uD2B8\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.","filter-tilt-shift-blur":"\uBE14\uB7EC \uBC18\uACBD","filter-tilt-shift-gradient":"\uADF8\uB77C\uB514\uC5B8\uD2B8 \uBC18\uACBD","filter-to-alpha-title":"\uC54C\uD30C\uB85C","filter-to-alpha-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC5D0 \uB300\uD574 \uB2E4\uC74C\uC5D0\uC11C \uC54C\uD30C \uCC44\uB110\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4:","filter-to-alpha-inverted-lum":"\uBC18\uC804\uB41C \uBC1D\uAE30","filter-to-alpha-lum":"\uBC1D\uAE30","filter-to-alpha-replace":"RGB \uAD50\uCCB4","filter-triangle-blur-title":"\uC0BC\uAC01\uD615 \uBE14\uB7EC","filter-triangle-blur-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC5D0 \uC0BC\uAC01\uD615 \uBE14\uB7EC\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.","filter-unsharp-mask-title":"\uC5B8\uC0E4\uD504 \uB9C8\uC2A4\uD06C","filter-unsharp-mask-description":"\uC8FC\uBCC0 \uD53D\uC140\uC758 \uD3C9\uADE0\uC73C\uB85C\uBD80\uD130 \uD53D\uC140\uC744 \uC870\uC808\uD558\uC5EC \uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uB97C \uC120\uBA85\uD558\uAC8C \uD569\uB2C8\uB2E4.","filter-unsharp-mask-strength":"\uAC15\uB3C4","filter-grid":"\uACA9\uC790","filter-grid-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC5D0 \uACA9\uC790\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.","filter-noise":"\uC7A1\uC74C","filter-noise-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC5D0 \uC7A1\uC74C\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.","filter-noise-scale":"\uADDC\uBAA8","filter-noise-alpha":"\uC54C\uD30C","filter-pattern":"\uD328\uD134","filter-pattern-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC5D0 \uD328\uD134\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uB4DC\uB798\uADF8\uD558\uC5EC \uCD94\uAC00 \uC870\uC791\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.","filter-distort":"\uC65C\uACE1","filter-distort-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uB97C \uC65C\uACE1\uD569\uB2C8\uB2E4.","filter-distort-phase":"\uC704\uC0C1","filter-distort-stepsize":"\uC65C\uACE1 \uB2E8\uACC4 \uD06C\uAE30","filter-distort-sync-xy":"XY \uB3D9\uAE30\uD654","filter-vanish-point":"\uC18C\uC2E4\uC810","filter-vanish-point-title":"\uC18C\uC2E4\uC810","filter-vanish-point-description":"\uC120\uD0DD\uB41C \uB808\uC774\uC5B4\uC5D0 \uC18C\uC2E4\uC810\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uB4DC\uB798\uADF8\uD558\uC5EC \uC774\uB3D9\uD569\uB2C8\uB2E4.","filter-vanish-point-lines":"\uC120 \uAC1C\uC218","import-opening":"\uD30C\uC77C\uC744 \uC5EC\uB294 \uC911...","import-title":"\uC774\uBBF8\uC9C0 \uAC00\uC838\uC624\uAE30","import-too-large":"\uC774\uBBF8\uC9C0\uAC00 \uB108\uBB34 \uCEE4\uC11C \uCD95\uC18C\uD569\uB2C8\uB2E4.","import-btn-as-layer":"\uB808\uC774\uC5B4\uB85C","import-btn-as-image":"\uC774\uBBF8\uC9C0\uB85C","import-as-layer-title":"\uC0C8 \uB808\uC774\uC5B4\uB85C \uC774\uBBF8\uC9C0 \uAC00\uC838\uC624\uAE30","import-as-layer-description":"\uAC00\uC838\uC628 \uC774\uBBF8\uC9C0\uC758 \uC704\uCE58\uB97C \uC870\uC815\uD558\uC138\uC694.","import-as-layer-limit-reached":"\uB808\uC774\uC5B4 \uAC1C\uC218 \uD55C\uB3C4\uC5D0 \uB3C4\uB2EC\uD588\uC2B5\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uB294 \uAE30\uC874 \uB808\uC774\uC5B4\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4.","import-as-layer-fit":"\uB9DE\uCDA4","import-flatten":"\uC774\uBBF8\uC9C0 \uD3C9\uD0C4\uD654","import-unsupported-file":"\uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uD30C\uC77C \uC720\uD615\uC785\uB2C8\uB2E4. \uC9C0\uC6D0\uB418\uB294 \uC720\uD615\uC5D0 \uB300\uD574\uC11C\uB294 \uB3C4\uC6C0\uB9D0\uC744 \uCC38\uC870\uD558\uC138\uC694.","import-broken-file":"\uC774\uBBF8\uC9C0\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD30C\uC77C\uC774 \uC190\uC0C1\uB41C \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.","import-psd-unsupported":"\uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uAE30\uB2A5\uC785\uB2C8\uB2E4. PSD\uB294 \uD3C9\uD0C4\uD654\uD574\uC57C \uD569\uB2C8\uB2E4.","import-psd-limited-support":"PSD \uC9C0\uC6D0\uC774 \uC81C\uD55C\uC801\uC785\uB2C8\uB2E4. \uD3C9\uD0C4\uD654\uB97C \uD560 \uACBD\uC6B0 \uB354 \uC815\uD655\uD558\uAC8C \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.","import-psd-too-large":"\uC774\uBBF8\uC9C0\uAC00 \uCD5C\uB300 \uD06C\uAE30\uC778 {x} x {x} \uD53D\uC140\uC744 \uCD08\uACFC\uD569\uB2C8\uB2E4. \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.","import-psd-size":"\uC774\uBBF8\uC9C0 \uD06C\uAE30","hand-reset":"\uCD08\uAE30\uD654","hand-fit":"\uB9DE\uCDA4","bucket-tolerance":"\uD5C8\uC6A9 \uC624\uCC28","bucket-sample":"\uC0D8\uD50C","bucket-sample-title":"\uC0C9\uC0C1\uC744 \uC0D8\uD50C\uB9C1\uD560 \uB808\uC774\uC5B4 \uC120\uD0DD","bucket-sample-all":"\uBAA8\uB450","bucket-sample-active":"\uD65C\uC131\uB428","bucket-sample-above":"\uC704","bucket-grow":"\uD655\uC7A5","bucket-grow-title":"\uCC44\uC6CC\uC9C4 \uC601\uC5ED \uD655\uC7A5 (\uD53D\uC140 \uB2E8\uC704)","bucket-contiguous":"\uC8FC\uBCC0 \uCC44\uC6B0\uAE30","bucket-contiguous-title":"\uC5F0\uACB0\uB41C \uC601\uC5ED\uB9CC \uCC44\uC6B0\uAE30","gradient-linear":"\uC120\uD615","gradient-linear-mirror":"\uC120\uD615-\uB300\uCE6D","gradient-radial":"\uBC29\uC0AC\uD615","shape-stroke":"\uD68D","shape-fill":"\uCC44\uC6B0\uAE30","shape-rect":"\uC0AC\uAC01\uD615","shape-ellipse":"\uD0C0\uC6D0\uD615","shape-line":"\uC120","shape-line-width":"\uC120 \uB450\uAED8","shape-outwards":"\uBC14\uAE65\uCABD\uC73C\uB85C","shape-fixed":"\uACE0\uC815 1:1","text-instruction":"\uD14D\uC2A4\uD2B8\uB97C \uBC30\uCE58\uD558\uB824\uBA74 \uCE94\uBC84\uC2A4\uB97C \uD074\uB9AD\uD558\uC138\uC694","text-title":"\uD14D\uC2A4\uD2B8 \uCD94\uAC00","text-text":"\uD14D\uC2A4\uD2B8","text-font":"\uD3F0\uD2B8","text-placeholder":"\uC5EC\uAE30\uC5D0 \uD14D\uC2A4\uD2B8\uB97C \uC785\uB825\uD558\uC138\uC694","text-color":"\uC0C9\uC0C1","text-size":"\uD06C\uAE30","text-line-height":"\uC904 \uB192\uC774","text-letter-spacing":"\uC790\uAC04","text-left":"\uC67C\uCABD","text-center":"\uAC00\uC6B4\uB370","text-right":"\uC624\uB978\uCABD","text-italic":"\uC774\uD0E4\uB9AD","text-bold":"\uAD75\uAC8C","save-reminder-title":"\uC800\uC7A5\uB418\uC9C0 \uC54A\uC740 \uC791\uC5C5","save-reminder-text":"\uC774\uBBF8\uC9C0\uAC00 {a}\uBD84 \uB3D9\uC548{b} \uC800\uC7A5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC190\uC2E4\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uC9C0\uAE08 \uC800\uC7A5\uD558\uC138\uC694.","save-reminder-save-psd":"PSD\uB85C \uC800\uC7A5","save-reminder-psd-layers":"PSD\uB294 \uBAA8\uB4E0 \uB808\uC774\uC5B4\uB97C \uAE30\uC5B5\uD569\uB2C8\uB2E4.","backup-drawing":"\uADF8\uB9BC\uC744 \uBC31\uC5C5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","submit":"\uC81C\uCD9C","submit-title":"\uADF8\uB9BC \uC81C\uCD9C","submit-prompt":"\uADF8\uB9BC\uC744 \uC81C\uCD9C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?","submit-submitting":"\uC81C\uCD9C \uC911","embed-init-loading":"\uC571 \uB85C\uB529 \uC911","embed-init-waiting":"\uC774\uBBF8\uC9C0\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911","unsaved":"\uC800\uC7A5\uB418\uC9C0 \uC54A\uC74C","help":"\uB3C4\uC6C0\uB9D0","tab-settings":"\uC124\uC815","settings-language":"\uC5B8\uC5B4","settings-language-reload":"\uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD558\uBA74 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.","settings-theme":"\uD14C\uB9C8","settings-save-reminder-label":"\uC800\uC7A5 \uC54C\uB9BC","settings-save-reminder-disabled":"\uBE44\uD65C\uC131\uD654","settings-save-reminder-confirm-title":"\uC800\uC7A5 \uC54C\uB9BC\uC744 \uB044\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?","settings-save-reminder-confirm-a":"\uC790\uB3D9 \uC800\uC7A5\uC774 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC73C\uBA70, \uBE0C\uB77C\uC6B0\uC800 \uD0ED\uC740 \uC601\uAD6C\uC801\uC73C\uB85C \uC720\uC9C0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC8FC\uAE30\uC801\uC73C\uB85C \uC800\uC7A5\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC791\uC5C5 \uB0B4\uC6A9\uC774 \uC720\uC2E4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","settings-save-reminder-confirm-b":"\uC704\uD5D8\uC744 \uAC10\uC218\uD558\uACE0 \uBE44\uD65C\uC131\uD654\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?","settings-save-reminder-confirm-disable":"\uBE44\uD65C\uC131\uD654","theme-dark":"\uC5B4\uB450\uC6B4 \uD14C\uB9C8","theme-light":"\uBC1D\uC740 \uD14C\uB9C8","terms-of-service":"\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC57D\uAD00","licenses":"\uB77C\uC774\uC120\uC2A4","source-code":"\uC18C\uC2A4 \uCF54\uB4DC","auto":"\uC790\uB3D9","zoom-in":"\uD655\uB300","zoom-out":"\uCD95\uC18C","radius":"\uBC18\uACBD","constrain-proportions":"\uBE44\uC728 \uC720\uC9C0","width":"\uB108\uBE44","height":"\uB192\uC774","opacity":"\uD22C\uBA85\uB3C4","red":"\uBE68\uAC15","green":"\uCD08\uB85D","blue":"\uD30C\uB791","eraser":"\uC9C0\uC6B0\uAC1C","center":"\uC911\uC559","layers":"\uB808\uC774\uC5B4","background":"\uBC30\uACBD","scaling-algorithm":"\uC2A4\uCF00\uC77C\uB9C1 \uC54C\uACE0\uB9AC\uC998","algorithm-smooth":"\uBD80\uB4DC\uB7EC\uC6B4","algorithm-pixelated":"\uD53D\uC140\uD654\uB41C","preview":"\uBBF8\uB9AC\uBCF4\uAE30","angle-snap":"\uC2A4\uB0C5","angle-snap-title":"45\xb0 \uAC01\uB3C4 \uC2A4\uB0C5","lock-alpha":"\uC54C\uD30C \uC7A0\uAE08","lock-alpha-title":"\uB808\uC774\uC5B4\uC758 \uC54C\uD30C \uCC44\uB110 \uC7A0\uAE08","reverse":"\uBC29\uD5A5 \uB4A4\uC9D1\uAE30","compare-before":"\uC801\uC6A9 \uC804","compare-after":"\uC801\uC6A9 \uD6C4","loading":"\uB85C\uB529 \uC911","more":"\uB354 \uBCF4\uAE30","x-minutes":"{x}\uBD84"}');

},{}]},["9TCfI"], null, "parcelRequire94c2")

//# sourceMappingURL=ko.f5088a9d.js.map
