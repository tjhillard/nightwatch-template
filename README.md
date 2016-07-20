# nightwatch-template
Simple boilerplate for a new nightwatch.js project integrated with browserstack

## Setup

**1.Install JDK/Java**
```
brew cask install java
```

**2. Add selenium-standalone-server to project.** 
via npm (recommended)
```
npm install selenium-standalone@latest -g
```
while in project root directory
```
selenium-standalone install --version=2.53.0 --basePath=lib/ 
```
*OR* (not recommended)
[Download Latest.](http://selenium-release.storage.googleapis.com/index.html) and drag .jar file into lib/ folder.

**3. Configure paths.** If you download manually, ensure you reference the correct version.

nightwatch.json
```json
"selenium" : {
    "start_process" : true,
    "server_path" : "lib/selenium-standalone/2.5.3-server.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    ...
```
```json
"cli_args" : {
      "webdriver.chrome.driver" : "lib/chromedriver/2.22-x64-chromedriver"
    }
```

**4. Install nightwatch.js**
```
npm install
```

**5. Setup .env**
* Rename ```.env.example``` to ```.env``` add any applicable config variables. 

## Troubleshooting
* Firefox versions > 45 are incompatible with selenium as of July 2016.

## Running Tests
**Locally**
```
npm run local
```

**All browsers via browserstack**  5 parallel tests on all major desktop browsers
```
npm run browserstack
```

**Specific Browser**
```js
npm run browserstack-{browsername} // chrome, safari, opera, ie, firefox
```
