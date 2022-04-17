const Page = require('./page');

class HomePage extends Page {

    get takeTheCourse() {
        return $("[href='https://learn.webdriver.io']");
    }
}

module.exports = new HomePage();
