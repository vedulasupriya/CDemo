$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Citi Application Automation",
  "description": "",
  "id": "citi-application-automation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Start citibank application",
  "description": "",
  "id": "citi-application-automation;start-citibank-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Navigate to url \"https://gmail.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter username as \"supriyavganti\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Click On Next",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter password as \"@riya2201\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://gmail.com",
      "offset": 17
    }
  ],
  "location": "loinSteps.navigateToUrl(String)"
});
formatter.result({
  "duration": 9150711317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supriyavganti",
      "offset": 19
    }
  ],
  "location": "loinSteps.enterUsernameAs(String)"
});
formatter.result({
  "duration": 380357330,
  "status": "passed"
});
formatter.match({
  "location": "loinSteps.clickOnNext()"
});
formatter.result({
  "duration": 1243468651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@riya2201",
      "offset": 19
    }
  ],
  "location": "loinSteps.enterPasswordAs(String)"
});
formatter.result({
  "duration": 29296876,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"Passwd\"}\nCommand duration or timeout: 22 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DESKTOP-644FJFT\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d5b850ee-e1c9-48cd-bbcf-da79ffdee207\n*** Element info: {Using\u003did, value\u003dPasswd}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat pages.loginPage.enterPassword(loginPage.java:36)\r\n\tat loinSteps.enterPasswordAs(loinSteps.java:23)\r\n\tat ✽.Then Enter password as \"@riya2201\"(login.feature:6)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"Passwd\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DESKTOP-644FJFT\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Supriya/AppData/Local/Temp/anonymous1866507234542657007webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/Supriya/AppData/Local/Temp/anonymous1866507234542657007webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Supriya/AppData/Local/Temp/anonymous1866507234542657007webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Supriya/AppData/Local/Temp/anonymous1866507234542657007webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Supriya/AppData/Local/Temp/anonymous1866507234542657007webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
});