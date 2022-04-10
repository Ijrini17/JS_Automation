const BasePage = require('./basePage');
const { Builder, By, until } = require('selenium-webdriver');

class MainPage extends BasePage {
    constructor() {
        super();
    }

    get extentions() {
        return driver.findElement(By.xpath("//*[@data-url='/extensions' and @class='aJHbb dk90Ob jgXgSe HlqNPb']"));
    }

    get title() {
        return driver.findElement(By.css("h1>span"));
    }

}

module.exports = MainPage