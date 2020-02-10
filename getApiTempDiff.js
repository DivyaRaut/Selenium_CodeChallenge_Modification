const webdriver = require("selenium-webdriver");
const { Builder, By, key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
//const driver = new webdriver.Builder().forBrowser("chrome").build();
const fs = require("fs");
const request = require("request");
const getAutomation = require("./getAutomationData");

async function getApiTempDiff(driver, element, callback) {
  try {
    // callback2 = async result => {
    //   if (result == "Success") {
    // let temp1 = await driver
    //   .findElement(By.xpath("//div[3]/table/tbody/tr[1]/td[2]/p[1]/span[1]"))
    //   .getText();
    let temp1 = 25;
    let temp2 = 16;
    // let temp2 = await driver
    //   .findElement(By.xpath("//div[3]/table/tbody/tr[1]/td[2]/p[1]/span[2]"))
    //   .getText();
    // `//*[@id="widget"]/div/div/div[3]/div[3]/span/span/div[3]/table/tbody/tr[1]/td[2]/p[1]/span[2]`
    let maxTemp = temp1 > temp2 ? temp1 : temp2;
    let minTemp = temp1 > temp2 ? temp2 : temp1;

    let difference = maxTemp - minTemp > 10 ? false : true;
    callback(difference);
    //   }
    // };

    //let cbRes = getAutomation.getAutomationData(driver, element, callback2);
  } catch (error) {
    console.log(error);
  }
}

exports.getApiTempDiff = getApiTempDiff;
