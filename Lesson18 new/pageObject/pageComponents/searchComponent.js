const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class SearchComponent extends BasePage {
    get searchButton() {
        return driver.findElement(By.css(".vu8Pwe.iWs3gf.YSH9J"));
    }

    get searchField() {
        return driver.findElement(By.css("[type='search']"))
    } 

    get startSearch() {
        return driver.findElement(By.css('.U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d .vu8Pwe'));
    }

    get resultsOnThisSite() {
        return driver.findElement(By.css('.DLXGJd'))
    }

    get searchResultDescription() {
        return driver.findElements(By.css('.yDWqEe'));
    } 
}

module.exports = SearchComponent