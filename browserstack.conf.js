require('dotenv').config();

browserstack_config = {
  "src_folders" : ["tests/"],
  "output_folder" : "browserstack-reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : false,
    "server_path" : "lib/selenium-server-standalone-2.53.0.jar",
    "log_path" : "",
    "host" : "hub.browserstack.com",
    "port" : 80,
    "cli_args" : {
      "webdriver.chrome.driver" : "/Users/tjhillard/Drivers/chromedriver",
      "webdriver.opera.driver" : "/Users/tjhillard/Drivers/operadriver-v1.1.jar"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://hub.browserstack.com",
      "selenium_port"  : 80,
      "selenium_host"  : "hub.browserstack.com",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "browserstack.user": process.env.BROWSERSTACK_USERNAME,
        "browserstack.key": process.env.BROWSERSTACK_KEY,
        "browserstack.debug": true,
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "browserstack-chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "browserstack-safari": {
      "desiredCapabilities": {
        "browserName": "safari",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "browserstack-firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "browserstack-ie": {
      "desiredCapabilities": {
        "browserName": "internet explorer",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "browserstack-opera": {
      "desiredCapabilities": {
        "browserName": "opera",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "browserstack-iphone6" : {
       "desiredCapabilities": {
         "browserName": "Safari",
         "platformName": "iOS",
         "deviceName": "iPhone 6",
         "platformVersion": "9.3",
         "javascriptEnabled": true,
         "acceptSslCerts": true
       }
     },

     "browserstack-iphone5" : {
        "desiredCapabilities": {
          "browserName": "Safari",
          "platformName": "iOS",
          "deviceName": "iPhone 5",
          "platformVersion": "9.3",
          "javascriptEnabled": true,
          "acceptSslCerts": true
        }
      }
  }
};

module.exports = browserstack_config;
