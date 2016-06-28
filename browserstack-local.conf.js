local_config = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : false,
    "host" : "127.0.0.1",
    "port" : 4444
  },

  "test_settings": {
    "default": {
      "selenium_host": "hub.browserstack.com",
      "selenium_port": 80,
      "silent": true,
      "desiredCapabilities": {
        "browserstack.user": 'tjhillard2',
        "browserstack.key": 'sERx582EV3yJpqgpGRdE',
        "browserstack.debug": true,
        "browserstack.local": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
};

module.exports = local_config;
