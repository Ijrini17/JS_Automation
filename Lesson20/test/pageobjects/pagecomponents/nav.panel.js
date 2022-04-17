class NavPanel {

    get allPanel() {

        return $('//*[@class="navbar__items"]')

    }

    get docs() {

        return $('//*[@class="navbar__item navbar__link" and @href="/docs/gettingstarted"]')
    }

    get api() {

        return $('//*[@class="navbar__item navbar__link" and @href="/docs/api"]')
    }

    get blog() {

        return $('//*[@class="navbar__item navbar__link" and @href="/blog"]')
    }

    get contribute() {

        return $('//*[@class="navbar__item navbar__link" and @href="/docs/contribute"]')
    }
    get community() {

        return $('//*[@class="navbar__item navbar__link" and @href="/community/support"]')
    }

    get toggle() {

        return $(".lightToggleIcon_v35p");
    }
}

module.exports = new NavPanel();