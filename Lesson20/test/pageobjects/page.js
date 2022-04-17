module.exports = class Page {

    static get html() {

        return $("/html")
    }

    async open(path) {
        await browser.url(`https://webdriver.io/${path}`);
    }
}
