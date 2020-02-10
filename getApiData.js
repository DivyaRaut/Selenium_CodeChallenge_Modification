const getAutomation = require("./getAutomationData");
const request = require("request");

async function getApiData(driver, element, callback) {
  try {
    // getAutomation

    const cbAutomation = async result => {
      if (result == "Success") {
        let temp = getAutomation.temp;
        let wind = getAutomation.wind;
        let humidity = getAutomation.humidity;
        let res = getAutomation.res;
        const apiKey = "ce658e43d986d3db6fdafac97e5a006b";
        let apiUrl =
          "http://api.openweathermap.org/data/2.5/forecast?id=" +
          element.id +
          "&APPID=" +
          apiKey +
          "&units=imperial";

        await request(
          {
            url: apiUrl,
            json: true
          },
          (err, response, body) => {
            console.log(
              "temp Comparision --",
              body.list[0].main.temp === temp.replace("°F", "").trim()
            );
            console.log("Wind Comparision --", body.list[0].main.wind === wind);
            console.log(
              "Humidity Comparision --",
              body.list[0].main.humidity === humidity
            );
          }
        );

        await driver.quit();
      }
    };
    var apiTemp = getAutomation.getAutomationData(
      driver,
      element,
      cbAutomation
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports.getApiData = getApiData;
