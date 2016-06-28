# nightwatch-new
Simple boilerplate for a new nightwatch.js project

## Setup

**1.Install JDK/Java**
```
brew cask install java
```

**2. Add selenium-standalone-server to project.** [Download Latest.](http://selenium-release.storage.googleapis.com/index.html) Once installed,
create a lib folder in the projects root.
```
mkdir lib && open ./lib
```
**3. Drag the .jar server file into your lib folder**

**4. Configure path.** Ensure you reference the correct version.

nightwatch.json
```json
"selenium" : {
    "start_process" : true,
    "server_path" : "lib/selenium-server-standalone-{version}.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    ...
```

**5. Install Chrome WebDriver** [Download Latest.](http://chromedriver.storage.googleapis.com/index.html)

**6. Configure Path**
```json
"selenium" : {
   ...
    "cli_args" : {
      "webdriver.chrome.driver" : "/Users/johndoe/chromedriver",
      "webdriver.ie.driver" : ""
    }
```

**6. Install nightwatch.js**
```
npm install
```

### Troubleshooting ###
* Firefox versions > 45 are incompatible with selenium as of July 2016.

## Running Tests
```
npm run test
```
