
//Source code https://www.browserstack.com/automate/node
var webdriver = require('selenium-webdriver');

By = webdriver.By,
until = webdriver.until;
var timeout = 15000;
// Running selenium-server.jar at port 4444
var driver = new webdriver.Builder().forBrowser('chrome').build();
var fs = require('fs');

/*driver.takeScreenshot("c:\\selenium_local_map\\out1.png");
webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
  return driver.takeScreenshot().then(function(data) {
      //fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
        require('fs').writeFile('out.png', image, 'base64', function(err){
          console.log(err);
          if(err) throw err;
      });
  })
};

driver.saveScreenshot('snapshot1.png');*/

driver.get('https://fsp-dev.jupiterintel.com/').then(function() {
  console.log('Window is maximized');
  driver.manage().window().maximize(); 
  // identify the webelement & perform operation
  driver.findElement(webdriver.By.name('email')).sendKeys('ramana@jupiterintel.com')
  driver.findElement(webdriver.By.name('password')).sendKeys('(Jupiter123)')
  driver.findElement(webdriver.By.className('login-button')).click().then(function() {
       driver.getTitle().then(function(title) {
      console.log(title);
      var fs = require('fs');

     // driver.quit();
       
        

     });
    });
  });
