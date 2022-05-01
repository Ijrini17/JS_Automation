const Page = require('./page');

class MainPage extends Page {

    constructor(page) {
        super(page)
    }

    get emailField() {
        return '[name="Электронная почта"]';
    }

    get policyAgreement() {
        return '[name="policyAgreement"]';
    }

    get buttonForWomen() {
        return '[label="для женщин"]';
    }

    get confirmOnSubscribe() {
        return '._1CQI5BUZ8OkEcByQn_mGRv';
    }
}

module.exports = MainPage;