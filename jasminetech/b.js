var webdriver = require('selenium-webdriver');
var remote = require('selenium-webdriver/remote');
var filename = "D:\Vaishali\screenshot" ;
var driver = new webdriver.Builder().forBrowser('chrome').build();

var fs = require('fs');



//This will detect your local file
driver.setFileDetector(new remote.FileDetector);


driver.get('http://www.fileconvoy.com/').then(function(){
  // File path specific to Linux
  driver.findElement(webdriver.By.id('upfile_0')).sendKeys('D:/Vaishali/TESTING/login-data.xlsx').then(function(){
    driver.findElement(webdriver.By.id('readTermsOfUse')).click().then(function(){
      driver.findElement(webdriver.By.id('upload_button')).click().then(function(){
        driver.getTitle().then(function(title) {
          console.log(title);
          driver.session_.then(function(sessionData) {
            console.log('session id is '+sessionData.id_);
            //driver.location({latitude: 121.21, longitude: 11.56, altitude: 94.23});
             });
            /* 
             driver.takeScreenshot().then(function(data) {
                  fs.writeFileSync(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
                      if(err) throw err;
                        console.log('screenshot taken')
                  });
              
          };*/ 
          //way to take the full page screenshot, 

          var today = new Date();
          
          driver.takeScreenshot().then(function(data){
            var base64Data = data.replace(/^data:image\/png;base64,/,"")
            fs.writeFile("filename", base64Data, 'base64', function(err) {
                 if(err) console.log(err);
                 else {
                  console.log('screenshot taken'+driver);
                 }
            });
         });
          driver.quit();
        });
      });
    });
  });
})