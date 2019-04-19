var webdriver = require("selenium-webdriver"),
  By = webdriver.By;
var chrome = require("chromedriver");
var fs = require("fs");
var driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("https://www.google.com/");

pause(2, ScreenShot);

function ScreenShot() {
  console.log("ScreenShoting the page");
  driver.takeScreenshot().then(function(image, err) {
    fs.writeFile("./images/google.png", image, "base64", function(err) {
      console.log(err);
      if (err == null) {
        console.log("Screenshot has been taken");
      }
    });
  });

  pause(7, QuitDriver);
}

function pause(Time, FuncName) {
  setTimeout(FuncName, Time * 1000);
}

function QuitDriver() {
  driver.close();
  driver.quit();
}
