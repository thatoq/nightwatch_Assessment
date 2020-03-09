
const chromedriver = require("chromedriver");

module.exports={
  "src_folders" : ["tests/feature/Authentication",
  "tests/e2e"],

  "webdriver" : {
    "start_process": true,
    "server_path": chromedriver.path,
    "port": 9515
  },
  "page_objects_path": [
    "page-objects/authentication",
    "page-objects/HomePage"

  ],
  "src_folders" : ["tests"],
  "screenshots": {
    "enabled": true,
    "on_failure": true,
    "on_success": true,
    "path": "tests_output/screenshots",
    "on_error": false
  },
  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  },
  "globals":{
    "testData":{
     "url": "https://twitter.com",
     "username": "thato.qhusheka@ilabquality.com",
     "password": "nightwatch@sqn"
    }
  },
  globals_path: 'globals.js',

};

