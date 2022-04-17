const Page = require('./page');


class ApiPage extends Page {
 
    get browser () {
        return $('//*[text()="browser"]');
    }

    get browserLinks () {
        return $$('.theme-doc-sidebar-item-link.theme-doc-sidebar-item-link-level-2.menu__list-item');
    }

    get deleteCookiesLink () {
        return $('//a[@tabindex=0 and text()="deleteCookies"]');
    }


    get paginationLinks () {
        return  $$('.pagination-nav__label');
    }
 
      async open () {
        await super.open("docs/api");
    }
}

module.exports = new ApiPage();
