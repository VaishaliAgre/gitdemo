var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
    
 
//fetching the app URL

driver.get('https://fsp-dev.jupiterintel.com/');
driver.sleep(1000).then(function() {
console.log('Window is maximized');
driver.manage().window().maximize();    
driver.findElement(By.name('email')).sendKeys('ramana@jupiterintel.com');
driver.findElement(By.name('password')).sendKeys('(Jupiter123)');
driver.findElement(By.className('login-button')).click();
console.log('user logged in');
//Title Verification
jupitertitle() ; 
//calling location function
 openlistarea();
//calling browse file function
browsingfile();
//closing the window


});
//Title Verification

function jupitertitle() {
  driver.sleep(2000).then(function () {
  driver.getTitle().then(function (title) {
  if (title === 'Jupiter Intelligence') {
  console.log('Test passed & title is :' + title);
  } else {
  console.log('Test failed');
  }
  });
  });
  // driver.wait(until.titleContains('Jupiter Intelligence')).then(() => driver.getTitle().then((title) => {
  //   console.log(title);
  //   driver.quit();
  }
//Locations lists

function openlistarea(){
    console.log("open area list"); 
     driver.wait(until.elementLocated({className: 'css-1hwfws3'}), 1 * 60 * 1000).then(function () {
      driver.findElement(By.className('css-1hwfws3')).click().then(function(){ 
        driver.wait(until.elementLocated({className: 'css-1u7kv8s-menu' }),5 * 1000).then(function () {
           driver.findElements(By.className("css-1u7kv8s-menu")).then(function(elements){
             elements.forEach(function (element) {
               element.getText().then(function(text){
                console.log(text);
                });
         });
            }); 

             driver.wait(until.elementLocated({ id: 'react-select-2-option-0' }), 5 * 1000).then(function (){
      driver.findElement(By.id('react-select-2-option-0')).click(); 
        console.log("id is found for react select 2");
               }); 
          // Saved Location clicked on edited
         driver.wait(until.elementLocated({className: 'icon-pencil' }), 10 * 1000).then(function(){
          console.log('pincile mili');
          driver.findElement(By.className('icon-pencil')).click().then(function(){
            driver.findElement(By.id('newFileName')).sendKeys('Location Edited').then(function(){
              driver.findElement(By.className('icon-pencil')).click();
            });
            console.log('edited the File Name');  
            });
            driver.wait(until.elementLocated({className: 'saved-locations-wrapper'}), 5 * 1000).then(function() { // fetch text of saved locaton
              var ele = driver.findElement(By.className("saved-locations-wrapper"));
              ele.getText().then(function(txt) {
                console.log('Selected Element is :'+ ele)
                console.log('menu text is ', txt);
                   if (txt == '3points.csv') {
                        ele.click();
                          return;
                      }
                });

             });
          });  
        });   
       });
      });
   }

   function browsingfile(){  
    //On clicking submit button file will get uploaded
    driver.wait(until.elementLocated({className: 'file-upload-input'}), 1 * 60 * 1000).then(function (){
      driver.findElement(By.className('file-upload-input')).click().then(function(){
        driver.findElement(By.className('file-upload-input'))
        //now go to target page where we need to upload the csv file
        .sendKeys('D:\Jupiter-Climate-Score\Lat_Long combinations\random_lat_long_10.csv').then(function(){
          driver.findElement(By.className('icon-go-inactive')).click();
          });
      });
    });
  } 
