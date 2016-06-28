# nightwatch-scaffold
Simple boilerplate for a new nightwatch.js project

### Setup

**1.Install JDK/Java**
```
brew cask install java
```

**2. Add selenium-standalone-server to project.** [Download Latest.](http://selenium-release.storage.googleapis.com/index.html) Once installed,
create a lib folder in the projects root.
```
mkdir lib && open .
```
**3. Drag the .jar server file into your lib folder**

**4. Configure path.**

nightwatch.json
```json
"selenium" : {
    "start_process" : true,
    "server_path" : "lib/selenium-server-standalone-{ver.ver.ver}.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    ...
```

**5. Install nightwatch.js**
```
npm install
```
