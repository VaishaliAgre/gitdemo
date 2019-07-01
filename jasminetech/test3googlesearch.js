var webdriver = require('selenium-webdriver');

var By;
var until;
var driver;
setup();
    function setup()
{

  console.log("set up browser");
  By =  webdriver.By;
  until = webdriver.until;
  driver = new webdriver.Builder().forBrowser("chrome").build();   
  driver.manage().window().maximize();
  

}


driver.get('http://www.google.com/ncr')
    .then(_ =>
        driver.findElement(webdriver.By.name('q')).sendKeys('webdriver'))
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(_=> driver.findElement(webdriver.By.name('btnK')).click())
        .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
        .then(_ => driver.quit());

//         Code can be write like as follows ==>
//         let driver = new Builder()
//     .forBrowser('firefox')
//     .build();

// driver.get('http://www.google.com/ncr');
// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnK')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 5000);
// driver.quit();
        
