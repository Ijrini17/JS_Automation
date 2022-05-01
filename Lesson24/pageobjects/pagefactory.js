const BaseElements = require("../helpers/baseelements");
const CartPage = require("./cart.page");
const DetailsPage = require("./details.page");
const MainPage = require("./main.page");
const Page = require('../pageobjects/page');
const NavPanel = require("./pagecomponents/nav.panel");
const Elements = require("./pagecomponents/elementsonpage");

class PageFactory {

    constructor(page) {
        this.p = new Page(page);
        this.mainPage = new MainPage(page);
        this.detailsPage = new DetailsPage(page);
        this.cartPage = new CartPage(page);
        this.baseElements = new BaseElements(page);
        this.navPanel = new NavPanel(page);
        this.elements = new Elements(page);

    }
}

module.exports = PageFactory;