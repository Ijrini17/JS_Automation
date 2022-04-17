const ApiPage = require('../pageobjects/api.page');
const HomePage = require('../pageobjects/home.page');
const BaseElements = require('../helpers/baseelements');
const SearchComponent = require('../pageobjects/pagecomponents/search.component');
const NavPanel = require('../pageobjects/pagecomponents/nav.panel');
const Page = require('../pageobjects/page');
const settings = require('../utils/config');
const page = new Page();

describe('Webdriverio tests', () => {

    before(function () {
        settings();
    });

    it('verify nav panel contains all needed text links', async () => {
        await page.open("");
        await expect(NavPanel.docs).toHaveText('Docs');
        await expect(NavPanel.api).toHaveText('API');
        await expect(NavPanel.blog).toHaveText('Blog');
        await expect(NavPanel.contribute).toHaveText('Contribute');
        await expect(NavPanel.community).toHaveText('Community');
    });

    it('should find results on npm search', async () => {
        await page.open("");
        await BaseElements.click(SearchComponent.searchButton);
        await BaseElements.setValue(SearchComponent.searchField, 'npm');
        await browser.pause(5000);
        let results = await SearchComponent.searchResults;
        await expect(results[0]).toHaveTextContaining('NPM');
    });


    it('verify url on Take The Course page', async () => {
        await page.open("");
        await BaseElements.click(HomePage.takeTheCourse);
        await browser.switchWindow('Learn UI Test Automation Using WebdriverIO');
        await expect(browser).toHaveUrl('https://learn.webdriver.io/');
    });


    it('verify bachground is changed after clicking toggle button', async () => {
        await page.open("");
        await BaseElements.click(NavPanel.toggle);
        await expect(Page.html).toHaveAttribute('data-theme', 'dark');
    });

    it('verify there are 35 links below browser text', async () => {
        await ApiPage.open();
        await BaseElements.click(ApiPage.browser);
        await expect(ApiPage.browserLinks).toBeElementsArrayOfSize(35);
    });


    it('verify previous and following links contain specific text', async () => {
        await ApiPage.open();
        await BaseElements.click(ApiPage.browser);
        await browser.pause(3000);
        await BaseElements.click(ApiPage.deleteCookiesLink);
        await expect(ApiPage.paginationLinks[0]).toHaveTextContaining('debug');
        await expect(ApiPage.paginationLinks[1]).toHaveTextContaining('execute');
    });


});