const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../pageObject/basePage');

class BaseElements extends BasePage {
    constructor() {
        super();
    }

    async click(element, waitTime) {
        //await driver.wait(until.elementIsVisible(element), waitTime); // set implicit wait
        await element.click();
    }

    async sendKeys(element, text, waitTime = 5000) {
        //await driver.wait(until.elementIsVisible(element), waitTime); // set implicit wait
        await element.sendKeys(text);
    }

}

module.exports = BaseElements