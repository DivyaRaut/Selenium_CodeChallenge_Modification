const { expect } = require("chai");
const assert = require("chai").assert;
const webdriver = require("selenium-webdriver");
const { Builder, By, key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
//const driver = new webdriver.Builder().forBrowser("chrome").build();
const fs = require("fs");
const request = require("request");
const jsonData = require("../city.list.json");
const getAutomation = require("../getAutomationData");
const tempdifference = require("../getApiTempDiff");
const apiData = require("../getApiData");

let dontExecxute1 = "";
let dontExecxute2 = "";

// describe("Test", function() {
describe("Comparison1", function() {
  it("should return FALSE if temp difference is greater than 10", function() {
    jsonData.forEach(element => {
      const callback = result => {
        dontExecxute1 = result;
        // expect(result).to.be.true;
        // //assert.equal(result, true);
      };
      var tempDiff = tempdifference.getApiTempDiff(driver, element, callback);
    });
    if (dontExecxute1 != "") {
      expect(dontExecxute1).to.be.true;
    }
  });
});
//

describe("Comparison2", function() {
  it("should return FALSE if comaprison fails", function() {
    jsonData.forEach(element => {
      const callback = result2 => {
        dontExecxute2 = true;
        expect(result2).to.be.true;
        dontExecxute2 = result2;
        // assert.equal(result2, true);
      };
      var apiTemp = apiData.getApiData(driver, element, callback);
    });
    if (dontExecxute2 != "") {
      expect(dontExecxute2).to.be.true;
    }
  });
});
