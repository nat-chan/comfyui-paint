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
})({"ecrLB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7ebc79bbbc2c59f6";
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

},{}],"gPCVN":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"Werkzeuge links / rechts","toggle-show-tools":"Werkzeuge Anzeigen/Verbergen","scroll":"Scroll","donate":"Spenden","home":"Home","modal-new-tab":"In neuem Tab \xf6ffnen","tab-edit":"Edit","tab-file":"Datei","tool-brush":"Pinsel","tool-paint-bucket":"F\xfcllwerkzeug","tool-gradient":"Verlauf","tool-shape":"Form-Werkzeug","tool-text":"Text-Werkzeug","tool-hand":"Hand-Werkzeug","tool-zoom":"Zoom-Werkzeug","undo":"R\xfcckg\xe4ngig","redo":"Wiederherstellen","brush-pen":"Stift","brush-blend":"Mischpinsel","brush-sketchy":"Skizzierer","brush-pixel":"Pixel","brush-chemy":"Chemy","brush-smudge":"Wischfinger","brush-size":"Gr\xf6\xdfe","brush-blending":"Mischung","brush-toggle-pressure":"Drucksensitivit\xe4t an/aus","brush-pen-circle":"Kreis","brush-pen-chalk":"Kreide","brush-pen-calligraphy":"Kalligraphie","brush-pen-square":"Quadrat","brush-sketchy-scale":"Ausma\xdf","brush-pixel-dither":"Dither","brush-chemy-fill":"F\xfcllen","brush-chemy-stroke":"Linie","brush-chemy-mirror-x":"Horizontale Symmetrie","brush-chemy-mirror-y":"Vertikale Symmetrie","brush-chemy-gradient":"Verlauf","brush-eraser-transparent-bg":"Transparenter Hintergrund","stabilizer":"Stabilisierer","stabilizer-title":"Linien-Stabilisierer","eyedropper":"Pipette","secondary-color":"Sekund\xe4re Farbe","manual-color-input":"Manuelle Farbeingabe","mci-hex":"Hex","mci-copy":"Kopieren","modal-ok":"Ok","modal-cancel":"Abbrechen","modal-close":"Schlie\xdfen","layers-active-layer":"Aktive Ebene","layers-layer":"Ebene","layers-copy":"Kopie","layers-blending":"Modus","layers-new":"Neue Ebene","layers-remove":"Ebene l\xf6schen","layers-duplicate":"Ebene duplizieren","layers-merge":"Auf untere Ebene reduzieren","layers-merge-all":"Alle Ebenen vereinen","layers-rename":"Umbenennen","layers-active-layer-visible":"Aktive Ebene ist eingeblendet","layers-active-layer-hidden":"Aktive Ebene ist ausgeblendet","layers-visibility-toggle":"Ebenensichtbarkeit","layers-blend-normal":"Normal","layers-blend-darken":"Abdunkeln","layers-blend-multiply":"Multiplizieren","layers-blend-color-burn":"Farbig nachbel.","layers-blend-lighten":"Aufhellen","layers-blend-screen":"Negativ multipl.","layers-blend-color-dodge":"Farbig abwedeln","layers-blend-overlay":"\xdcberlagern","layers-blend-soft-light":"Weiches Licht","layers-blend-hard-light":"Hartes Licht","layers-blend-difference":"Differenz","layers-blend-exclusion":"Ausschluss","layers-blend-hue":"Farbton","layers-blend-saturation":"S\xe4ttigung","layers-blend-color":"Farbe","layers-blend-luminosity":"Luminanz","layers-rename-title":"Ebene umbenennen","layers-rename-name":"Name","layers-rename-clear":"Namen leeren","layers-rename-sketch":"Skizze","layers-rename-colors":"Farben","layers-rename-shading":"Beleuchtung","layers-rename-lines":"Linien","layers-rename-effects":"Effekte","layers-rename-foreground":"Vordergrund","layers-merge-modal-title":"Ebene Reduzieren","layers-merge-description":"Reduziert gew\xe4hlte Ebene auf die darunter liegende. W\xe4hle den Mischmodus:","file-no-autosave":"Kein Autosave & Cloud-Speicher","file-new":"Neu","file-import":"\xd6ffnen","file-save":"Speichern","file-format":"Dateiformat","file-copy":"Kopieren","file-copy-title":"Kopieren in Zwischenablage","file-share":"Teilen","file-storage":"Browser-Speicher","file-storage-thumb-title":"Wiederhergestellt bei Neuladen","file-storage-about":"\xdcber Browser-Speicher","file-storage-cant-access":"Kein Zugriff","file-storage-empty":"Leer","file-storage-store":"Speichern","file-storage-clear":"Leeren","file-storage-storing":"Speichert","file-storage-overwrite":"\xdcberschreiben","file-storage-min-ago":"vor {x} Min","file-storage-hours-ago":"vor {x} h","file-storage-days-ago":"vor {x} T","file-storage-month-ago":"vor >1 Monat","file-storage-restored":"Wiederhergestellt (Browser-Speicher)","file-storage-stored":"Gespeichert (Browser-Speicher)","file-storage-failed":"Speichern fehlgeschlagen (Browser-Speicher)","file-storage-failed-1":"Speichern fehlgeschlagen. M\xf6gliche Gr\xfcnde:","file-storage-failed-2":"Ungen\xfcgend Speicherplatz vorhanden","file-storage-failed-3":"Speicher deaktiviert in Inkognito-Tab","file-storage-failed-4":"Browser unterst\xfctzt Speicher nicht","file-storage-failed-clear":"Leeren fehlgeschlagen.","file-upload":"Hochladen","cleared-layer":"Ebene geleert","filled":"Ebene gef\xfcllt","new-title":"Neues Bild","new-current":"Aktuell","new-fit":"Passen","new-oversize":"\xdcbergro\xdf","new-square":"Quadrat","new-landscape":"Querformat","new-portrait":"Hochformat","new-screen":"Bildschirm","new-video":"Video","new-din-paper":"DIN Papier","new-px":"Px","new-ratio":"Verh\xe4ltnis","upload-title":"Hochladen auf Imgur","upload-link-notice":"Jeder, der den Link zu Deinem hochgeladenen Bild hat, kann es sehen.","upload-name":"Titel","upload-title-untitled":"Ohne Titel","upload-caption":"Beschreibung","upload-submit":"Hochladen","upload-uploading":"L\xe4d hoch...","upload-success":"Erfolgreich Hochgeladen","upload-failed":"Hochladen fehlgeschlagen.","upload-delete":"Um dein Bild zu l\xf6schen \xf6ffne folgenden Link:","cropcopy-title-copy":"Kopieren in Zwischenablage","cropcopy-title-crop":"zuschneiden","cropcopy-click-hold":"Rechtsklick oder gedr\xfcckt halten f\xfcr kopieren.","cropcopy-btn-copy":"In Zwischenablage","cropcopy-copied":"Kopiert.","cropcopy-btn-crop":"Zuschneiden","crop-drag-to-crop":"Ziehen um zuzuschneiden","filter-crop-extend":"Arbeitsfl\xe4che","filter-flip":"Spiegeln","filter-perspective":"Perspektive","filter-resize":"Skalieren","filter-rotate":"Drehen","filter-transform":"Transformier.","filter-bright-contrast":"Hell/Kontrast","filter-curves":"Kurven","filter-hue-sat":"Farbe/S\xe4ttig","filter-invert":"Umkehren","filter-tilt-shift":"Tilt Shift","filter-to-alpha":"Zu Alpha","filter-triangle-blur":"Weichzeichnen","filter-unsharp-mask":"Unscharf mask","filter-crop-title":"Arbeitsfl\xe4che","filter-crop-description":"Schneidet das Bild zu oder erweitert es.","filter-crop-left":"Links","filter-crop-right":"Rechts","filter-crop-top":"Oben","filter-crop-bottom":"Unten","filter-crop-rule-thirds":"Drittel-Regel","filter-crop-fill":"F\xfcllung","filter-flip-title":"Spiegeln","filter-flip-description":"Spiegelt Ebene oder gesamtes Bild.","filter-flip-horizontal":"Horizontal","filter-flip-vertical":"Vertikal","filter-flip-image":"Bild","filter-flip-layer":"Ebene","filter-perspective-title":"Perspektive","filter-perspective-description":"Transformiert die gew\xe4hlte Ebene.","filter-resize-title":"Skalieren","filter-resize-description":"\xc4ndert die Gr\xf6\xdfe des Bildes.","filter-rotate-title":"Drehen","filter-rotate-description":"Dreht das Bild.","filter-transform-empty":"Ebene ist leer.","filter-transform-title":"Transformieren","filter-transform-description":"Transformiert die gew\xe4hlte Ebene. Halte Shift f\xfcr erweiterte Funktionalit\xe4t.","filter-transform-rotation":"Rotation","filter-transform-flip":"Spiegel","filter-transform-center":"Zentrieren","filter-transform-constrain":"Fest","filter-transform-snap":"Einrasten","filter-transform-snap-title":"Rotation und Position einrasten","filter-bright-contrast-title":"Helligkeit / Kontrast","filter-bright-contrast-description":"\xc4ndert Helligkeit und Kontrast der gew\xe4hlten Ebene.","filter-bright-contrast-brightness":"Helligkeit","filter-bright-contrast-contrast":"Kontrast","filter-curves-title":"Kurven","filter-curves-description":"Wendet Kurven auf gew\xe4hlte Ebene an.","filter-curves-all":"Alle","filter-hue-sat-title":"Farbton / S\xe4ttigung","filter-hue-sat-description":"\xc4ndert Farbton und S\xe4ttigung der gew\xe4hlten Ebene.","filter-hue-sat-hue":"Farbton","filter-hue-sat-saturation":"S\xe4ttigung","filter-applied":"angewendet","filter-tilt-shift-title":"Tilt Shift","filter-tilt-shift-description":"Wendet Tilt Shift auf gew\xe4hlte Ebene an.","filter-tilt-shift-blur":"Unsch\xe4rferadius","filter-tilt-shift-gradient":"Verlaufsradius","filter-to-alpha-title":"Zu Alpha","filter-to-alpha-description":"Erzeugt Alphakanal f\xfcr gew\xe4hlte Ebene aus:","filter-to-alpha-inverted-lum":"Umgekehrte Luminanz","filter-to-alpha-lum":"Luminanz","filter-to-alpha-replace":"Ersetze RGB","filter-triangle-blur-title":"Dreiecksunsch\xe4rfe","filter-triangle-blur-description":"Wendet Dreiecksunsch\xe4rfe auf gew\xe4hlte Ebene an.","filter-unsharp-mask-title":"Unscharf maskieren","filter-unsharp-mask-description":"Sch\xe4rft die ausgew\xe4hlte Ebene durch Skalierung der Pixel weg vom Durchschnitt ihrer Nachbarn.","filter-unsharp-mask-strength":"St\xe4rke","filter-grid":"Gitter","filter-grid-description":"Zeichnet Gitter auf gew\xe4hlte Ebene.","filter-noise":"Rauschen","filter-noise-description":"Zeichnet Rauschen auf gew\xe4hlte Ebene.","filter-noise-scale":"Gr\xf6\xdfe","filter-noise-alpha":"Alpha","filter-pattern":"Muster","filter-pattern-description":"Erzeugt Muster auf aktiver Ebene. Ziehe in der Vorschau um weitere Parameter zu steuern.","filter-distort":"Verzerren","filter-distort-description":"Verzerrt aktive Ebene.","filter-distort-phase":"Phase","filter-distort-stepsize":"Schrittgr\xf6\xdfe","filter-distort-sync-xy":"XY koppeln","filter-vanish-point":"Fluchtpunkt","filter-vanish-point-title":"Fluchtpunkt","filter-vanish-point-description":"Zeichnet Fluchtpunkt auf aktive Ebene. Ziehe Vorschau zum Verschieben.","filter-vanish-point-lines":"Linien","import-opening":"\xd6ffne Datei...","import-title":"Datei \xf6ffnen","import-too-large":"Bild zu gro\xdf, es wird verkleinert.","import-btn-as-layer":"Als Ebene","import-btn-as-image":"Als Bild","import-as-layer-title":"\xd6ffne Bild als neue Ebene","import-as-layer-description":"Passe die Position des importierten Bildes an.","import-as-layer-limit-reached":"Maximale Ebenen erreicht, es wird auf vorhandene Ebene platziert.","import-as-layer-fit":"Passen","import-flatten":"Reduzieren","import-unsupported-file":"Nicht unterst\xfctzter Dateityp. Siehe Hilfe f\xfcr unterst\xfctzte Typen.","import-broken-file":"Bild konnte nicht geladen werden. Datei k\xf6nnte besch\xe4digt sein.","import-psd-unsupported":"Nicht unterst\xfctzte Funktionen. PSD musste auf eine Ebene reduziert werden.","import-psd-limited-support":"Begrenzte Unterst\xfctzung f\xfcr PSD. Reduziertes Bild sieht vermutlich korrekter aus.","import-psd-too-large":"Bild \xfcberschreitet Maximum von {x} x {x} Pixel, kann nicht ge\xf6ffnet werden.","import-psd-size":"Bildgr\xf6\xdfe","hand-reset":"Zur\xfccksetzen","hand-fit":"Passen","bucket-tolerance":"Toleranz","bucket-sample":"Quelle","bucket-sample-title":"Von welchen Ebenen wird Farbe gelesen","bucket-sample-all":"Alle","bucket-sample-active":"Aktiv","bucket-sample-above":"\xdcber","bucket-grow":"Wachsen","bucket-grow-title":"Erweitere gef\xfcllten Bereich (in Pixel)","bucket-contiguous":"Benachbart","bucket-contiguous-title":"F\xfclle nur miteinander verbundene Bereiche","gradient-linear":"Linear","gradient-linear-mirror":"Linear Gespiegelt","gradient-radial":"Radial","shape-stroke":"Linie","shape-fill":"F\xfcllen","shape-rect":"Rechteck","shape-ellipse":"Ellipse","shape-line":"Linie","shape-line-width":"Linienbreite","shape-outwards":"Nach Au\xdfen","shape-fixed":"Fest 1:1","text-instruction":"Klicken um Text zu platzieren","text-title":"Text Hinzuf\xfcgen","text-text":"Text","text-font":"Schrift","text-placeholder":"Dein Text","text-color":"Farbe","text-size":"Gr\xf6\xdfe","text-line-height":"Zeilenh\xf6he","text-letter-spacing":"Zeichenabstand","text-left":"Linksb\xfcndig","text-center":"Zentriert","text-right":"Rechtsb\xfcndig","text-italic":"Kursiv","text-bold":"Fett","save-reminder-title":"Ungespeicherter Fortschritt","save-reminder-text":"Dein Bild wurde seit {a} Minuten{b} nicht gespeichert. Speichere jetzt um Datenverlust zu vermeiden.","save-reminder-save-psd":"Speichere als PSD","save-reminder-psd-layers":"PSD merkt sich alle Ebenen.","backup-drawing":"Du kannst dein Bild lokal sichern.","submit":"Senden","submit-title":"Bild senden","submit-prompt":"Bild senden?","submit-submitting":"L\xe4d hoch","embed-init-loading":"Lade App","embed-init-waiting":"Warten auf Bild","unsaved":"Ungespeichert","help":"Hilfe","tab-settings":"Einstellungen","settings-language":"Sprache","settings-language-reload":"Aktualisiert mit Neuladen.","settings-theme":"Farbe","settings-save-reminder-label":"Speicher-Erinnerung","settings-save-reminder-disabled":"deaktiviert","settings-save-reminder-confirm-title":"Speicher-Erinnerung deaktivieren?","settings-save-reminder-confirm-a":"Es gibt kein Autosave und Browser Tabs existieren nicht f\xfcr ewig. Wenn du nicht regelm\xe4\xdfig speicherst, verlierst du wahrscheinlich deinen Fortschritt.","settings-save-reminder-confirm-b":"Auf eigene Gefahr ausschalten?","settings-save-reminder-confirm-disable":"Deaktivieren","theme-dark":"Dunkel","theme-light":"Hell","terms-of-service":"Nutzungsbedingungen","licenses":"Lizenzen","source-code":"Quellcode","auto":"Automatisch","zoom-in":"Vergr\xf6\xdfern","zoom-out":"Verkleinern","radius":"Radius","constrain-proportions":"Festes Seitenverh\xe4ltnis","width":"Breite","height":"H\xf6he","opacity":"Deckkraft","red":"Rot","green":"Gr\xfcn","blue":"Blau","eraser":"Radierer","center":"Zentrieren","layers":"Ebenen","background":"Hintergrund","scaling-algorithm":"Skalierungsalgorithmus","algorithm-smooth":"Glatt","algorithm-pixelated":"Pixelig","preview":"Vorschau","angle-snap":"Einrasten","angle-snap-title":"45\xb0 einrasten","lock-alpha":"Fixieren","lock-alpha-title":"Fixiert Alpha-Kanal der Ebene","reverse":"Umkehren","compare-before":"Vorher","compare-after":"Danach","loading":"L\xe4d","more":"Mehr","x-minutes":"{x} Min"}');

},{}]},["ecrLB"], null, "parcelRequire94c2")

//# sourceMappingURL=de.bc2c59f6.js.map
