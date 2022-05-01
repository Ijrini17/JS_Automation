class NavPanel {


    constructor(page) {

        this.page = page;
    }


    get menuLinks() {

        return '[role="menuitem"]';

    }

    get chosenLocation() {
        return '//*[@class="_1csvkmr7vv0DNR7_FHYI5C"]/span[2]';
    }

    get locationMenu() {
        return '[class="v-popover"]';
    }

    get helpingAgent() {
        return '#hde-chat-widget';
    }
    get lamoda() {
        return '[aria-label="Главная"]';
    }
    get name() {
        return '[placeholder="Имя"]';
    }

    get email() {
        return '[placeholder="Э-почта"]';
    }

    get textArea() {
        return '[placeholder="Отправить ваш вопрос Ctrl+Enter"]';
    }

    get urlToSwimmingSuites() {
        return "https://www.lamoda.by/c/3002/clothes-plyajnaya-odejda/";
    }

    get urlToUmbrellas() {
        return "https://www.lamoda.by/c/783/accs-zonty/?sort=price_asc&is_sale=1";
    }

    get filters() {
        return '._2RvJd9uB9bww2dMeikLFGO';
    }

    get selectionsForFilters() {
        return '._1miTFB0zeCCHFYVTXRv4vG';
    }

    get otherFilters() {
        return '.okxMrBZLwAeOqL7zQV-ZZ';
    }

    getMenuLinkByText(text) {

        return this.page.locator(`//*[text()="${text}"]`);
    }

    async clickByLinkText(text) {
        let b = await this.getMenuLinkByText(text);
        await b.waitFor("visible");
        await b.click();
    }

    getLocationByText(text) {

        return this.page.locator(`//*[text()="${text}"]/ancestor::a`);
    }

    async clickLocationByName(text) {

        let c = await this.getLocationByText(text);
        await c.waitFor("visible");
        await c.click();

    }


}

module.exports = NavPanel;