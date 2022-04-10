const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const MainPage = require('../pageObject/mainPage');
const BaseElements = require('../helpers/baseElements');
const SearchComponent = require('../pageObject/pageComponents/searchComponent');
const BasePage = require('../pageObject/basePage');
const set = require('../utils/config')

const mainPage = new MainPage();
const baseElements = new BaseElements();
const searchComponent = new SearchComponent();


describe(`new tests`, function () {


    before(async () => {
        await set();
    })

    after(async () => {
        await BasePage.close();
    });

    it(`check title`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/home');
        expect(await driver.getTitle()).to.include('ChromeDriver')

    })

    it(`check title on extensions`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/home');
        await baseElements.click(mainPage.extentions);
        await BasePage.script("arguments[0].style.backgroundColor='blue';", mainPage.title);
        expect(await driver.getTitle()).to.include('Chrome Extensions');
    })

    it(`check search`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/home');
        await baseElements.click(searchComponent.searchButton);
        await baseElements.sendKeys(searchComponent.searchField, 'driver');
        await baseElements.sendKeys(searchComponent.searchField, Key.ENTER);
        //await BasePage.sleep();
        await BasePage.wait(searchComponent.resultsOnThisSite);
        const result = await searchComponent.searchResultDescription;
        expect(await result[0].getText()).to.contain("driver");

    })

})