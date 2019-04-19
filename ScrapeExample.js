var webdriver = require("selenium-webdriver"),
  By = webdriver.By;
var driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("file://" + __dirname + "/index.html");

pause(2, ScrapeExample);

function ScrapeExample() {
  console.log("Scrapping the page");

  driver
    .findElement(By.id("name"))
    .sendKeys("Sambhav Jain")
    .then(null, function(exception) {
      console.log(exception.name);
    });

  driver
    .findElement(By.xpath('//input[@value="other"]'))
    .click()
    .then(null, function(exception) {
      console.log(exception.name);
    });

  driver
    .findElement(By.xpath('//input[@type="checkbox"]'))
    .click()
    .then(null, function(exception) {
      console.log(exception.name);
    });

  driver
    .findElements(By.id("fruits"))
    .then(function(value) {
      for (var i = 0; i < value.length; i++) {
        value[i].getText().then(function(text) {
          console.log(text);
        });
      }
    })
    .then(null, function(exception) {
      console.log(exception.name);
    });

  driver.findElement(By.xpath('//option[@value="BMW"]')).click();

  pause(7, QuitDriver);
}

function pause(Time, FuncName) {
  setTimeout(FuncName, Time * 1000);
}

function QuitDriver() {
  driver.close();
  driver.quit();
}
