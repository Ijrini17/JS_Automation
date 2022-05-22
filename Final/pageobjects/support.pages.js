const Page = require('./page');

class SupportPages extends Page {

    get searchField() {
        return '[type="search"]';
    }

    get searchButton() {
        return '[value="Найти"]';
    }

    get results() {
        return '.b-serp-item__text';
    }


    get orderField() {
        return '[name="Номер заказа"]';
    }

    get phoneField() {
        return '[name="input-phone"]';
    }
    get checkButton() {
        return '[type="submit"]';
    }

    get orderNotFound() {
        return '.track-form__error';
    }

    get address() {
        return '[name="city_suggest"]';
    }


    get ddValues() {
    return '._4Gk1L3-_66LTO9ZfHowFB span';
    }

    get optionsForDelivery() {
        return '[type="radio"]';
    }

    get listOfPlaces() {
        return '._1w7nniewyrh9W3sz5GXGLM';
        }
    

get chosenPlace(){
    return '.w5tQ9uo8_tJAvWHSYFo-a';
}


}

module.exports = new SupportPages();