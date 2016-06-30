module.exports = {
  "src_folders" : ["tests/"],
  "output_folder" : "local-reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : false,
    "server_path" : "lib/selenium-server/2.53.0-server.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "lib/chromedriver/2.22-x64-chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "browserstack-iphone" : {
      "launch_url" : "http://127.0.0.1:4723/wd/hub",
      "selenium_port"  : 4723,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
       },
       "desiredCapabilities": {
         "browserName": "Safari",
         "platformName": "iOS",
         "deviceName": "iPhone 6",
         "platformVersion": "9.3",
         "javascriptEnabled": true,
         "acceptSslCerts": true
       }
     }
  }
};
