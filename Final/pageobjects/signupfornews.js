class SUNewsPage {

    get emailField() {
        return '[name="Электронная почта"]';
    }

    get policyAgreement() {
        return '.x-checkbox__native-checkbox';
    }

    get buttonForWomen() {
        return '[label="для женщин"]';
    }

    get confirmOnSubscribe() {
        return '._1CQI5BUZ8OkEcByQn_mGRv';
    }
}

module.exports = new SUNewsPage();