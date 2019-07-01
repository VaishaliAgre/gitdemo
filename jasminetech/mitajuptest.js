/ jupiter code /

var webdriver = require("selenium-webdriver");
var By;
var until;
var driver;

// function call
setup();
geturl();
jupitertitle();

function setup() {

 console.log("set up browser");
 By = webdriver.By;
 until = webdriver.until;
 driver = new webdriver.Builder().forBrowser("chrome").build(); //launch chrome
 driver.manage().window().maximize(); // maximize window
 driver.manage().deleteAllCookies(); // delete all the cookies	

}

// Start Jupiter login section

function geturl() {
 console.log("open browser");
 // enter URL
 driver.get("https://fsp-dev.jupiterintel.com/").then(function() {

  // identify the webelement & perform operation
  driver.findElement(webdriver.By.name('email')).sendKeys('ramana@jupiterintel.com')
  driver.findElement(webdriver.By.name('password')).sendKeys('(Jupiter123)')
  driver.findElement(webdriver.By.className('login-button')).click().then(function() {
   console.log("button clicked");
   openlistarea();
  })
 });
}

//end jupiter login section

// Fetch jupiter title

function jupitertitle() {
 driver.sleep(2000).then(function() {
  driver.getTitle().then(function(title) {
   if (title === 'Jupiter Intelligence') {
    console.log('Test passed & title is :' + title);
   } else {
    console.log('Test failed');
   }
  });
 });

}

// End jupiter title section

function openlistarea() {
 console.log("open area list");
 driver.wait(until.elementLocated({
  className: 'css-1hwfws3'
 }), 3 * 1000).then(function() { // click on search box
  driver.findElement(By.className('css-1hwfws3')).click().then(function() {
   driver.findElements(By.className("css-1u7kv8s-menu")).then(function(elements) { // serach div which contains metro area list
    elements.forEach(function(element) {
     element.getText().then(function(text) {
      console.log(text); // fetch all metro area

      driver.wait(until.elementLocated({
       id: 'react-select-2-option-2'
      }), 5 * 1000).then(function() { // click on particular metro area
       driver.findElement(By.id('react-select-2-option-2')).click().then(function() {
        console.log("id is found");

        driver.wait(until.elementLocated({
         className: 'icon-pencil'
        }),10 * 1000).then(function() { // edit on saved location file
         driver.findElement(By.className('icon-pencil')).click().then(function() {
          console.log("edit pencil is found");

          driver.findElement(By.id("newFileName")).sendKeys("welcome to jupiter automation test"); // send text in edit box
          driver.findElement(By.className('icon-pencil')).click().then(function() {

           driver.wait(until.elementLocated({
            className: 'icon-trash'
           }), 5 * 1000).then(function() { //delete saved location file
            driver.findElement(By.className('icon-trash')).click().then(function() {
             console.log("element deleted");

             driver.wait(until.elementLocated({
              className: 'saved-locations-wrapper'
             }), 5 * 1000).then(function() { // fetch text of saved locaton
              var ele = driver.findElement(By.className("saved-locations-wrapper"));
              ele.getText().then(function(txt) {
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

        });

       });

      });
     });
    });
   });
  });
 });
}