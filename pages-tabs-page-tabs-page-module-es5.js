function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"], {
  /***/
  "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
    \**************************************************************************/

  /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation */

  /***/
  function node_modulesCapacitorCoreDistEsmCorePluginDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
      return CameraSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
      return CameraDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
      return CameraResultType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
      return FilesystemDirectory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
      return FilesystemEncoding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
      return HapticsImpactStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
      return HapticsNotificationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
      return KeyboardStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
      return KeyboardResize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
      return ActionSheetOptionStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
      return PermissionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
      return PhotosAlbumType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
      return StatusBarStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
      return StatusBarAnimation;
    });

    var CameraSource;

    (function (CameraSource) {
      CameraSource["Prompt"] = "PROMPT";
      CameraSource["Camera"] = "CAMERA";
      CameraSource["Photos"] = "PHOTOS";
    })(CameraSource || (CameraSource = {}));

    var CameraDirection;

    (function (CameraDirection) {
      CameraDirection["Rear"] = "REAR";
      CameraDirection["Front"] = "FRONT";
    })(CameraDirection || (CameraDirection = {}));

    var CameraResultType;

    (function (CameraResultType) {
      CameraResultType["Uri"] = "uri";
      CameraResultType["Base64"] = "base64";
      CameraResultType["DataUrl"] = "dataUrl";
    })(CameraResultType || (CameraResultType = {}));

    var FilesystemDirectory;

    (function (FilesystemDirectory) {
      /**
       * The Documents directory
       * On iOS it's the app's documents directory.
       * Use this directory to store user-generated content.
       * On Android it's the Public Documents folder, so it's accessible from other apps.
       * It's not accesible on Android 10 unless the app enables legacy External Storage
       * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
       * in the `AndroidManifest.xml`
       */
      FilesystemDirectory["Documents"] = "DOCUMENTS";
      /**
       * The Data directory
       * On iOS it will use the Documents directory
       * On Android it's the directory holding application files.
       * Files will be deleted when the application is uninstalled.
       */

      FilesystemDirectory["Data"] = "DATA";
      /**
       * The Cache directory
       * Can be deleted in cases of low memory, so use this directory to write app-specific files
       * that your app can re-create easily.
       */

      FilesystemDirectory["Cache"] = "CACHE";
      /**
       * The external directory
       * On iOS it will use the Documents directory
       * On Android it's the directory on the primary shared/external
       * storage device where the application can place persistent files it owns.
       * These files are internal to the applications, and not typically visible
       * to the user as media.
       * Files will be deleted when the application is uninstalled.
       */

      FilesystemDirectory["External"] = "EXTERNAL";
      /**
       * The external storage directory
       * On iOS it will use the Documents directory
       * On Android it's the primary shared/external storage directory.
       * It's not accesible on Android 10 unless the app enables legacy External Storage
       * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
       * in the `AndroidManifest.xml`
       */

      FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
    })(FilesystemDirectory || (FilesystemDirectory = {}));

    var FilesystemEncoding;

    (function (FilesystemEncoding) {
      FilesystemEncoding["UTF8"] = "utf8";
      FilesystemEncoding["ASCII"] = "ascii";
      FilesystemEncoding["UTF16"] = "utf16";
    })(FilesystemEncoding || (FilesystemEncoding = {}));

    var HapticsImpactStyle;

    (function (HapticsImpactStyle) {
      HapticsImpactStyle["Heavy"] = "HEAVY";
      HapticsImpactStyle["Medium"] = "MEDIUM";
      HapticsImpactStyle["Light"] = "LIGHT";
    })(HapticsImpactStyle || (HapticsImpactStyle = {}));

    var HapticsNotificationType;

    (function (HapticsNotificationType) {
      HapticsNotificationType["SUCCESS"] = "SUCCESS";
      HapticsNotificationType["WARNING"] = "WARNING";
      HapticsNotificationType["ERROR"] = "ERROR";
    })(HapticsNotificationType || (HapticsNotificationType = {}));

    var KeyboardStyle;

    (function (KeyboardStyle) {
      KeyboardStyle["Dark"] = "DARK";
      KeyboardStyle["Light"] = "LIGHT";
    })(KeyboardStyle || (KeyboardStyle = {}));

    var KeyboardResize;

    (function (KeyboardResize) {
      KeyboardResize["Body"] = "body";
      KeyboardResize["Ionic"] = "ionic";
      KeyboardResize["Native"] = "native";
      KeyboardResize["None"] = "none";
    })(KeyboardResize || (KeyboardResize = {}));

    var ActionSheetOptionStyle;

    (function (ActionSheetOptionStyle) {
      ActionSheetOptionStyle["Default"] = "DEFAULT";
      ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
      ActionSheetOptionStyle["Cancel"] = "CANCEL";
    })(ActionSheetOptionStyle || (ActionSheetOptionStyle = {})); //


    var PermissionType;

    (function (PermissionType) {
      PermissionType["Camera"] = "camera";
      PermissionType["Photos"] = "photos";
      PermissionType["Geolocation"] = "geolocation";
      PermissionType["Notifications"] = "notifications";
      PermissionType["ClipboardRead"] = "clipboard-read";
      PermissionType["ClipboardWrite"] = "clipboard-write";
      PermissionType["Microphone"] = "microphone";
    })(PermissionType || (PermissionType = {}));

    var PhotosAlbumType;

    (function (PhotosAlbumType) {
      /**
       * Album is a "smart" album (such as Favorites or Recently Added)
       */
      PhotosAlbumType["Smart"] = "smart";
      /**
       * Album is a cloud-shared album
       */

      PhotosAlbumType["Shared"] = "shared";
      /**
       * Album is a user-created album
       */

      PhotosAlbumType["User"] = "user";
    })(PhotosAlbumType || (PhotosAlbumType = {}));

    var StatusBarStyle;

    (function (StatusBarStyle) {
      /**
       * Light text for dark backgrounds.
       */
      StatusBarStyle["Dark"] = "DARK";
      /**
       * Dark text for light backgrounds.
       */

      StatusBarStyle["Light"] = "LIGHT";
    })(StatusBarStyle || (StatusBarStyle = {}));

    var StatusBarAnimation;

    (function (StatusBarAnimation) {
      /**
       * No animation during show/hide.
       */
      StatusBarAnimation["None"] = "NONE";
      /**
       * Slide animation during show/hide.
       */

      StatusBarAnimation["Slide"] = "SLIDE";
      /**
       * Fade animation during show/hide.
       */

      StatusBarAnimation["Fade"] = "FADE";
    })(StatusBarAnimation || (StatusBarAnimation = {})); //# sourceMappingURL=core-plugin-definitions.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/global.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
    \*********************************************************/

  /*! exports provided: Capacitor, Plugins */

  /***/
  function node_modulesCapacitorCoreDistEsmGlobalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
      return Capacitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Plugins", function () {
      return Plugins;
    });
    /* harmony import */


    var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./web-runtime */
    "./node_modules/@capacitor/core/dist/esm/web-runtime.js"); // Create our default Capacitor instance, which will be
    // overridden on native platforms


    var Capacitor = function (globalThis) {
      // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
      // Ensure the global is assigned the same Capacitor instance,
      // then export Capacitor so it can be imported in other modules
      return globalThis.Capacitor = globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]();
    }( // figure out the current globalThis, such as "window", "self" or "global"
    // ensure errors are not thrown in an node SSR environment or web worker
    typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

    var Plugins = Capacitor.Plugins; //# sourceMappingURL=global.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
    \********************************************************/

  /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation, Capacitor, Plugins, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */

  /***/
  function node_modulesCapacitorCoreDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarAnimation"];
    });
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global */
    "./node_modules/@capacitor/core/dist/esm/global.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Plugins", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"];
    });
    /* harmony import */


    var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web-plugins */
    "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"];
    });
    /* harmony import */


    var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web/index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/util.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
    \*******************************************************/

  /*! exports provided: extend, uuid4 */

  /***/
  function node_modulesCapacitorCoreDistEsmUtilJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extend", function () {
      return extend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uuid4", function () {
      return uuid4;
    });

    var extend = function extend(target) {
      var objs = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
      }

      objs.forEach(function (o) {
        if (o && typeof o === 'object') {
          for (var k in o) {
            if (o.hasOwnProperty(k)) {
              target[k] = o[k];
            }
          }
        }
      });
      return target;
    };

    var uuid4 = function uuid4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }; //# sourceMappingURL=util.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
    \**************************************************************/

  /*! exports provided: registerWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */

  /***/
  function node_modulesCapacitorCoreDistEsmWebPluginsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
      return registerWebPlugin;
    });
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./global */
    "./node_modules/@capacitor/core/dist/esm/global.js");
    /* harmony import */


    var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./web/index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web/accessibility */
    "./node_modules/@capacitor/core/dist/esm/web/accessibility.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
    });
    /* harmony import */


    var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web/app */
    "./node_modules/@capacitor/core/dist/esm/web/app.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"];
    });
    /* harmony import */


    var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./web/browser */
    "./node_modules/@capacitor/core/dist/esm/web/browser.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"];
    });
    /* harmony import */


    var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./web/camera */
    "./node_modules/@capacitor/core/dist/esm/web/camera.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"];
    });
    /* harmony import */


    var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./web/clipboard */
    "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"];
    });
    /* harmony import */


    var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./web/filesystem */
    "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"];
    });
    /* harmony import */


    var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./web/geolocation */
    "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"];
    });
    /* harmony import */


    var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./web/device */
    "./node_modules/@capacitor/core/dist/esm/web/device.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"];
    });
    /* harmony import */


    var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./web/local-notifications */
    "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"];
    });
    /* harmony import */


    var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./web/share */
    "./node_modules/@capacitor/core/dist/esm/web/share.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"];
    });
    /* harmony import */


    var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./web/modals */
    "./node_modules/@capacitor/core/dist/esm/web/modals.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"];
    });
    /* harmony import */


    var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./web/motion */
    "./node_modules/@capacitor/core/dist/esm/web/motion.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"];
    });
    /* harmony import */


    var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./web/network */
    "./node_modules/@capacitor/core/dist/esm/web/network.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"];
    });
    /* harmony import */


    var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./web/permissions */
    "./node_modules/@capacitor/core/dist/esm/web/permissions.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"];
    });
    /* harmony import */


    var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./web/splash-screen */
    "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"];
    });
    /* harmony import */


    var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./web/storage */
    "./node_modules/@capacitor/core/dist/esm/web/storage.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"];
    });
    /* harmony import */


    var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./web/toast */
    "./node_modules/@capacitor/core/dist/esm/web/toast.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"];
    });

    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);

    var registerWebPlugin = function registerWebPlugin(plugin) {
      Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
    }; //# sourceMappingURL=web-plugins.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
    \**************************************************************/

  /*! exports provided: CapacitorWeb */

  /***/
  function node_modulesCapacitorCoreDistEsmWebRuntimeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function () {
      return CapacitorWeb;
    });

    var CapacitorWeb =
    /** @class */
    function () {
      function CapacitorWeb() {
        var _this = this;

        this.platform = 'web';
        this.isNative = false; // Need to assign here to avoid having to define every plugin but still
        // get the typed benefits of the provided plugins in PluginRegistry

        this.Plugins = {}; // Gracefully degrade in non-Proxy supporting engines, e.g. IE11. This
        // effectively means that trying to access an unavailable plugin will
        // locally throw, but this is still better than throwing a syntax error.

        if (typeof Proxy !== 'undefined') {
          // Build a proxy for the Plugins object that returns the "Noop Plugin"
          // if a plugin isn't available
          this.Plugins = new Proxy(this.Plugins, {
            get: function get(target, prop) {
              if (typeof target[prop] === 'undefined') {
                var thisRef_1 = _this;
                return new Proxy({}, {
                  get: function get(_target, _prop) {
                    if (typeof _target[_prop] === 'undefined') {
                      return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                    } else {
                      return _target[_prop];
                    }
                  }
                });
              } else {
                return target[prop];
              }
            }
          });
        }
      }

      CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
      };

      CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
      };

      CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
      };

      CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
      };

      CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
      };

      return CapacitorWeb;
    }(); //# sourceMappingURL=web-runtime.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/accessibility.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
    \********************************************************************/

  /*! exports provided: AccessibilityPluginWeb, Accessibility */

  /***/
  function node_modulesCapacitorCoreDistEsmWebAccessibilityJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return AccessibilityPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return Accessibility;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var AccessibilityPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);

      function AccessibilityPluginWeb() {
        return _super.call(this, {
          name: 'Accessibility',
          platforms: ['web']
        }) || this;
      }

      AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
        throw new Error('Feature not available in the browser');
      };

      AccessibilityPluginWeb.prototype.speak = function (options) {
        if (!('speechSynthesis' in window)) {
          return Promise.reject('Browser does not support the Speech Synthesis API');
        }

        var utterance = new SpeechSynthesisUtterance(options.value);

        if (options.language) {
          utterance.lang = options.language;
        }

        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
      };

      return AccessibilityPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Accessibility = new AccessibilityPluginWeb(); //# sourceMappingURL=accessibility.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/app.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
    \**********************************************************/

  /*! exports provided: AppPluginWeb, App */

  /***/
  function node_modulesCapacitorCoreDistEsmWebAppJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return AppPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return App;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var AppPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);

      function AppPluginWeb() {
        var _this = _super.call(this, {
          name: 'App',
          platforms: ['web']
        }) || this;

        if (typeof document !== 'undefined') {
          document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
        }

        return _this;
      }

      AppPluginWeb.prototype.exitApp = function () {
        throw new Error('Method not implemented.');
      };

      AppPluginWeb.prototype.canOpenUrl = function (_options) {
        return Promise.resolve({
          value: true
        });
      };

      AppPluginWeb.prototype.openUrl = function (_options) {
        return Promise.resolve({
          completed: true
        });
      };

      AppPluginWeb.prototype.getLaunchUrl = function () {
        return Promise.resolve({
          url: ''
        });
      };

      AppPluginWeb.prototype.getState = function () {
        return Promise.resolve({
          isActive: document.hidden !== true
        });
      };

      AppPluginWeb.prototype.handleVisibilityChange = function () {
        var data = {
          isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
      };

      return AppPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var App = new AppPluginWeb(); //# sourceMappingURL=app.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/browser.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
    \**************************************************************/

  /*! exports provided: BrowserPluginWeb, Browser */

  /***/
  function node_modulesCapacitorCoreDistEsmWebBrowserJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return BrowserPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return Browser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var BrowserPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);

      function BrowserPluginWeb() {
        return _super.call(this, {
          name: 'Browser',
          platforms: ['web']
        }) || this;
      }

      BrowserPluginWeb.prototype.open = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            this._lastWindow = window.open(options.url, options.windowName || '_blank');
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      BrowserPluginWeb.prototype.prefetch = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            // Does nothing
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      BrowserPluginWeb.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            this._lastWindow && this._lastWindow.close();
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      return BrowserPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Browser = new BrowserPluginWeb(); //# sourceMappingURL=browser.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/camera.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
    \*************************************************************/

  /*! exports provided: CameraPluginWeb, Camera */

  /***/
  function node_modulesCapacitorCoreDistEsmWebCameraJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return CameraPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var CameraPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);

      function CameraPluginWeb() {
        return _super.call(this, {
          name: 'Camera',
          platforms: ['web']
        }) || this;
      }

      CameraPluginWeb.prototype.getPhoto = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var cameraModal_1, e_1;

                var _this = this;

                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      if (!options.webUseInput) return [3
                      /*break*/
                      , 1];
                      this.fileInputExperience(options, resolve);
                      return [3
                      /*break*/
                      , 7];

                    case 1:
                      if (!customElements.get('pwa-camera-modal')) return [3
                      /*break*/
                      , 6];
                      cameraModal_1 = document.createElement('pwa-camera-modal');
                      document.body.appendChild(cameraModal_1);
                      _a.label = 2;

                    case 2:
                      _a.trys.push([2, 4,, 5]);

                      return [4
                      /*yield*/
                      , cameraModal_1.componentOnReady()];

                    case 3:
                      _a.sent();

                      cameraModal_1.addEventListener('onPhoto', function (e) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                          var photo, _a;

                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                            switch (_b.label) {
                              case 0:
                                photo = e.detail;
                                if (!(photo === null)) return [3
                                /*break*/
                                , 1];
                                reject('User cancelled photos app');
                                return [3
                                /*break*/
                                , 4];

                              case 1:
                                if (!(photo instanceof Error)) return [3
                                /*break*/
                                , 2];
                                reject(photo.message);
                                return [3
                                /*break*/
                                , 4];

                              case 2:
                                _a = resolve;
                                return [4
                                /*yield*/
                                , this._getCameraPhoto(photo, options)];

                              case 3:
                                _a.apply(void 0, [_b.sent()]);

                                _b.label = 4;

                              case 4:
                                cameraModal_1.dismiss();
                                document.body.removeChild(cameraModal_1);
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      });
                      cameraModal_1.present();
                      return [3
                      /*break*/
                      , 5];

                    case 4:
                      e_1 = _a.sent();
                      this.fileInputExperience(options, resolve);
                      return [3
                      /*break*/
                      , 5];

                    case 5:
                      return [3
                      /*break*/
                      , 7];

                    case 6:
                      console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                      this.fileInputExperience(options, resolve);
                      _a.label = 7;

                    case 7:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            })];
          });
        });
      };

      CameraPluginWeb.prototype.fileInputExperience = function (options, resolve) {
        var input = document.querySelector('#_capacitor-camera-input');

        var cleanup = function cleanup() {
          input.parentNode && input.parentNode.removeChild(input);
        };

        if (!input) {
          input = document.createElement('input');
          input.id = '_capacitor-camera-input';
          input.type = 'file';
          document.body.appendChild(input);
        }

        input.accept = 'image/*';
        input.capture = true;

        if (options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos || options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt) {
          input.removeAttribute('capture');
        } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Front) {
          input.capture = 'user';
        } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Rear) {
          input.capture = 'environment';
        }

        input.addEventListener('change', function (_e) {
          var file = input.files[0];
          var format = 'jpeg';

          if (file.type === 'image/png') {
            format = 'png';
          } else if (file.type === 'image/gif') {
            format = 'gif';
          }

          if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl || options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
            var reader_1 = new FileReader();
            reader_1.addEventListener('load', function () {
              if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                resolve({
                  dataUrl: reader_1.result,
                  format: format
                });
              } else if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                var b64 = reader_1.result.split(',')[1];
                resolve({
                  base64String: b64,
                  format: format
                });
              }

              cleanup();
            });
            reader_1.readAsDataURL(file);
          } else {
            resolve({
              webPath: URL.createObjectURL(file),
              format: format
            });
            cleanup();
          }
        });
        input.click();
      };

      CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          var format = photo.type.split('/')[1];

          if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
            resolve({
              webPath: URL.createObjectURL(photo),
              format: format
            });
          } else {
            reader.readAsDataURL(photo);

            reader.onloadend = function () {
              var r = reader.result;

              if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                resolve({
                  dataUrl: r,
                  format: format
                });
              } else {
                resolve({
                  base64String: r.split(',')[1],
                  format: format
                });
              }
            };

            reader.onerror = function (e) {
              reject(e);
            };
          }
        });
      };

      return CameraPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Camera = new CameraPluginWeb(); //# sourceMappingURL=camera.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
    \****************************************************************/

  /*! exports provided: ClipboardPluginWeb, Clipboard */

  /***/
  function node_modulesCapacitorCoreDistEsmWebClipboardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return ClipboardPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return Clipboard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ClipboardPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);

      function ClipboardPluginWeb() {
        return _super.call(this, {
          name: 'Clipboard',
          platforms: ['web']
        }) || this;
      }

      ClipboardPluginWeb.prototype.write = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var blob, clipboardItemInput, err_1;

          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                if (!navigator.clipboard) {
                  return [2
                  /*return*/
                  , Promise.reject('Clipboard API not available in this browser')];
                }

                if (!(options.string !== undefined || options.url)) return [3
                /*break*/
                , 2];

                if (!navigator.clipboard.writeText) {
                  return [2
                  /*return*/
                  , Promise.reject('Writting to clipboard not supported in this browser')];
                }

                return [4
                /*yield*/
                , navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];

              case 1:
                _b.sent();

                return [3
                /*break*/
                , 10];

              case 2:
                if (!options.image) return [3
                /*break*/
                , 9];

                if (!navigator.clipboard.write) {
                  return [2
                  /*return*/
                  , Promise.reject('Setting images not supported in this browser')];
                }

                _b.label = 3;

              case 3:
                _b.trys.push([3, 7,, 8]);

                return [4
                /*yield*/
                , fetch(options.image)];

              case 4:
                return [4
                /*yield*/
                , _b.sent().blob()];

              case 5:
                blob = _b.sent();
                clipboardItemInput = new ClipboardItem((_a = {}, _a[blob.type] = blob, _a));
                return [4
                /*yield*/
                , navigator.clipboard.write([clipboardItemInput])];

              case 6:
                _b.sent();

                return [3
                /*break*/
                , 8];

              case 7:
                err_1 = _b.sent();
                return [2
                /*return*/
                , Promise.reject('Failed to write image')];

              case 8:
                return [3
                /*break*/
                , 10];

              case 9:
                return [2
                /*return*/
                , Promise.reject('Nothing to write')];

              case 10:
                return [2
                /*return*/
                , Promise.resolve()];
            }
          });
        });
      };

      ClipboardPluginWeb.prototype.read = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var clipboardItems, type, clipboardBlob, data, err_2;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!navigator.clipboard) {
                  return [2
                  /*return*/
                  , Promise.reject('Clipboard API not available in this browser')];
                }

                if (!!navigator.clipboard.read) return [3
                /*break*/
                , 1];

                if (!navigator.clipboard.readText) {
                  return [2
                  /*return*/
                  , Promise.reject('Reading from clipboard not supported in this browser')];
                }

                return [2
                /*return*/
                , this.readText()];

              case 1:
                _a.trys.push([1, 5,, 6]);

                return [4
                /*yield*/
                , navigator.clipboard.read()];

              case 2:
                clipboardItems = _a.sent();
                type = clipboardItems[0].types[0];
                return [4
                /*yield*/
                , clipboardItems[0].getType(type)];

              case 3:
                clipboardBlob = _a.sent();
                return [4
                /*yield*/
                , this._getBlobData(clipboardBlob, type)];

              case 4:
                data = _a.sent();
                return [2
                /*return*/
                , Promise.resolve({
                  value: data,
                  type: type
                })];

              case 5:
                err_2 = _a.sent();
                return [2
                /*return*/
                , this.readText()];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      };

      ClipboardPluginWeb.prototype.readText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var text;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , navigator.clipboard.readText()];

              case 1:
                text = _a.sent();
                return [2
                /*return*/
                , Promise.resolve({
                  value: text,
                  type: 'text/plain'
                })];
            }
          });
        });
      };

      ClipboardPluginWeb.prototype._getBlobData = function (clipboardBlob, type) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          if (type.includes('image')) {
            reader.readAsDataURL(clipboardBlob);
          } else {
            reader.readAsText(clipboardBlob);
          }

          reader.onloadend = function () {
            var r = reader.result;
            resolve(r);
          };

          reader.onerror = function (e) {
            reject(e);
          };
        });
      };

      return ClipboardPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Clipboard = new ClipboardPluginWeb(); //# sourceMappingURL=clipboard.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/device.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
    \*************************************************************/

  /*! exports provided: DevicePluginWeb, Device */

  /***/
  function node_modulesCapacitorCoreDistEsmWebDeviceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return DevicePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return Device;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util */
    "./node_modules/@capacitor/core/dist/esm/util.js");

    var DevicePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);

      function DevicePluginWeb() {
        return _super.call(this, {
          name: 'Device',
          platforms: ['web']
        }) || this;
      }

      DevicePluginWeb.prototype.getInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var ua, uaFields;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            ua = navigator.userAgent;
            uaFields = this.parseUa(ua);
            return [2
            /*return*/
            , Promise.resolve({
              model: uaFields.model,
              platform: 'web',
              appVersion: '',
              appBuild: '',
              appId: '',
              appName: '',
              operatingSystem: uaFields.operatingSystem,
              osVersion: uaFields.osVersion,
              manufacturer: navigator.vendor,
              isVirtual: false,
              uuid: this.getUid()
            })];
          });
        });
      };

      DevicePluginWeb.prototype.getBatteryInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var battery, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                battery = {};
                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , navigator.getBattery()];

              case 2:
                battery = _a.sent();
                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _a.sent();
                return [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                , Promise.resolve({
                  batteryLevel: battery.level,
                  isCharging: battery.charging
                })];
            }
          });
        });
      };

      DevicePluginWeb.prototype.getLanguageCode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , {
              value: navigator.language
            }];
          });
        });
      };

      DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;

        var end = _ua.indexOf(') AppleWebKit');

        if (_ua.indexOf(') Gecko') !== -1) {
          end = _ua.indexOf(') Gecko');
        }

        var fields = _ua.substring(start, end);

        if (_ua.indexOf('Android') !== -1) {
          uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
          uaFields.osVersion = fields.split('; ')[1];
        } else {
          uaFields.model = fields.split('; ')[0];

          if (navigator.oscpu) {
            uaFields.osVersion = navigator.oscpu;
          } else {
            if (_ua.indexOf('Windows') !== -1) {
              uaFields.osVersion = fields;
            } else {
              var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
              uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
            }
          }
        }

        if (/android/i.test(_ua)) {
          uaFields.operatingSystem = 'android';
        } else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
          uaFields.operatingSystem = 'ios';
        } else if (/Win/.test(_ua)) {
          uaFields.operatingSystem = 'windows';
        } else if (/Mac/i.test(_ua)) {
          uaFields.operatingSystem = 'mac';
        } else {
          uaFields.operatingSystem = 'unknown';
        }

        return uaFields;
      };

      DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');

        if (uid) {
          return uid;
        }

        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
      };

      return DevicePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Device = new DevicePluginWeb(); //# sourceMappingURL=device.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
    \*****************************************************************/

  /*! exports provided: FilesystemPluginWeb, Filesystem */

  /***/
  function node_modulesCapacitorCoreDistEsmWebFilesystemJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return FilesystemPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return Filesystem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var FilesystemPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);

      function FilesystemPluginWeb() {
        var _this = _super.call(this, {
          name: 'Filesystem',
          platforms: ['web']
        }) || this;

        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
      }

      FilesystemPluginWeb.prototype.initDb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            if (this._db !== undefined) {
              return [2
              /*return*/
              , this._db];
            }

            if (!('indexedDB' in window)) {
              throw new Error('This browser doesn\'t support IndexedDB');
            }

            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
              request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;

              request.onsuccess = function () {
                _this._db = request.result;
                resolve(request.result);
              };

              request.onerror = function () {
                return reject(request.error);
              };

              request.onblocked = function () {
                console.warn('db blocked');
              };
            })];
          });
        });
      };

      FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;

        switch (event.oldVersion) {
          case 0:
          case 1:
          default:
            if (db.objectStoreNames.contains('FileStorage')) {
              db.deleteObjectStore('FileStorage');
            }

            var store = db.createObjectStore('FileStorage', {
              keyPath: 'path'
            });
            store.createIndex('by_folder', 'folder');
        }
      };

      FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var readFlag;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
            return [2
            /*return*/
            , this.initDb().then(function (conn) {
              return new Promise(function (resolve, reject) {
                var tx = conn.transaction(['FileStorage'], readFlag);
                var store = tx.objectStore('FileStorage');
                var req = store[cmd].apply(store, args);

                req.onsuccess = function () {
                  return resolve(req.result);
                };

                req.onerror = function () {
                  return reject(req.error);
                };
              });
            })];
          });
        });
      };

      FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var readFlag;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
            return [2
            /*return*/
            , this.initDb().then(function (conn) {
              return new Promise(function (resolve, reject) {
                var tx = conn.transaction(['FileStorage'], readFlag);
                var store = tx.objectStore('FileStorage');
                var index = store.index(indexName);
                var req = index[cmd].apply(index, args);

                req.onsuccess = function () {
                  return resolve(req.result);
                };

                req.onerror = function () {
                  return reject(req.error);
                };
              });
            })];
          });
        });
      };

      FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        var fsPath = '/' + directory;
        if (uriPath !== '') fsPath += '/' + cleanedUriPath;
        return fsPath;
      };

      FilesystemPluginWeb.prototype.clear = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var conn, tx, store;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.initDb()];

              case 1:
                conn = _a.sent();
                tx = conn.transaction(['FileStorage'], 'readwrite');
                store = tx.objectStore('FileStorage');
                store.clear();
                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Read a file from disk
       * @param options options for the file read
       * @return a promise that resolves with the read file data result
       */


      FilesystemPluginWeb.prototype.readFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (entry === undefined) throw Error('File does not exist.');
                return [2
                /*return*/
                , {
                  data: entry.content
                }];
            }
          });
        });
      };
      /**
       * Write a file to disk in the specified location on device
       * @param options options for the file write
       * @return a promise that resolves with the file write result
       */


      FilesystemPluginWeb.prototype.writeFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                data = options.data;
                doRecursive = options.recursive;
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                occupiedEntry = _a.sent();
                if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                encoding = options.encoding;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 2:
                parentEntry = _a.sent();
                if (!(parentEntry === undefined)) return [3
                /*break*/
                , 4];
                subDirIndex = parentPath.indexOf('/', 1);
                if (!(subDirIndex !== -1)) return [3
                /*break*/
                , 4];
                parentArgPath = parentPath.substr(subDirIndex);
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: doRecursive
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                now = Date.now();
                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'file',
                  size: data.length,
                  ctime: now,
                  mtime: now,
                  content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {
                  uri: pathObj.path
                }];
            }
          });
        });
      };
      /**
       * Append to a file on disk in the specified location on device
       * @param options options for the file append
       * @return a promise that resolves with the file write result
       */


      FilesystemPluginWeb.prototype.appendFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, parentArgPathIndex, parentArgPath, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                data = options.data;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                now = Date.now();
                ctime = now;
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                occupiedEntry = _a.sent();
                if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 2:
                parentEntry = _a.sent();
                if (!(parentEntry === undefined)) return [3
                /*break*/
                , 4];
                parentArgPathIndex = parentPath.indexOf('/', 1);
                parentArgPath = parentArgPathIndex !== -1 ? parentPath.substr(parentArgPathIndex) : '/';
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: true
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                if (occupiedEntry !== undefined) {
                  data = occupiedEntry.content + data;
                  ctime = occupiedEntry.ctime;
                }

                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'file',
                  size: data.length,
                  ctime: ctime,
                  mtime: now,
                  content: data
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Delete a file from disk
       * @param options options for the file delete
       * @return a promise that resolves with the deleted file data result
       */


      FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry, entries;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (entry === undefined) throw Error('File does not exist.');
                return [4
                /*yield*/
                , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

              case 2:
                entries = _a.sent();
                if (entries.length !== 0) throw Error('Folder is not empty.');
                return [4
                /*yield*/
                , this.dbRequest('delete', [path])];

              case 3:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Create a directory.
       * @param options options for the mkdir
       * @return a promise that resolves with the mkdir result
       */


      FilesystemPluginWeb.prototype.mkdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                doRecursive = options.recursive;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                depth = (path.match(/\//g) || []).length;
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 1:
                parentEntry = _a.sent();
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 2:
                occupiedEntry = _a.sent();
                if (depth === 1) throw Error('Cannot create Root directory');
                if (occupiedEntry !== undefined) throw Error('Current directory does already exist.');
                if (!doRecursive && depth !== 2 && parentEntry === undefined) throw Error('Parent directory must exist');
                if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3
                /*break*/
                , 4];
                parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: doRecursive
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                now = Date.now();
                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'directory',
                  size: 0,
                  ctime: now,
                  mtime: now
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Remove a directory
       * @param options the options for the directory remove
       */


      FilesystemPluginWeb.prototype.rmdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                path = options.path, directory = options.directory, recursive = options.recursive;
                fullPath = this.getPath(directory, path);
                return [4
                /*yield*/
                , this.dbRequest('get', [fullPath])];

              case 1:
                entry = _b.sent();
                if (entry === undefined) throw Error('Folder does not exist.');
                if (entry.type !== 'directory') throw Error('Requested path is not a directory');
                return [4
                /*yield*/
                , this.readdir({
                  path: path,
                  directory: directory
                })];

              case 2:
                readDirResult = _b.sent();
                if (readDirResult.files.length !== 0 && !recursive) throw Error('Folder is not empty');
                _i = 0, _a = readDirResult.files;
                _b.label = 3;

              case 3:
                if (!(_i < _a.length)) return [3
                /*break*/
                , 9];
                entry_1 = _a[_i];
                entryPath = path + "/" + entry_1;
                return [4
                /*yield*/
                , this.stat({
                  path: entryPath,
                  directory: directory
                })];

              case 4:
                entryObj = _b.sent();
                if (!(entryObj.type === 'file')) return [3
                /*break*/
                , 6];
                return [4
                /*yield*/
                , this.deleteFile({
                  path: entryPath,
                  directory: directory
                })];

              case 5:
                _b.sent();

                return [3
                /*break*/
                , 8];

              case 6:
                return [4
                /*yield*/
                , this.rmdir({
                  path: entryPath,
                  directory: directory,
                  recursive: recursive
                })];

              case 7:
                _b.sent();

                _b.label = 8;

              case 8:
                _i++;
                return [3
                /*break*/
                , 3];

              case 9:
                return [4
                /*yield*/
                , this.dbRequest('delete', [fullPath])];

              case 10:
                _b.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Return a list of files from the directory (not recursive)
       * @param options the options for the readdir operation
       * @return a promise that resolves with the readdir directory listing result
       */


      FilesystemPluginWeb.prototype.readdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry, entries, names;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (options.path !== '' && entry === undefined) throw Error('Folder does not exist.');
                return [4
                /*yield*/
                , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

              case 2:
                entries = _a.sent();
                names = entries.map(function (e) {
                  return e.substring(path.length + 1);
                });
                return [2
                /*return*/
                , {
                  files: names
                }];
            }
          });
        });
      };
      /**
       * Return full File URI for a path and directory
       * @param options the options for the stat operation
       * @return a promise that resolves with the file stat result
       */


      FilesystemPluginWeb.prototype.getUri = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (!(entry === undefined)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , this.dbRequest('get', [path + '/'])];

              case 2:
                entry = _a.sent();
                _a.label = 3;

              case 3:
                if (entry === undefined) throw Error('Entry does not exist.');
                return [2
                /*return*/
                , {
                  uri: entry.path
                }];
            }
          });
        });
      };
      /**
       * Return data about a file
       * @param options the options for the stat operation
       * @return a promise that resolves with the file stat result
       */


      FilesystemPluginWeb.prototype.stat = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (!(entry === undefined)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , this.dbRequest('get', [path + '/'])];

              case 2:
                entry = _a.sent();
                _a.label = 3;

              case 3:
                if (entry === undefined) throw Error('Entry does not exist.');
                return [2
                /*return*/
                , {
                  type: entry.type,
                  size: entry.size,
                  ctime: entry.ctime,
                  mtime: entry.mtime,
                  uri: entry.path
                }];
            }
          });
        });
      };
      /**
       * Rename a file or directory
       * @param options the options for the rename operation
       * @return a promise that resolves with the rename result
       */


      FilesystemPluginWeb.prototype.rename = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , this._copy(options, true)];
          });
        });
      };
      /**
       * Copy a file or directory
       * @param options the options for the copy operation
       * @return a promise that resolves with the copy result
       */


      FilesystemPluginWeb.prototype.copy = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , this._copy(options, false)];
          });
        });
      };
      /**
       * Function that can perform a copy or a rename
       * @param options the options for the rename operation
       * @param doRename whether to perform a rename or copy operation
       * @return a promise that resolves with the result
       */


      FilesystemPluginWeb.prototype._copy = function (options, doRename) {
        if (doRename === void 0) {
          doRename = false;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;

          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;

                if (!to || !from) {
                  throw Error('Both to and from must be provided');
                } // If no "to" directory is provided, use the "from" directory


                if (!toDirectory) {
                  toDirectory = fromDirectory;
                }

                fromPath = this.getPath(fromDirectory, from);
                toPath = this.getPath(toDirectory, to); // Test that the "to" and "from" locations are different

                if (fromPath === toPath) {
                  return [2
                  /*return*/
                  , {}];
                }

                if (toPath.startsWith(fromPath)) {
                  throw Error('To path cannot contain the from path');
                }

                _b.label = 1;

              case 1:
                _b.trys.push([1, 3,, 6]);

                return [4
                /*yield*/
                , this.stat({
                  path: to,
                  directory: toDirectory
                })];

              case 2:
                toObj = _b.sent();
                return [3
                /*break*/
                , 6];

              case 3:
                e_1 = _b.sent();
                toPathComponents = to.split('/');
                toPathComponents.pop();
                toPath_1 = toPathComponents.join('/');
                if (!(toPathComponents.length > 0)) return [3
                /*break*/
                , 5];
                return [4
                /*yield*/
                , this.stat({
                  path: toPath_1,
                  directory: toDirectory
                })];

              case 4:
                toParentDirectory = _b.sent();

                if (toParentDirectory.type !== 'directory') {
                  throw new Error('Parent directory of the to path is a file');
                }

                _b.label = 5;

              case 5:
                return [3
                /*break*/
                , 6];

              case 6:
                // Cannot overwrite a directory
                if (toObj && toObj.type === 'directory') {
                  throw new Error('Cannot overwrite a directory with a file');
                }

                return [4
                /*yield*/
                , this.stat({
                  path: from,
                  directory: fromDirectory
                })];

              case 7:
                fromObj = _b.sent();

                updateTime = function updateTime(path, ctime, mtime) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var fullPath, entry;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          fullPath = this.getPath(toDirectory, path);
                          return [4
                          /*yield*/
                          , this.dbRequest('get', [fullPath])];

                        case 1:
                          entry = _a.sent();
                          entry.ctime = ctime;
                          entry.mtime = mtime;
                          return [4
                          /*yield*/
                          , this.dbRequest('put', [entry])];

                        case 2:
                          _a.sent();

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                };

                _a = fromObj.type;

                switch (_a) {
                  case 'file':
                    return [3
                    /*break*/
                    , 8];

                  case 'directory':
                    return [3
                    /*break*/
                    , 15];
                }

                return [3
                /*break*/
                , 28];

              case 8:
                return [4
                /*yield*/
                , this.readFile({
                  path: from,
                  directory: fromDirectory
                })];

              case 9:
                file = _b.sent();
                if (!doRename) return [3
                /*break*/
                , 11];
                return [4
                /*yield*/
                , this.deleteFile({
                  path: from,
                  directory: fromDirectory
                })];

              case 10:
                _b.sent();

                _b.label = 11;

              case 11:
                // Write the file to the new location
                return [4
                /*yield*/
                , this.writeFile({
                  path: to,
                  directory: toDirectory,
                  data: file.data
                })];

              case 12:
                // Write the file to the new location
                _b.sent();

                if (!doRename) return [3
                /*break*/
                , 14];
                return [4
                /*yield*/
                , updateTime(to, fromObj.ctime, fromObj.mtime)];

              case 13:
                _b.sent();

                _b.label = 14;

              case 14:
                // Resolve promise
                return [2
                /*return*/
                , {}];

              case 15:
                if (toObj) {
                  throw Error('Cannot move a directory over an existing object');
                }

                _b.label = 16;

              case 16:
                _b.trys.push([16, 20,, 21]); // Create the to directory


                return [4
                /*yield*/
                , this.mkdir({
                  path: to,
                  directory: toDirectory,
                  recursive: false
                })];

              case 17:
                // Create the to directory
                _b.sent();

                if (!doRename) return [3
                /*break*/
                , 19];
                return [4
                /*yield*/
                , updateTime(to, fromObj.ctime, fromObj.mtime)];

              case 18:
                _b.sent();

                _b.label = 19;

              case 19:
                return [3
                /*break*/
                , 21];

              case 20:
                e_2 = _b.sent();
                return [3
                /*break*/
                , 21];

              case 21:
                return [4
                /*yield*/
                , this.readdir({
                  path: from,
                  directory: fromDirectory
                })];

              case 22:
                contents = _b.sent().files;
                _i = 0, contents_1 = contents;
                _b.label = 23;

              case 23:
                if (!(_i < contents_1.length)) return [3
                /*break*/
                , 26];
                filename = contents_1[_i]; // Move item from the from directory to the to directory

                return [4
                /*yield*/
                , this._copy({
                  from: from + "/" + filename,
                  to: to + "/" + filename,
                  directory: fromDirectory,
                  toDirectory: toDirectory
                }, doRename)];

              case 24:
                // Move item from the from directory to the to directory
                _b.sent();

                _b.label = 25;

              case 25:
                _i++;
                return [3
                /*break*/
                , 23];

              case 26:
                if (!doRename) return [3
                /*break*/
                , 28];
                return [4
                /*yield*/
                , this.rmdir({
                  path: from,
                  directory: fromDirectory
                })];

              case 27:
                _b.sent();

                _b.label = 28;

              case 28:
                return [2
                /*return*/
                , {}];
            }
          });
        });
      };

      FilesystemPluginWeb._debug = true;
      return FilesystemPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Filesystem = new FilesystemPluginWeb(); //# sourceMappingURL=filesystem.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
    \******************************************************************/

  /*! exports provided: GeolocationPluginWeb, Geolocation */

  /***/
  function node_modulesCapacitorCoreDistEsmWebGeolocationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return GeolocationPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return Geolocation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util */
    "./node_modules/@capacitor/core/dist/esm/util.js");

    var GeolocationPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);

      function GeolocationPluginWeb() {
        return _super.call(this, {
          name: 'Geolocation',
          platforms: ['web']
        }) || this;
      }

      GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          return _this.requestPermissions().then(function (_result) {
            window.navigator.geolocation.getCurrentPosition(function (pos) {
              resolve(pos);
            }, function (err) {
              reject(err);
            }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }, options));
          });
        });
      };

      GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
          callback(pos);
        }, function (err) {
          callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }, options));
        return "" + id;
      };

      GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
      };

      return GeolocationPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Geolocation = new GeolocationPluginWeb(); //# sourceMappingURL=geolocation.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
    \************************************************************/

  /*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

  /***/
  function node_modulesCapacitorCoreDistEsmWebIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
      return WebPluginRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
      return WebPlugins;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
      return WebPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
      return mergeWebPlugins;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
      return mergeWebPlugin;
    });

    var WebPluginRegistry =
    /** @class */
    function () {
      function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
      }

      WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
      };

      WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
      };

      WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);

        if (!plugin) {
          console.error("Unable to load web plugin " + name + ", no such plugin found.");
          return;
        }

        plugin.load();
      };

      WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];

        for (var name_1 in this.plugins) {
          p.push(this.plugins[name_1]);
        }

        return p;
      };

      return WebPluginRegistry;
    }();

    var WebPlugins = new WebPluginRegistry();

    var WebPlugin =
    /** @class */
    function () {
      function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};

        if (!pluginRegistry) {
          WebPlugins.addPlugin(this);
        } else {
          pluginRegistry.addPlugin(this);
        }
      }

      WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
      };

      WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
          return;
        }

        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
      };

      WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;

        var listeners = this.listeners[eventName];

        if (!listeners) {
          this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it

        var windowListener = this.windowListeners[eventName];

        if (windowListener && !windowListener.registered) {
          this.addWindowListener(windowListener);
        }

        return {
          remove: function remove() {
            _this.removeListener(eventName, listenerFunc);
          }
        };
      };

      WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];

        if (!listeners) {
          return;
        }

        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
        // remove the window listener

        if (!this.listeners[eventName].length) {
          this.removeWindowListener(this.windowListeners[eventName]);
        }
      };

      WebPlugin.prototype.removeAllListeners = function () {
        this.listeners = {};

        for (var listener in this.windowListeners) {
          this.removeWindowListener(this.windowListeners[listener]);
        }

        this.windowListeners = {};
      };

      WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];

        if (listeners) {
          listeners.forEach(function (listener) {
            return listener(data);
          });
        }
      };

      WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
      };

      WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;

        this.windowListeners[pluginEventName] = {
          registered: false,
          windowEventName: windowEventName,
          pluginEventName: pluginEventName,
          handler: function handler(event) {
            _this.notifyListeners(pluginEventName, event);
          }
        };
      };

      WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
          return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        } else {
          return Promise.resolve({
            results: []
          });
        }
      };

      WebPlugin.prototype.load = function () {
        this.loaded = true;
      };

      return WebPlugin;
    }();

    var shouldMergeWebPlugin = function shouldMergeWebPlugin(plugin) {
      return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
    };
    /**
     * For all our known web plugins, merge them into the global plugins
     * registry if they aren't already existing. If they don't exist, that
     * means there's no existing native implementation for it.
     * @param knownPlugins the Capacitor.Plugins global registry.
     */


    var mergeWebPlugins = function mergeWebPlugins(knownPlugins) {
      var plugins = WebPlugins.getPlugins();

      for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
      }
    };

    var mergeWebPlugin = function mergeWebPlugin(knownPlugins, plugin) {
      // If we already have a plugin registered (meaning it was defined in the native layer),
      // then we should only overwrite it if the corresponding web plugin activates on
      // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
      if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
      }

      knownPlugins[plugin.config.name] = plugin;
    }; //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
    \**************************************************************************/

  /*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */

  /***/
  function node_modulesCapacitorCoreDistEsmWebLocalNotificationsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return LocalNotificationsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return LocalNotifications;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var LocalNotificationsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);

      function LocalNotificationsPluginWeb() {
        var _this = _super.call(this, {
          name: 'LocalNotifications',
          platforms: ['web']
        }) || this;

        _this.pending = [];
        return _this;
      }

      LocalNotificationsPluginWeb.prototype.createChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
      };

      LocalNotificationsPluginWeb.prototype.deleteChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
      };

      LocalNotificationsPluginWeb.prototype.listChannels = function () {
        throw new Error('Feature not available in the browser');
      };

      LocalNotificationsPluginWeb.prototype.sendPending = function () {
        var _this = this;

        var toRemove = [];
        var now = +new Date();
        this.pending.forEach(function (localNotification) {
          if (localNotification.schedule && localNotification.schedule.at) {
            if (+localNotification.schedule.at <= now) {
              _this.buildNotification(localNotification);

              toRemove.push(localNotification);
            }
          }
        });
        console.log('Sent pending, removing', toRemove);
        this.pending = this.pending.filter(function (localNotification) {
          return !toRemove.find(function (ln) {
            return ln === localNotification;
          });
        });
      };

      LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
        var _this = this;

        var l = localNotification;

        if (localNotification.schedule && localNotification.schedule.at) {
          var diff = +localNotification.schedule.at - +new Date();
          this.pending.push(l);
          setTimeout(function () {
            _this.sendPending();
          }, diff);
          return;
        }

        this.buildNotification(localNotification);
      };

      LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
        var l = localNotification;
        return new Notification(l.title, {
          body: l.body
        });
      };

      LocalNotificationsPluginWeb.prototype.schedule = function (options) {
        var _this = this;

        var notifications = [];
        options.notifications.forEach(function (notification) {
          notifications.push(_this.sendNotification(notification));
        });
        return Promise.resolve({
          notifications: options.notifications.map(function (notification) {
            return {
              id: '' + notification.id
            };
          })
        });
      };

      LocalNotificationsPluginWeb.prototype.getPending = function () {
        return Promise.resolve({
          notifications: this.pending.map(function (localNotification) {
            return {
              id: '' + localNotification.id
            };
          })
        });
      };

      LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
        throw new Error('Method not implemented.');
      };

      LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
        console.log('Cancel these', pending);
        this.pending = this.pending.filter(function (localNotification) {
          return !pending.notifications.find(function (ln) {
            return ln.id === '' + localNotification.id;
          });
        });
        return Promise.resolve();
      };

      LocalNotificationsPluginWeb.prototype.areEnabled = function () {
        return Promise.resolve({
          value: Notification.permission === 'granted'
        });
      };

      LocalNotificationsPluginWeb.prototype.requestPermission = function () {
        return new Promise(function (resolve) {
          Notification.requestPermission(function (result) {
            var granted = true;

            if (result === 'denied' || result === 'default') {
              granted = false;
            }

            resolve({
              granted: granted
            });
          });
        });
      };

      LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
          Notification.requestPermission(function (result) {
            if (result === 'denied' || result === 'default') {
              reject(result);
              return;
            }

            resolve({
              results: [result]
            });
          });
        });
      };

      return LocalNotificationsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var LocalNotifications = new LocalNotificationsPluginWeb(); //# sourceMappingURL=local-notifications.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/modals.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
    \*************************************************************/

  /*! exports provided: ModalsPluginWeb, Modals */

  /***/
  function node_modulesCapacitorCoreDistEsmWebModalsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return ModalsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return Modals;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ModalsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);

      function ModalsPluginWeb() {
        return _super.call(this, {
          name: 'Modals',
          platforms: ['web']
        }) || this;
      }

      ModalsPluginWeb.prototype.alert = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            window.alert(options.message);
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      ModalsPluginWeb.prototype.prompt = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var val;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            val = window.prompt(options.message, options.inputText || '');
            return [2
            /*return*/
            , Promise.resolve({
              value: val,
              cancelled: val === null
            })];
          });
        });
      };

      ModalsPluginWeb.prototype.confirm = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var val;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            val = window.confirm(options.message);
            return [2
            /*return*/
            , Promise.resolve({
              value: val
            })];
          });
        });
      };

      ModalsPluginWeb.prototype.showActions = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , new Promise(function (resolve, _reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var actionSheet;

                var _this = this;

                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                  actionSheet = document.querySelector('pwa-action-sheet');

                  if (!actionSheet) {
                    actionSheet = document.createElement('pwa-action-sheet');
                    document.body.appendChild(actionSheet);
                  }

                  actionSheet.header = options.title;
                  actionSheet.cancelable = false;
                  actionSheet.options = options.options;
                  actionSheet.addEventListener('onSelection', function (e) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                      var selection;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        selection = e.detail;
                        resolve({
                          index: selection
                        });
                        return [2
                        /*return*/
                        ];
                      });
                    });
                  });
                  return [2
                  /*return*/
                  ];
                });
              });
            })];
          });
        });
      };

      return ModalsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Modals = new ModalsPluginWeb(); //# sourceMappingURL=modals.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/motion.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
    \*************************************************************/

  /*! exports provided: MotionPluginWeb, Motion */

  /***/
  function node_modulesCapacitorCoreDistEsmWebMotionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return MotionPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return Motion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var MotionPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);

      function MotionPluginWeb() {
        var _this = _super.call(this, {
          name: 'Motion'
        }) || this;

        _this.registerWindowListener('devicemotion', 'accel');

        _this.registerWindowListener('deviceorientation', 'orientation');

        return _this;
      }

      return MotionPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Motion = new MotionPluginWeb(); //# sourceMappingURL=motion.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/network.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
    \**************************************************************/

  /*! exports provided: NetworkPluginWeb, Network */

  /***/
  function node_modulesCapacitorCoreDistEsmWebNetworkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return NetworkPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return Network;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var NetworkPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);

      function NetworkPluginWeb() {
        var _this = _super.call(this, {
          name: 'Network',
          platforms: ['web']
        }) || this;

        _this.listenerFunction = null;
        return _this;
      }

      NetworkPluginWeb.prototype.getStatus = function () {
        return new Promise(function (resolve, reject) {
          if (!window.navigator) {
            reject('Network info not available');
            return;
          }

          var connected = window.navigator.onLine;
          var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
          var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
          resolve({
            connected: connected,
            connectionType: connected ? connectionType : 'none'
          });
        });
      };

      NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
        var thisRef = this;
        var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
        var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
        var onlineBindFunc = listenerFunc.bind(thisRef, {
          connected: true,
          connectionType: connectionType
        });
        var offlineBindFunc = listenerFunc.bind(thisRef, {
          connected: false,
          connectionType: 'none'
        });

        if (eventName.localeCompare('networkStatusChange') === 0) {
          window.addEventListener('online', onlineBindFunc);
          window.addEventListener('offline', offlineBindFunc);
          return {
            remove: function remove() {
              window.removeEventListener('online', onlineBindFunc);
              window.removeEventListener('offline', offlineBindFunc);
            }
          };
        }
      };

      return NetworkPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Network = new NetworkPluginWeb(); //# sourceMappingURL=network.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/permissions.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
    \******************************************************************/

  /*! exports provided: PermissionsPluginWeb, Permissions */

  /***/
  function node_modulesCapacitorCoreDistEsmWebPermissionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return PermissionsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return Permissions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var PermissionsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);

      function PermissionsPluginWeb() {
        return _super.call(this, {
          name: 'Permissions'
        }) || this;
      }

      PermissionsPluginWeb.prototype.query = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var navigator, name, ret;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                navigator = window.navigator;

                if (!navigator.permissions) {
                  return [2
                  /*return*/
                  , Promise.reject('This browser does not support the Permissions API')];
                }

                name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                return [4
                /*yield*/
                , navigator.permissions.query({
                  name: name
                })];

              case 1:
                ret = _a.sent();
                return [2
                /*return*/
                , {
                  state: ret.state
                }];
            }
          });
        });
      };

      return PermissionsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Permissions = new PermissionsPluginWeb(); //# sourceMappingURL=permissions.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/share.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
    \************************************************************/

  /*! exports provided: SharePluginWeb, Share */

  /***/
  function node_modulesCapacitorCoreDistEsmWebShareJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return SharePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return Share;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var SharePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);

      function SharePluginWeb() {
        return _super.call(this, {
          name: 'Share',
          platforms: ['web']
        }) || this;
      }

      SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
          return Promise.reject('Web Share API not available');
        }

        return navigator.share({
          title: options.title,
          text: options.text,
          url: options.url
        });
      };

      return SharePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Share = new SharePluginWeb(); //# sourceMappingURL=share.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
    \********************************************************************/

  /*! exports provided: SplashScreenPluginWeb, SplashScreen */

  /***/
  function node_modulesCapacitorCoreDistEsmWebSplashScreenJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return SplashScreenPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return SplashScreen;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var SplashScreenPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);

      function SplashScreenPluginWeb() {
        return _super.call(this, {
          name: 'SplashScreen',
          platforms: ['web']
        }) || this;
      }

      SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
        return Promise.resolve();
      };

      SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
        return Promise.resolve();
      };

      return SplashScreenPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var SplashScreen = new SplashScreenPluginWeb(); //# sourceMappingURL=splash-screen.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/storage.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
    \**************************************************************/

  /*! exports provided: StoragePluginWeb, Storage */

  /***/
  function node_modulesCapacitorCoreDistEsmWebStorageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return StoragePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return Storage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var StoragePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);

      function StoragePluginWeb() {
        var _this = _super.call(this, {
          name: 'Storage',
          platforms: ['web']
        }) || this;

        _this.KEY_PREFIX = '_cap_';
        return _this;
      }

      StoragePluginWeb.prototype.get = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          resolve({
            value: window.localStorage.getItem(_this.makeKey(options.key))
          });
        });
      };

      StoragePluginWeb.prototype.set = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          window.localStorage.setItem(_this.makeKey(options.key), options.value);
          resolve();
        });
      };

      StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          window.localStorage.removeItem(_this.makeKey(options.key));
          resolve();
        });
      };

      StoragePluginWeb.prototype.keys = function () {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          resolve({
            keys: Object.keys(localStorage).filter(function (k) {
              return _this.isKey(k);
            }).map(function (k) {
              return _this.getKey(k);
            })
          });
        });
      };

      StoragePluginWeb.prototype.clear = function () {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          Object.keys(localStorage).filter(function (k) {
            return _this.isKey(k);
          }).forEach(function (k) {
            return window.localStorage.removeItem(k);
          });
          resolve();
        });
      };

      StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
      };

      StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
      };

      StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
      };

      return StoragePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Storage = new StoragePluginWeb(); //# sourceMappingURL=storage.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/toast.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
    \************************************************************/

  /*! exports provided: ToastPluginWeb, Toast */

  /***/
  function node_modulesCapacitorCoreDistEsmWebToastJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return ToastPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return Toast;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ToastPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);

      function ToastPluginWeb() {
        return _super.call(this, {
          name: 'Toast',
          platforms: ['web']
        }) || this;
      }

      ToastPluginWeb.prototype.show = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var duration, toast;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            duration = 2000;

            if (options.duration) {
              duration = options.duration === 'long' ? 3500 : 2000;
            }

            toast = document.createElement('pwa-toast');
            toast.duration = duration;
            toast.message = options.text;
            document.body.appendChild(toast);
            return [2
            /*return*/
            ];
          });
        });
      };

      return ToastPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Toast = new ToastPluginWeb(); //# sourceMappingURL=toast.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"presentPopover($event)\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"about-header\">\n    <!-- Instead of loading an image each time the select changes, use opacity to transition them -->\n    <div class=\"about-image madison\" [ngStyle]=\"location === 'madison' && {'opacity': '1'}\"></div>\n    <div class=\"about-image austin\" [ngStyle]=\"location === 'austin' && {'opacity': '1'}\"></div>\n    <div class=\"about-image chicago\" [ngStyle]=\"location === 'chicago' && {'opacity': '1'}\"></div>\n    <div class=\"about-image seattle\" [ngStyle]=\"location === 'seattle' && {'opacity': '1'}\"></div>\n  </div>\n\n  <div class=\"about-info\">\n    <h3 class=\"ion-padding-top ion-padding-start\">About</h3>\n\n    <p class=\"ion-padding-start ion-padding-end\">\n      The Ionic Conference is a one-day conference on {{ conferenceDate | date: 'mediumDate' }} featuring talks from the Ionic team. It is focused on Ionic applications being built with Ionic Framework. This includes migrating apps to the latest version of the framework, Angular concepts, Webpack, Sass, and many other technologies used in Ionic 2. Tickets are completely sold out, and we’re expecting more than 1000 developers – making this the largest Ionic conference ever!\n    </p>\n\n    <h3 class=\"ion-padding-top ion-padding-start\">Details</h3>\n\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label>\n          Location\n        </ion-label>\n        <ion-select [(ngModel)]=\"location\" [interfaceOptions]=\"selectOptions\">\n          <ion-select-option value=\"madison\">Madison, WI</ion-select-option>\n          <ion-select-option value=\"austin\">Austin, TX</ion-select-option>\n          <ion-select-option value=\"chicago\">Chicago, IL</ion-select-option>\n          <ion-select-option value=\"seattle\">Seattle, WA</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Date\n        </ion-label>\n        <ion-datetime\n          displayFormat=\"MMM DD, YYYY\"\n          max=\"2056\"\n          [(ngModel)]=\"conferenceDate\">\n        </ion-datetime>\n      </ion-item>\n    </ion-list>\n\n    <h3 class=\"ion-padding-top ion-padding-start\">Internet</h3>\n\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label>\n          Wifi network\n        </ion-label>\n        <ion-label class=\"ion-text-end\">\n          ica{{conferenceDate | date: 'y'}}\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-label class=\"ion-text-end\">\n          makegoodthings\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleFilterScheduleFilterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Sessions\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\n    <ion-list-header>Tracks</ion-list-header>\n\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\n      <ion-icon *ngIf=\"ios\" slot=\"start\" [name]=\"track.icon\" color=\"medium\"></ion-icon>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer translucent=\"true\" *ngIf=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleScheduleHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-segment *ngIf=\"ios\" [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\n      <ion-segment-button value=\"all\">\n        All\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Schedule</ion-title>\n    <ion-searchbar *ngIf=\"showSearchbar\" showCancelButton=\"always\" [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" (ionCancel)=\"showSearchbar = false\" placeholder=\"Search\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"presentFilter()\">\n        <span *ngIf=\"ios\">Filter</span>\n        <span *ngIf=\"!ios\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"!ios\">\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\n      <ion-segment-button value=\"all\">\n        All\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Schedule</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" placeholder=\"Search\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let group of groups\" [hidden]=\"group.hide\">\n      <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor=\"let session of group.sessions\" #slidingItem [attr.track]=\"session.tracks[0] | lowercase\"\n        [hidden]=\"session.hide\">\n        <ion-item routerLink=\"/app/tabs/schedule/session/{{session.id}}\">\n          <ion-label>\n            <h3>{{session.name}}</h3>\n            <p>\n              {{session.timeStart}} &mdash; {{session.timeEnd}}: {{session.location}}\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options>\n          <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\n            Favorite\n          </ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\"\n            *ngIf=\"segment === 'favorites'\">\n            Remove\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"shownSessions > 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button>\n      <ion-icon name=\"share-social\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"vimeo\" (click)=\"openSocial('Vimeo', fab)\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"instagram\" (click)=\"openSocial('Instagram', fab)\">\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"twitter\" (click)=\"openSocial('Twitter', fab)\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"facebook\" (click)=\"openSocial('Facebook', fab)\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionDetailSessionDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleFavorite()\">\n        <ion-icon *ngIf=\"!isFavorite\" slot=\"icon-only\" name=\"star-outline\"></ion-icon>\n        <ion-icon *ngIf=\"isFavorite\" slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"shareSession()\">\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"session\" class=\"ion-padding\">\n    <h1>{{session.name}}</h1>\n    <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\n    <p>{{session.description}}</p>\n    <ion-text color=\"medium\">\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\n      <br /> {{session.location}}\n    </ion-text>\n  </div>\n\n  <ion-list>\n    <ion-item (click)=\"sessionClick('watch')\" button>\n      <ion-label color=\"primary\">Watch</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('mark as unwatched')\" button>\n      <ion-label color=\"primary\">Mark as Unwatched</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('download video')\" button>\n      <ion-label color=\"primary\">Download Video</ion-label>\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"cloud-download\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('leave feedback')\" button>\n      <ion-label color=\"primary\">Leave Feedback</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerDetailSpeakerDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"speaker-detail\">\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\n      </ion-buttons>\n      <ion-buttons *ngIf=\"speaker\" slot=\"end\">\n        <ion-button (click)=\"openContact(speaker)\">\n          <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"openSpeakerShare(speaker)\">\n          <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"speaker-background\">\n    <img [src]=\"speaker?.profilePic\" [alt]=\"speaker?.name\">\n    <h2>{{speaker?.name}}</h2>\n  </div>\n\n  <div class=\"ion-padding speaker-detail\">\n    <p>{{speaker?.about}} Say hello on social media!</p>\n\n    <hr>\n\n    <ion-chip color=\"twitter\" button (click)=\"openExternalUrl('https://twitter.com/' + speaker.twitter)\">\n      <ion-icon name=\"logo-twitter\"></ion-icon>\n      <ion-label>Twitter</ion-label>\n    </ion-chip>\n\n    <ion-chip color=\"dark\" button (click)=\"openExternalUrl('https://github.com/ionic-team/ionic')\">\n      <ion-icon name=\"logo-github\"></ion-icon>\n      <ion-label>GitHub</ion-label>\n    </ion-chip>\n\n    <ion-chip color=\"instagram\" button (click)=\"openExternalUrl('https://instagram.com/ionicframework')\">\n      <ion-icon name=\"logo-instagram\"></ion-icon>\n      <ion-label>Instagram</ion-label>\n    </ion-chip>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerListSpeakerListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Speakers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Speakers</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let speaker of speakers\">\n        <ion-card class=\"speaker-card\">\n          <ion-card-header>\n            <ion-item detail=\"false\" lines=\"none\" class=\"speaker-item\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\n              <ion-avatar slot=\"start\">\n                <img [src]=\"speaker.profilePic\" [alt]=\"speaker.name + ' profile picture'\">\n              </ion-avatar>\n              <ion-label>\n                <h2>{{speaker.name}}</h2>\n                <p>{{speaker.title}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-list lines=\"none\">\n              <ion-item *ngFor=\"let session of speaker.sessions\" detail=\"false\" routerLink=\"/app/tabs/speakers/session/{{session.id}}\">\n                <ion-label>\n                  <h3>{{session.name}}</h3>\n                </ion-label>\n              </ion-item>\n\n              <ion-item detail=\"false\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\n                <ion-label>\n                  <h3>About {{speaker.name}}</h3>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Photo Gallery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Photo Gallery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\n      <ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\" (click)=\"showActionSheet(photo, position)\"></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"photoService.addNewToGallery()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsPageTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"schedule\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\">\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"location\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"camera\"></ion-icon>\n      <ion-label>Photos</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/pages/about-popover/about-popover.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/about-popover/about-popover.ts ***!
    \******************************************************/

  /*! exports provided: PopoverPage */

  /***/
  function srcAppPagesAboutPopoverAboutPopoverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
      return PopoverPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PopoverPage =
    /*#__PURE__*/
    function () {
      function PopoverPage(popoverCtrl) {
        _classCallCheck(this, PopoverPage);

        this.popoverCtrl = popoverCtrl;
      }

      _createClass(PopoverPage, [{
        key: "support",
        value: function support() {
          // this.app.getRootNavs()[0].push('/support');
          this.popoverCtrl.dismiss();
        }
      }, {
        key: "close",
        value: function close(url) {
          window.open(url, '_blank');
          this.popoverCtrl.dismiss();
        }
      }]);

      return PopoverPage;
    }();

    PopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <ion-list>\n      <ion-item button (click)=\"close('https://ionicframework.com/getting-started')\">\n        <ion-label>Learn Ionic</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://ionicframework.com/docs/')\">\n        <ion-label>Documentation</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://showcase.ionicframework.com')\">\n        <ion-label>Showcase</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"close('https://github.com/ionic-team/ionic')\">\n        <ion-label>GitHub Repo</ion-label>\n      </ion-item>\n      <ion-item button (click)=\"support()\">\n        <ion-label>Support</ion-label>\n      </ion-item>\n    </ion-list>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverPage);
    /***/
  },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about */
    "./src/app/pages/about/about.ts");

    var routes = [{
      path: '',
      component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];

    var AboutPageRoutingModule = function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    };

    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about */
    "./src/app/pages/about/about.ts");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/pages/about/about-routing.module.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]],
      declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
      entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
      bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
    })], AboutModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.scss":
  /*!****************************************!*\
    !*** ./src/app/pages/about/about.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVndXNrb3YvaW9uaWMvY29uZmVyZW5jZS9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBOzs7RUFHRSxjQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxVQUFBO0VBRUEsNkNBQUE7RUFBQSxxQ0FBQTtBQ05GOztBRFNBO0VBQ0Usb0RBQUE7QUNORjs7QURRQTtFQUNFLG1EQUFBO0FDTEY7O0FET0E7RUFDRSxvREFBQTtBQ0pGOztBRE1BO0VBQ0Usb0RBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUVBLDRCQUFBO0FDSkY7O0FET0E7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDSkY7O0FET0E7O0VBQUE7O0FBSUE7RUFDRSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5hYm91dC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmFib3V0LWhlYWRlciAubWFkaXNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZyk7XG59XG4uYWJvdXQtaGVhZGVyIC5hdXN0aW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZyk7XG59XG4uYWJvdXQtaGVhZGVyIC5jaGljYWdvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcbn1cbi5hYm91dC1oZWFkZXIgLnNlYXR0bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGcpO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcbn1cblxuLmFib3V0LWluZm8gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBwIHtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuLypcbiAqIGlPUyBPbmx5XG4gKi9cblxuLmlvcyAuYWJvdXQtaW5mbyB7XG4gIC0taW9uLXBhZGRpbmc6IDE5cHg7XG59XG5cbi5pb3MgLmFib3V0LWluZm8gaDMge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuIiwiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uYWJvdXQtaGVhZGVyIC5tYWRpc29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5jaGljYWdvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuc2VhdHRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZyk7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xufVxuXG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuLypcbiAqIGlPUyBPbmx5XG4gKi9cbi5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/about/about.ts ***!
    \**************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppPagesAboutAboutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");

    var AboutPage =
    /*#__PURE__*/
    function () {
      function AboutPage(popoverCtrl) {
        _classCallCheck(this, AboutPage);

        this.popoverCtrl = popoverCtrl;
        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
          header: 'Select a Location'
        };
      }

      _createClass(AboutPage, [{
        key: "presentPopover",
        value: function presentPopover(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverCtrl.create({
                      component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                      event: event
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AboutPage;
    }();

    AboutPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.scss */
      "./src/app/pages/about/about.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], AboutPage);
    /***/
  },

  /***/
  "./src/app/pages/map/map-dark-style.js":
  /*!*********************************************!*\
    !*** ./src/app/pages/map/map-dark-style.js ***!
    \*********************************************/

  /*! exports provided: darkStyle */

  /***/
  function srcAppPagesMapMapDarkStyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "darkStyle", function () {
      return darkStyle;
    });

    var darkStyle = [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#242f3e"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#746855"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#242f3e"
      }]
    }, {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#263c3f"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#6b9a76"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#38414e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#212a37"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9ca5b3"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#746855"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#1f2835"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#f3d19c"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#2f3948"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#17263c"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#515c6d"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#17263c"
      }]
    }];
    /***/
  },

  /***/
  "./src/app/pages/map/map-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/map/map-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MapPageRoutingModule */

  /***/
  function srcAppPagesMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
      return MapPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");

    var routes = [{
      path: '',
      component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }];

    var MapPageRoutingModule = function MapPageRoutingModule() {
      _classCallCheck(this, MapPageRoutingModule);
    };

    MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/map/map.module.ts ***!
    \*****************************************/

  /*! exports provided: MapModule */

  /***/
  function srcAppPagesMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModule", function () {
      return MapModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");
    /* harmony import */


    var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-routing.module */
    "./src/app/pages/map/map-routing.module.ts");

    var MapModule = function MapModule() {
      _classCallCheck(this, MapModule);
    };

    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
      declarations: [_map__WEBPACK_IMPORTED_MODULE_4__["MapPage"]]
    })], MapModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.scss":
  /*!************************************!*\
    !*** ./src/app/pages/map/map.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapMapScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVndXNrb3YvaW9uaWMvY29uZmVyZW5jZS9zcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufVxuIiwiLm1hcC1jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/map/map.ts":
  /*!**********************************!*\
    !*** ./src/app/pages/map/map.ts ***!
    \**********************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppPagesMapMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _map_dark_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-dark-style */
    "./src/app/pages/map/map-dark-style.js");

    var MapPage =
    /*#__PURE__*/
    function () {
      function MapPage(doc, confData, platform) {
        _classCallCheck(this, MapPage);

        this.doc = doc;
        this.confData = confData;
        this.platform = platform;
      }

      _createClass(MapPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var appEl, isDark, style, googleMaps, map, observer;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    appEl = this.doc.querySelector('ion-app');
                    isDark = false;
                    style = [];

                    if (appEl.classList.contains('dark-theme')) {
                      style = _map_dark_style__WEBPACK_IMPORTED_MODULE_5__["darkStyle"];
                    }

                    _context2.next = 6;
                    return getGoogleMaps('AIzaSyB8pf6ZdFQj5qw7rc_HSGrhUwQKfIe9ICw');

                  case 6:
                    googleMaps = _context2.sent;
                    this.confData.getMap().subscribe(function (mapData) {
                      var mapEle = _this2.mapElement.nativeElement;
                      map = new googleMaps.Map(mapEle, {
                        center: mapData.find(function (d) {
                          return d.center;
                        }),
                        zoom: 16,
                        styles: style
                      });
                      mapData.forEach(function (markerData) {
                        var infoWindow = new googleMaps.InfoWindow({
                          content: "<h5>".concat(markerData.name, "</h5>")
                        });
                        var marker = new googleMaps.Marker({
                          position: markerData,
                          map: map,
                          title: markerData.name
                        });
                        marker.addListener('click', function () {
                          infoWindow.open(map, marker);
                        });
                      });
                      googleMaps.event.addListenerOnce(map, 'idle', function () {
                        mapEle.classList.add('show-map');
                      });
                    });
                    observer = new MutationObserver(function (mutations) {
                      mutations.forEach(function (mutation) {
                        if (mutation.attributeName === 'class') {
                          var el = mutation.target;
                          isDark = el.classList.contains('dark-theme');

                          if (map && isDark) {
                            map.setOptions({
                              styles: _map_dark_style__WEBPACK_IMPORTED_MODULE_5__["darkStyle"]
                            });
                          } else if (map) {
                            map.setOptions({
                              styles: []
                            });
                          }
                        }
                      });
                    });
                    observer.observe(appEl, {
                      attributes: true
                    });

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.scss */
      "./src/app/pages/map/map.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], MapPage);

    function getGoogleMaps(apiKey) {
      var win = window;
      var googleModule = win.google;

      if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
      }

      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&v=3.31");
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = function () {
          var googleModule2 = win.google;

          if (googleModule2 && googleModule2.maps) {
            resolve(googleModule2.maps);
          } else {
            reject('google maps not available');
          }
        };
      });
    }
    /***/

  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Material Design\n */\n.md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n.md ion-list {\n  background: inherit;\n}\n/*\n * iOS\n */\n.ios ion-list-header {\n  margin-top: 10px;\n}\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVndXNrb3YvaW9uaWMvY29uZmVyZW5jZS9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBSUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0FDQUY7QURHQTtFQUNFLG1CQUFBO0FDQUY7QURJQTs7RUFBQTtBQUlBO0VBQ0UsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsK0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBNYXRlcmlhbCBEZXNpZ25cbiAqL1xuXG4ubWQgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLm1kIGlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuXG4vKlxuICogaU9TXG4gKi9cblxuLmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW9zIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iLCIvKlxuICogTWF0ZXJpYWwgRGVzaWduXG4gKi9cbi5tZCBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4ubWQgaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4vKlxuICogaU9TXG4gKi9cbi5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmlvcyBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
    \**********************************************************/

  /*! exports provided: ScheduleFilterPage */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function () {
      return ScheduleFilterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var ScheduleFilterPage =
    /*#__PURE__*/
    function () {
      function ScheduleFilterPage(confData, config, modalCtrl, navParams) {
        _classCallCheck(this, ScheduleFilterPage);

        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
      }

      _createClass(ScheduleFilterPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          this.ios = this.config.get('mode') === "ios"; // passed in array of track names that should be excluded (unchecked)

          var excludedTrackNames = this.navParams.get('excludedTracks');
          this.confData.getTracks().subscribe(function (tracks) {
            tracks.forEach(function (track) {
              _this3.tracks.push({
                name: track.name,
                icon: track.icon,
                isChecked: excludedTrackNames.indexOf(track.name) === -1
              });
            });
          });
        }
      }, {
        key: "selectAll",
        value: function selectAll(check) {
          // set all to checked or unchecked
          this.tracks.forEach(function (track) {
            track.isChecked = check;
          });
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          // Pass back a new array of track names to exclude
          var excludedTrackNames = this.tracks.filter(function (c) {
            return !c.isChecked;
          }).map(function (c) {
            return c.name;
          });
          this.dismiss(excludedTrackNames);
        }
      }, {
        key: "dismiss",
        value: function dismiss(data) {
          // using the injected ModalController this page
          // can "dismiss" itself and pass back data
          this.modalCtrl.dismiss(data);
        }
      }]);

      return ScheduleFilterPage;
    }();

    ScheduleFilterPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    ScheduleFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule-filter.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule-filter.scss */
      "./src/app/pages/schedule-filter/schedule-filter.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ScheduleFilterPage);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SchedulePageRoutingModule */

  /***/
  function srcAppPagesScheduleScheduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function () {
      return SchedulePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: '',
      component: _schedule__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }];

    var SchedulePageRoutingModule = function SchedulePageRoutingModule() {
      _classCallCheck(this, SchedulePageRoutingModule);
    };

    SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SchedulePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/schedule/schedule.module.ts ***!
    \***************************************************/

  /*! exports provided: ScheduleModule */

  /***/
  function srcAppPagesScheduleScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleModule", function () {
      return ScheduleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./schedule-routing.module */
    "./src/app/pages/schedule/schedule-routing.module.ts");

    var ScheduleModule = function ScheduleModule() {
      _classCallCheck(this, ScheduleModule);
    };

    ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["SchedulePageRoutingModule"]],
      declarations: [_schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"], _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]],
      entryComponents: [_schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]]
    })], ScheduleModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/schedule/schedule.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleScheduleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n * Material Design uses the ripple for activated\n * so only style the iOS activated background\n */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVndXNrb3YvaW9uaWMvY29uZmVyZW5jZS9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFFQSwwQ0FBQTtBQ0FGOztBREdBOzs7RUFBQTs7QUFJQTtFQUNFLDBEQUFBO0FDQUY7O0FEaUJFO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRFlFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRE9FO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBREVFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREhFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ01KOztBRFJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ1dKOztBRGJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURsQkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDcUJKOztBRHZCRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUMwQko7O0FENUJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQytCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcblxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcbiAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxuICovXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbn1cblxuJGNhdGVnb3JpZXM6IChcbiAgaW9uaWM6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcbiAgYW5ndWxhcjogI2FjMjgyYixcbiAgY29tbXVuaWNhdGlvbjogIzhlOGQ5MyxcbiAgdG9vbGluZzogI2ZlNGM1MixcbiAgc2VydmljZXM6ICNmZDhiMmQsXG4gIGRlc2lnbjogI2ZlZDAzNSxcbiAgd29ya3Nob3A6ICM2OWJiN2IsXG4gIGZvb2Q6ICMzYmM3YzQsXG4gIGRvY3VtZW50YXRpb246ICNiMTZiZTMsXG4gIG5hdmlnYXRpb246ICM2NjAwY2Ncbik7XG5cbkBlYWNoICR0cmFjaywgJHZhbHVlIGluIG1hcC1yZW1vdmUoJGNhdGVnb3JpZXMpIHtcbiAgaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz0nI3skdHJhY2t9J10gaW9uLWxhYmVsIHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbiIsImlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNmZmYpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcbiAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxuICovXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1pb25pY10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1hbmd1bGFyXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNhYzI4MmI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1jb21tdW5pY2F0aW9uXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM4ZThkOTM7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz10b29saW5nXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZTRjNTI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1zZXJ2aWNlc10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmQ4YjJkO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZGVzaWduXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZWQwMzU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz13b3Jrc2hvcF0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjliYjdiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Zm9vZF0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjM2JjN2M0O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZG9jdW1lbnRhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYjE2YmUzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9bmF2aWdhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjYwMGNjO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/schedule/schedule.ts ***!
    \********************************************/

  /*! exports provided: SchedulePage */

  /***/
  function srcAppPagesScheduleScheduleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePage", function () {
      return SchedulePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SchedulePage =
    /*#__PURE__*/
    function () {
      function SchedulePage(alertCtrl, confData, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config) {
        _classCallCheck(this, SchedulePage);

        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
      }

      _createClass(SchedulePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateSchedule();
          this.ios = this.config.get('mode') === 'ios';
        }
      }, {
        key: "updateSchedule",
        value: function updateSchedule() {
          var _this4 = this;

          // Close any open sliding items when the schedule updates
          if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
          }

          this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this4.shownSessions = data.shownSessions;
            _this4.groups = data.groups;
          });
        }
      }, {
        key: "presentFilter",
        value: function presentFilter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var modal, _ref, data;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__["ScheduleFilterPage"],
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl,
                      componentProps: {
                        excludedTracks: this.excludeTracks
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    _context3.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _ref = _context3.sent;
                    data = _ref.data;

                    if (data) {
                      this.excludeTracks = data;
                      this.updateSchedule();
                    }

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addFavorite",
        value: function addFavorite(slidingItem, sessionData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.user.hasFavorite(sessionData.name)) {
                      _context4.next = 4;
                      break;
                    }

                    // Prompt to remove favorite
                    this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
                    _context4.next = 11;
                    break;

                  case 4:
                    // Add as a favorite
                    this.user.addFavorite(sessionData.name); // Close the open item

                    slidingItem.close(); // Create a toast

                    _context4.next = 8;
                    return this.toastCtrl.create({
                      header: "".concat(sessionData.name, " was successfully added as a favorite."),
                      duration: 3000,
                      buttons: [{
                        text: 'Close',
                        role: 'cancel'
                      }]
                    });

                  case 8:
                    toast = _context4.sent;
                    _context4.next = 11;
                    return toast.present();

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(slidingItem, sessionData, title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      message: 'Would you like to remove this session from your favorites?',
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler() {
                          // they clicked the cancel button, do not remove the session
                          // close the sliding item and hide the option buttons
                          slidingItem.close();
                        }
                      }, {
                        text: 'Remove',
                        handler: function handler() {
                          // they want to remove this session from their favorites
                          _this5.user.removeFavorite(sessionData.name);

                          _this5.updateSchedule(); // close the sliding item and hide the option buttons


                          slidingItem.close();
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "openSocial",
        value: function openSocial(network, fab) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingCtrl.create({
                      message: "Posting to ".concat(network),
                      duration: Math.random() * 1000 + 500
                    });

                  case 2:
                    loading = _context6.sent;
                    _context6.next = 5;
                    return loading.present();

                  case 5:
                    _context6.next = 7;
                    return loading.onWillDismiss();

                  case 7:
                    fab.close();

                  case 8:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return SchedulePage;
    }();

    SchedulePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleList', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.scss */
      "./src/app/pages/schedule/schedule.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]])], SchedulePage);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SessionDetailPageRoutingModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function () {
      return SessionDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");

    var routes = [{
      path: '',
      component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }];

    var SessionDetailPageRoutingModule = function SessionDetailPageRoutingModule() {
      _classCallCheck(this, SessionDetailPageRoutingModule);
    };

    SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SessionDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SessionDetailModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function () {
      return SessionDetailModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");
    /* harmony import */


    var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session-detail-routing.module */
    "./src/app/pages/session-detail/session-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SessionDetailModule = function SessionDetailModule() {
      _classCallCheck(this, SessionDetailModule);
    };

    SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]],
      declarations: [_session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]]
    })], SessionDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSessionDetailSessionDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n/* Favorite Icon\n * --------------------------------------------------------\n */\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty,\n.icon-heart {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\n.icon-heart-empty {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.icon-heart {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\nh1 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVndXNrb3YvaW9uaWMvY29uZmVyZW5jZS9zcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBREVBOztFQUFBOztBQUlBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTs7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLFFBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsZ0RBQUE7RUFBQSx3Q0FBQTtFQUFBLGdDQUFBO0VBQUEsOERBQUE7QUNMRjs7QURRQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLFNBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vzc2lvbi10cmFjay1pb25pYyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWFuZ3VsYXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWFuZ3VsYXIpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1jb21tdW5pY2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb21tdW5pY2F0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stdG9vbGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9vbGluZyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXNlcnZpY2VzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZXJ2aWNlcyk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRlc2lnbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVzaWduKTtcbn1cblxuLnNlc3Npb24tdHJhY2std29ya3Nob3Age1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdvcmtzaG9wKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZm9vZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm9vZCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWRvY3VtZW50YXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRvY3VtZW50YXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay1uYXZpZ2F0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1uYXZpZ2F0aW9uKTtcbn1cblxuLyogRmF2b3JpdGUgSWNvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4uc2hvdy1mYXZvcml0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24taGVhcnQtZW1wdHksXG4uaWNvbi1oZWFydCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuXG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG5cbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydC1lbXB0eSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xufSIsIi5zZXNzaW9uLXRyYWNrLWlvbmljIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNlc3Npb24tdHJhY2stYW5ndWxhciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYW5ndWxhcik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWNvbW11bmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbW11bmljYXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay10b29saW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10b29saW5nKTtcbn1cblxuLnNlc3Npb24tdHJhY2stc2VydmljZXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlcnZpY2VzKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZGVzaWduIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZXNpZ24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay13b3Jrc2hvcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd29ya3Nob3ApO1xufVxuXG4uc2Vzc2lvbi10cmFjay1mb29kIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb29kKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZG9jdW1lbnRhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZG9jdW1lbnRhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLW5hdmlnYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hdmlnYXRpb24pO1xufVxuXG4vKiBGYXZvcml0ZSBJY29uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uc2hvdy1mYXZvcml0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24taGVhcnQtZW1wdHksXG4uaWNvbi1oZWFydCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmljb24taGVhcnQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.ts ***!
    \********************************************************/

  /*! exports provided: SessionDetailPage */

  /***/
  function srcAppPagesSessionDetailSessionDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function () {
      return SessionDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SessionDetailPage =
    /*#__PURE__*/
    function () {
      function SessionDetailPage(dataProvider, userProvider, route) {
        _classCallCheck(this, SessionDetailPage);

        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
      }

      _createClass(SessionDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this6 = this;

          this.dataProvider.load().subscribe(function (data) {
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
              var sessionId = _this6.route.snapshot.paramMap.get('sessionId');

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = data.schedule[0].groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var group = _step.value;

                  if (group && group.sessions) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                      for (var _iterator2 = group.sessions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var session = _step2.value;

                        if (session && session.id === sessionId) {
                          _this6.session = session;
                          _this6.isFavorite = _this6.userProvider.hasFavorite(_this6.session.name);
                          break;
                        }
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.defaultHref = "/app/tabs/schedule";
        }
      }, {
        key: "sessionClick",
        value: function sessionClick(item) {
          console.log('Clicked', item);
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite() {
          if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
          } else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
          }
        }
      }, {
        key: "shareSession",
        value: function shareSession() {
          console.log('Clicked share session');
        }
      }]);

      return SessionDetailPage;
    }();

    SessionDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-session-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./session-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./session-detail.scss */
      "./src/app/pages/session-detail/session-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SessionDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SpeakerDetailPageRoutingModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function () {
      return SpeakerDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");

    var routes = [{
      path: '',
      component: _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]
    }];

    var SpeakerDetailPageRoutingModule = function SpeakerDetailPageRoutingModule() {
      _classCallCheck(this, SpeakerDetailPageRoutingModule);
    };

    SpeakerDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SpeakerDetailModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function () {
      return SpeakerDetailModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");
    /* harmony import */


    var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-detail-routing.module */
    "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SpeakerDetailModule = function SpeakerDetailModule() {
      _classCallCheck(this, SpeakerDetailModule);
    };

    SpeakerDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerDetailPageRoutingModule"]],
      declarations: [_speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]]
    })], SpeakerDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Speaker Background\n */\nion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n.speaker-background {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n.speaker-background img {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n.speaker-background h2 {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n.md .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.ios .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n/*\n * Speaker Details\n */\n.speaker-detail p {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.speaker-detail hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVndXNrb3YvaW9uaWMvY29uZmVyZW5jZS9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFJQTtFQUNFLGtCQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0FDRkY7QURLQTs7O0VBR0UsY0FBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUVBLHFDQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFFQSw4Q0FBQTtFQUVBLDBFQUFBO0FDUkY7QURXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FDUkY7QURXQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUVBLFlBQUE7QUNWRjtBRGFBO0VBQ0UseUhBQUE7QUNWRjtBRGFBO0VBQ0UsNENBQUE7QUNWRjtBRGFBOztFQUFBO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDWEY7QURjQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSw4Q0FBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTcGVha2VyIEJhY2tncm91bmRcbiAqL1xuXG5pb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZGlzcGxheTogZmxleDtcblxuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApO1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVpZ2h0OiBjYWxjKDI1MHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcblxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0O1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGJvdHRvbTogMTBweDtcblxuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZCAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcbn1cblxuLmlvcyAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XG59XG5cbi8qXG4gKiBTcGVha2VyIERldGFpbHNcbiAqL1xuXG4uc3BlYWtlci1kZXRhaWwgcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uc3BlYWtlci1kZXRhaWwgaHIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG4iLCIvKlxuICogU3BlYWtlciBCYWNrZ3JvdW5kXG4gKi9cbmlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBjYWxjKDI1MHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybCgvYXNzZXRzL2ltZy9zcGVha2VyLWJhY2tncm91bmQucG5nKSBuby1yZXBlYXQ7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQgaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWQgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG59XG5cbi5pb3MgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuXG4vKlxuICogU3BlYWtlciBEZXRhaWxzXG4gKi9cbi5zcGVha2VyLWRldGFpbCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5zcGVha2VyLWRldGFpbCBociB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
    \********************************************************/

  /*! exports provided: SpeakerDetailPage */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function () {
      return SpeakerDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var SpeakerDetailPage =
    /*#__PURE__*/
    function () {
      function SpeakerDetailPage(dataProvider, route, actionSheetCtrl, confData, inAppBrowser) {
        _classCallCheck(this, SpeakerDetailPage);

        this.dataProvider = dataProvider;
        this.route = route;
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
      }

      _createClass(SpeakerDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this7 = this;

          this.dataProvider.load().subscribe(function (data) {
            var speakerId = _this7.route.snapshot.paramMap.get('speakerId');

            if (data && data.speakers) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = data.speakers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var speaker = _step3.value;

                  if (speaker && speaker.id === speakerId) {
                    _this7.speaker = speaker;
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "openExternalUrl",
        value: function openExternalUrl(url) {
          this.inAppBrowser.create(url, '_blank');
        }
      }, {
        key: "openSpeakerShare",
        value: function openSpeakerShare(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Share ' + speaker.name,
                      buttons: [{
                        text: 'Copy Link',
                        handler: function handler() {
                          console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);

                          if (window.cordova && window.cordova.plugins.clipboard) {
                            window.cordova.plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                          }
                        }
                      }, {
                        text: 'Share via ...'
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context7.sent;
                    _context7.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openContact",
        value: function openContact(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var mode, actionSheet;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    mode = 'ios'; // this.config.get('mode');

                    _context8.next = 3;
                    return this.actionSheetCtrl.create({
                      header: 'Contact ' + speaker.name,
                      buttons: [{
                        text: "Email ( ".concat(speaker.email, " )"),
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: function handler() {
                          window.open('mailto:' + speaker.email);
                        }
                      }, {
                        text: "Call ( ".concat(speaker.phone, " )"),
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: function handler() {
                          window.open('tel:' + speaker.phone);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 3:
                    actionSheet = _context8.sent;
                    _context8.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return SpeakerDetailPage;
    }();

    SpeakerDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
      }];
    };

    SpeakerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-detail.scss */
      "./src/app/pages/speaker-detail/speaker-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])], SpeakerDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SpeakerListPageRoutingModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPageRoutingModule", function () {
      return SpeakerListPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");

    var routes = [{
      path: '',
      component: _speaker_list__WEBPACK_IMPORTED_MODULE_3__["SpeakerListPage"]
    }];

    var SpeakerListPageRoutingModule = function SpeakerListPageRoutingModule() {
      _classCallCheck(this, SpeakerListPageRoutingModule);
    };

    SpeakerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: SpeakerListModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListModule", function () {
      return SpeakerListModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _speaker_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");
    /* harmony import */


    var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./speaker-list-routing.module */
    "./src/app/pages/speaker-list/speaker-list-routing.module.ts");

    var SpeakerListModule = function SpeakerListModule() {
      _classCallCheck(this, SpeakerListModule);
    };

    SpeakerListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerListPageRoutingModule"]],
      declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPage"]]
    })], SpeakerListModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerListSpeakerListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".speaker-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n/* Due to the fact the cards are inside of columns the margins don't overlap\n * properly so we want to remove the extra margin between cards\n */\n\nion-col:not(:last-of-type) .speaker-card {\n  margin-bottom: 0;\n}\n\n.speaker-card .speaker-item {\n  --min-height: 85px;\n}\n\n.speaker-card .speaker-item h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card .speaker-item p {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-content {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVndXNrb3YvaW9uaWMvY29uZmVyZW5jZS9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FERUE7O0VBQUE7O0FBR0E7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUVBLFVBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSx3REFBQTtFQUVBLFVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVha2VyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBEdWUgdG8gdGhlIGZhY3QgdGhlIGNhcmRzIGFyZSBpbnNpZGUgb2YgY29sdW1ucyB0aGUgbWFyZ2lucyBkb24ndCBvdmVybGFwXG4gKiBwcm9wZXJseSBzbyB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZXh0cmEgbWFyZ2luIGJldHdlZW4gY2FyZHNcbiAqL1xuaW9uLWNvbDpub3QoOmxhc3Qtb2YtdHlwZSkgLnNwZWFrZXItY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSB7XG4gIC0tbWluLWhlaWdodDogODVweDtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcblxuICBwYWRkaW5nOiAwO1xufVxuXG4uaW9zIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG5cbiAgcGFkZGluZzogMDtcbn0iLCIuc3BlYWtlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogRHVlIHRvIHRoZSBmYWN0IHRoZSBjYXJkcyBhcmUgaW5zaWRlIG9mIGNvbHVtbnMgdGhlIG1hcmdpbnMgZG9uJ3Qgb3ZlcmxhcFxuICogcHJvcGVybHkgc28gd2Ugd2FudCB0byByZW1vdmUgdGhlIGV4dHJhIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXG4gKi9cbmlvbi1jb2w6bm90KDpsYXN0LW9mLXR5cGUpIC5zcGVha2VyLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IDg1cHg7XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pb3MgaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWQgaW9uLWxpc3Qge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgcGFkZGluZzogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
    \****************************************************/

  /*! exports provided: SpeakerListPage */

  /***/
  function srcAppPagesSpeakerListSpeakerListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPage", function () {
      return SpeakerListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var SpeakerListPage =
    /*#__PURE__*/
    function () {
      function SpeakerListPage(confData) {
        _classCallCheck(this, SpeakerListPage);

        this.confData = confData;
        this.speakers = [];
      }

      _createClass(SpeakerListPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this8 = this;

          this.confData.getSpeakers().subscribe(function (speakers) {
            _this8.speakers = speakers;
          });
        }
      }]);

      return SpeakerListPage;
    }();

    SpeakerListPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }];
    };

    SpeakerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-list.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-list.scss */
      "./src/app/pages/speaker-list/speaker-list.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]])], SpeakerListPage);
    /***/
  },

  /***/
  "./src/app/pages/tab2/tab2.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab2/tab2.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppPagesTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/pages/tab2/tab2.page.ts"); // import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], // ExploreContainerComponentModule,
      _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/pages/tab2/tab2.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab2/tab2.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGVndXNrb3YvaW9uaWMvY29uZmVyZW5jZS9zcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cbiIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tab2/tab2.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tab2/tab2.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppPagesTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/photo.service */
    "./src/app/services/photo.service.ts");

    var Tab2Page =
    /*#__PURE__*/
    function () {
      function Tab2Page(photoService, actionSheetController) {
        _classCallCheck(this, Tab2Page);

        this.photoService = photoService;
        this.actionSheetController = actionSheetController;
      }

      _createClass(Tab2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photoService.loadSaved();
        }
      }, {
        key: "showActionSheet",
        value: function showActionSheet(photo, position) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this9 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.actionSheetController.create({
                      header: 'Photos',
                      buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this9.photoService.deletePicture(photo, position);
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {// Nothing to do, action sheet is automatically closed
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context9.sent;
                    _context9.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }];
    };

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/pages/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])], Tab2Page);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPagesTabsPageTabsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule/schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'schedule',
        children: [{
          path: '',
          component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"]
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }]
      }, {
        path: 'speakers',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-list/speaker-list.module */
            "./src/app/pages/speaker-list/speaker-list.module.ts")).then(function (m) {
              return m.SpeakerListModule;
            });
          }
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }, {
          path: 'speaker-details/:speakerId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-detail/speaker-detail.module */
            "./src/app/pages/speaker-detail/speaker-detail.module.ts")).then(function (m) {
              return m.SpeakerDetailModule;
            });
          }
        }]
      }, {
        path: 'map',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../map/map.module */
            "./src/app/pages/map/map.module.ts")).then(function (m) {
              return m.MapModule;
            });
          }
        }]
      }, {
        path: 'about',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../about/about.module */
            "./src/app/pages/about/about.module.ts")).then(function (m) {
              return m.AboutModule;
            });
          }
        }]
      }, {
        path: 'tab2',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "./src/app/pages/tab2/tab2.module.ts")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: TabsModule */

  /***/
  function srcAppPagesTabsPageTabsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
      return TabsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-page-routing.module */
    "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
    /* harmony import */


    var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about/about.module */
    "./src/app/pages/about/about.module.ts");
    /* harmony import */


    var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../map/map.module */
    "./src/app/pages/map/map.module.ts");
    /* harmony import */


    var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../schedule/schedule.module */
    "./src/app/pages/schedule/schedule.module.ts");
    /* harmony import */


    var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../session-detail/session-detail.module */
    "./src/app/pages/session-detail/session-detail.module.ts");
    /* harmony import */


    var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../speaker-detail/speaker-detail.module */
    "./src/app/pages/speaker-detail/speaker-detail.module.ts");
    /* harmony import */


    var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../speaker-list/speaker-list.module */
    "./src/app/pages/speaker-list/speaker-list.module.ts");
    /* harmony import */


    var _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../tab2/tab2.module */
    "./src/app/pages/tab2/tab2.module.ts");

    var TabsModule = function TabsModule() {
      _classCallCheck(this, TabsModule);
    };

    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"], _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__["ScheduleModule"], _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__["SessionDetailModule"], _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__["SpeakerDetailModule"], _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__["SpeakerListModule"], _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"], _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_12__["Tab2PageModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"]]
    })], TabsModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
    \**********************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPagesTabsPageTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs-page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
    })], TabsPage);
    /***/
  },

  /***/
  "./src/app/providers/conference-data.ts":
  /*!**********************************************!*\
    !*** ./src/app/providers/conference-data.ts ***!
    \**********************************************/

  /*! exports provided: ConferenceData */

  /***/
  function srcAppProvidersConferenceDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConferenceData", function () {
      return ConferenceData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-data */
    "./src/app/providers/user-data.ts");

    var ConferenceData =
    /*#__PURE__*/
    function () {
      function ConferenceData(http, user) {
        _classCallCheck(this, ConferenceData);

        this.http = http;
        this.user = user;
      }

      _createClass(ConferenceData, [{
        key: "load",
        value: function load() {
          if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
          } else {
            return this.http.get('assets/data/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
          }
        }
      }, {
        key: "processData",
        value: function processData(data) {
          var _this10 = this;

          // just some good 'ol JS fun with objects and arrays
          // build up the data by linking speakers to sessions
          this.data = data; // loop through each day in the schedule

          this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
              // loop through each session in the timeline group
              group.sessions.forEach(function (session) {
                session.speakers = [];

                if (session.speakerNames) {
                  session.speakerNames.forEach(function (speakerName) {
                    var speaker = _this10.data.speakers.find(function (s) {
                      return s.name === speakerName;
                    });

                    if (speaker) {
                      session.speakers.push(speaker);
                      speaker.sessions = speaker.sessions || [];
                      speaker.sessions.push(session);
                    }
                  });
                }
              });
            });
          });
          return this.data;
        }
      }, {
        key: "getTimeline",
        value: function getTimeline(dayIndex) {
          var _this11 = this;

          var queryText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var excludeTracks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var segment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'all';
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) {
              return !!w.trim().length;
            });
            day.groups.forEach(function (group) {
              group.hide = true;
              group.sessions.forEach(function (session) {
                // check if this session should show or not
                _this11.filterSession(session, queryWords, excludeTracks, segment);

                if (!session.hide) {
                  // if this session is not hidden then this group should show
                  group.hide = false;
                  day.shownSessions++;
                }
              });
            });
            return day;
          }));
        }
      }, {
        key: "filterSession",
        value: function filterSession(session, queryWords, excludeTracks, segment) {
          var matchesQueryText = false;

          if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
              if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                matchesQueryText = true;
              }
            });
          } else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
          } // if any of the sessions tracks are not in the
          // exclude tracks then this session passes the track test


          var matchesTracks = false;
          session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
              matchesTracks = true;
            }
          }); // if the segment is 'favorites', but session is not a user favorite
          // then this session does not pass the segment test

          var matchesSegment = false;

          if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
              matchesSegment = true;
            }
          } else {
            matchesSegment = true;
          } // all tests must be true if it should not be hidden


          session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
        }
      }, {
        key: "getSpeakers",
        value: function getSpeakers() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.speakers.sort(function (a, b) {
              var aName = a.name.split(' ').pop();
              var bName = b.name.split(' ').pop();
              return aName.localeCompare(bName);
            });
          }));
        }
      }, {
        key: "getTracks",
        value: function getTracks() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.tracks.sort();
          }));
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.map;
          }));
        }
      }]);

      return ConferenceData;
    }();

    ConferenceData.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }];
    };

    ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])], ConferenceData);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        Camera = _capacitor_core__WEBP.Camera,
        Filesystem = _capacitor_core__WEBP.Filesystem,
        Storage = _capacitor_core__WEBP.Storage;

    var PhotoService =
    /*#__PURE__*/
    function () {
      function PhotoService(platform) {
        _classCallCheck(this, PhotoService);

        this.photos = [];
        this.PHOTO_STORAGE = "photos";

        this.convertBlobToBase64 = function (blob) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(blob);
          });
        };

        this.platform = platform;
      }

      _createClass(PhotoService, [{
        key: "loadSaved",
        value: function loadSaved() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var photos, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, photo, readFile;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return Storage.get({
                      key: this.PHOTO_STORAGE
                    });

                  case 2:
                    photos = _context10.sent;
                    this.photos = JSON.parse(photos.value) || []; // If running on the web...

                    if (this.platform.is('hybrid')) {
                      _context10.next = 33;
                      break;
                    }

                    // Display the photo by reading into base64 format
                    _iteratorNormalCompletion4 = true;
                    _didIteratorError4 = false;
                    _iteratorError4 = undefined;
                    _context10.prev = 8;
                    _iterator4 = this.photos[Symbol.iterator]();

                  case 10:
                    if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                      _context10.next = 19;
                      break;
                    }

                    photo = _step4.value;
                    _context10.next = 14;
                    return Filesystem.readFile({
                      path: photo.filepath,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 14:
                    readFile = _context10.sent;
                    // Web platform only: Save the photo into the base64 field
                    photo.base64 = "data:image/jpeg;base64,".concat(readFile.data);

                  case 16:
                    _iteratorNormalCompletion4 = true;
                    _context10.next = 10;
                    break;

                  case 19:
                    _context10.next = 25;
                    break;

                  case 21:
                    _context10.prev = 21;
                    _context10.t0 = _context10["catch"](8);
                    _didIteratorError4 = true;
                    _iteratorError4 = _context10.t0;

                  case 25:
                    _context10.prev = 25;
                    _context10.prev = 26;

                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                      _iterator4.return();
                    }

                  case 28:
                    _context10.prev = 28;

                    if (!_didIteratorError4) {
                      _context10.next = 31;
                      break;
                    }

                    throw _iteratorError4;

                  case 31:
                    return _context10.finish(28);

                  case 32:
                    return _context10.finish(25);

                  case 33:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[8, 21, 25, 33], [26,, 28, 32]]);
          }));
        }
        /* Use the device camera to take a photo:
        // https://capacitor.ionicframework.com/docs/apis/camera
        
        // Store the photo data into permanent file storage:
        // https://capacitor.ionicframework.com/docs/apis/filesystem
        
        // Store a reference to all photo filepaths using Storage API:
        // https://capacitor.ionicframework.com/docs/apis/storage
        */

      }, {
        key: "addNewToGallery",
        value: function addNewToGallery() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var capturedPhoto, savedImageFile;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Camera.getPhoto({
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                      quality: 100 // highest quality (0 to 100)

                    });

                  case 2:
                    capturedPhoto = _context11.sent;
                    _context11.next = 5;
                    return this.savePicture(capturedPhoto);

                  case 5:
                    savedImageFile = _context11.sent;
                    // Add new photo to Photos array
                    this.photos.unshift(savedImageFile); // Cache all photo data for future retrieval

                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: this.platform.is('hybrid') ? JSON.stringify(this.photos) : JSON.stringify(this.photos.map(function (p) {
                        // Don't save the base64 representation of the photo data, 
                        // since it's already saved on the Filesystem
                        var photoCopy = Object.assign({}, p);
                        delete photoCopy.base64;
                        return photoCopy;
                      }))
                    });

                  case 8:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } // Save picture to file on device

      }, {
        key: "savePicture",
        value: function savePicture(cameraPhoto) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var base64Data, fileName, savedFile;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.readAsBase64(cameraPhoto);

                  case 2:
                    base64Data = _context12.sent;
                    // Write the file to the data directory
                    fileName = new Date().getTime() + '.jpeg';
                    _context12.next = 6;
                    return Filesystem.writeFile({
                      path: fileName,
                      data: base64Data,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 6:
                    savedFile = _context12.sent;

                    if (!this.platform.is('hybrid')) {
                      _context12.next = 11;
                      break;
                    }

                    return _context12.abrupt("return", {
                      filepath: savedFile.uri,
                      webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].convertFileSrc(savedFile.uri)
                    });

                  case 11:
                    return _context12.abrupt("return", {
                      filepath: fileName,
                      webviewPath: cameraPhoto.webPath
                    });

                  case 12:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } // Read camera photo into base64 format based on the platform the app is running on

      }, {
        key: "readAsBase64",
        value: function readAsBase64(cameraPhoto) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var file, response, blob;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    if (!this.platform.is('hybrid')) {
                      _context13.next = 7;
                      break;
                    }

                    _context13.next = 3;
                    return Filesystem.readFile({
                      path: cameraPhoto.path
                    });

                  case 3:
                    file = _context13.sent;
                    return _context13.abrupt("return", file.data);

                  case 7:
                    _context13.next = 9;
                    return fetch(cameraPhoto.webPath);

                  case 9:
                    response = _context13.sent;
                    _context13.next = 12;
                    return response.blob();

                  case 12:
                    blob = _context13.sent;
                    _context13.next = 15;
                    return this.convertBlobToBase64(blob);

                  case 15:
                    return _context13.abrupt("return", _context13.sent);

                  case 16:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        } // Delete picture by removing it from reference data and the filesystem

      }, {
        key: "deletePicture",
        value: function deletePicture(photo, position) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var filename;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    // Remove this photo from the Photos reference data array
                    this.photos.splice(position, 1); // Update photos array cache by overwriting the existing photo array

                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: JSON.stringify(this.photos)
                    }); // delete photo file from filesystem

                    filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
                    _context14.next = 5;
                    return Filesystem.deleteFile({
                      path: filename,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }]);

      return PhotoService;
    }();

    PhotoService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], PhotoService);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es5.js.map