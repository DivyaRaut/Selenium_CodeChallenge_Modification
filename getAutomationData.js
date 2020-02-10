const { Builder, By, key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
// const driver = new webdriver.Builder().forBrowser("chrome").build();
const fs = require("fs");
const request = require("request");
const jsonData = require("./city.list.json");

let temp, wind, humidity;
async function getAutomationData(driver, element, cbAutomation) {
  //Declaring & Defining Variables:...
  //Business Logic Inside tryCatch Block...
  try {
    // return new Promise((resolve, reject) => {
    //   const res = resolve("Success");
    // }).catch(err => {
    //   console.log(err);
    // });
    // exports.res = res;

    //Getting Website api:

    await driver.get("https://openweathermap.org/");
    console.log("Website launced successfully!!!");
    // Getting City
    await driver
      .findElement(By.xpath("//form[@id='searchform']//div//input"))
      .sendKeys(element.name);
    console.log("City Populated");
    //Submit Button
    await driver
      .findElement(By.xpath("//button[@class='btn btn-orange']"))
      .click();
    console.log("Submit Button Clicked");
    await driver
      .findElement(
        By.xpath('//*[@id="forecast_list_ul"]/table/tbody/tr[1]/td[2]/b[1]')
      )
      .click();
    console.log("Visiting next web page");
    //Capturing items from page:
    //temp
    temp = await driver
      .findElement(By.xpath("//div[@id='weather-widget']/h3"))
      .getText();

    console.log("Temperature is1 :" + temp);
    //wind
    wind = await driver
      .findElement(By.xpath(`//*[@id="weather-widget-wind"]`))
      .getText();
    console.log("Wind is :" + wind);
    //Cloudiness
    let cloudiness = await driver
      .findElement(By.xpath(`//*[@id="weather-widget-cloudiness"]`))
      .getText();
    console.log("Cloudiness is :" + cloudiness);
    //Pressure
    let pressure = await driver
      .findElement(
        By.xpath(`//*[@id="weather-widget"]/table/tbody/tr[3]/td[2]`)
      )
      .getText();
    console.log("Pressure is :" + pressure);
    //Humidity
    humidity = await driver
      .findElement(
        By.xpath(`//*[@id="weather-widget"]/table/tbody/tr[4]/td[2]`)
      )
      .getText();
    console.log("Humidity is :" + humidity);
    exports.temp = temp;
    exports.wind = wind;
    exports.humidity = humidity;
    cbAutomation("Success");
  } catch (error) {
    console.log(error);
  }
}
exports.getAutomationData = getAutomationData;
