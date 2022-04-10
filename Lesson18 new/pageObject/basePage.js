const { Builder, By, until } = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let path = require('chromedriver').path;
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service)
let driver = new Builder().forBrowser('chrome').build();

class BasePage {
    constructor() {
        global.driver = driver;
    }

    static async navigate(url) {
        await driver.get(url);
    }

    static async script(script, element) {
        await driver.executeScript(script, element);
    }

    static async sleep(time = 5000) {
        await driver.sleep(time);
    }

    static async wait(element, time = 10000) {
        await driver.wait(until.elementIsVisible(element), time);
    }

    static async close() {
        await driver.close();
    }
}

module.exports = BasePage;