cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-sqlite-2.sqlitePlugin",
    "file": "plugins/cordova-plugin-sqlite-2/dist/sqlite-plugin.js",
    "pluginId": "cordova-plugin-sqlite-2",
    "clobbers": [
      "sqlitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-sqlite.SQLitePlugin",
    "file": "plugins/cordova-plugin-sqlite/www/SQLitePlugin.js",
    "pluginId": "cordova-plugin-sqlite",
    "clobbers": [
      "window.sqlitePlugin",
      "cordova.plugins.sqlitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-sqlite-2": "1.0.6",
  "cordova-plugin-sqlite": "1.0.3",
  "cordova-plugin-splashscreen": "5.0.2"
};
// BOTTOM OF METADATA
});