/ node js base code /

var webdriver = require("selenium-webdriver");
var By;
var until;
var driver;


setup();
geturl();
openlistarea();
savelocation_edit();


function setup() {

console.log("set up browser");
By = webdriver.By;
until = webdriver.until;
driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();

}


function geturl() {

console.log("open browser");
driver.get("https://fsp-dev.jupiterintel.com/").then(function () {
driver.findelement(webdriver.By.name('email')).sendkeys('ramana@jupiterintel.com')
driver.findElement(webdriver.By.name('password')).sendKeys('(Jupiter123)')
driver.findElement(webdriver.By.className('login-button')).click().then(function(){
console.log("button clicked");
openlistarea();
})
});
}


function openlistarea() {
console.log("open area list"); 
driver.wait(until.elementLocated({ className: 'css-1hwfws3' }), 3 * 1000).then(function () {
driver.findElement(By.className('css-1hwfws3')).click().then(function(){ 
driver.wait(until.elementLocated({ className: 'css-1u7kv8s-menu' }), 5 * 1000).then(function () {
driver.findElements(By.className("css-1u7kv8s-menu")).then(function(elements){
elements.forEach(function (element) {
element.getText().then(function(text){
console.log(text);
});
});
}); 

}); 

driver.wait(until.elementLocated({ id: 'react-select-2-option-0' }), 5 * 1000).then(function (){
driver.findElement(By.id('react-select-2-option-0')).click(); 
console.log("id is found");
}); 

});
});
}


function savelocation_edit(){
console.log("edit saved location");

driver.wait(until.elementLocated({ className: 'icon-pencil' }), 5 * 1000).then(function (){
driver.findElement(By.className('icon-pencil')).click(); 
console.log("edit pencil is found");
}); 

}



