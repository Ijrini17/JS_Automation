const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
 
let chrome = require('selenium-webdriver/chrome');
let path = require('chromedriver').path;
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service)
 
describe(`new tests`, function () {
 
    //let driver;
    beforeEach(async() => {
       driver = new Builder().forBrowser('chrome').build();
       await driver.manage().window().setRect({ width: 1400, height: 626 });
    });
 
    afterEach(async() => {
        await driver.close();
    })
 
    it(`check title`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        expect(await driver.getTitle()).to.include('ChromeDriver')
        
    })
 
    it(`check title on extensions`, async () => {
 
        await driver.get('https://chromedriver.chromium.org/home');
        const extentions = await driver.findElement(By.xpath("//*[@data-url='/extensions' and @class='aJHbb dk90Ob jgXgSe HlqNPb']"));
        await driver.wait(until.elementIsVisible(extentions), 5000);
        await extentions.click();
        const title = await driver.findElement(By.css("h1>span"));
        await driver.wait(until.elementIsVisible(title), 10000);
        await driver.executeScript("arguments[0].style.backgroundColor='blue';", title);
        expect(await driver.getTitle()).to.include('Chrome Extensions');
    })
 
    it(`check search`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const searchButton = await driver.findElement(By.css(".vu8Pwe.iWs3gf.YSH9J"));
        await driver.wait(until.elementIsVisible(searchButton), 5000);
        await searchButton.click();
        const searchField = await driver.findElement(By.css("[type='search']"));
        await driver.wait(until.elementIsVisible(searchField), 10000);
        await searchField.sendKeys('driver', Key.ENTER);
        
        //const searchButton2 = await driver.findElement(By.css(".A37UZe.qgcB3c.iHd5yb .xjKiLb .Ce1Y1c .vu8Pwe"));
        //await searchButton2.click();
       
        await driver.sleep(5000);
        const result = await driver.findElements(By.css(".yDWqEe"))
        expect(await result[0].getText()).to.contain("driver");
       
    })
 
})
