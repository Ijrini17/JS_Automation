


const Page = require('./page');

class LoginPage extends Page {


    get createAccount() {
        return '//*[contains(text(),"Создать аккаунт")]';
    }

    get emailField() {
        return '[name="Электронная почта"]';
    }
    get passwordField() {
        return '[placeholder="Введите пароль"]';
    }

    get passwordField1() {
        return '[placeholder="Придумайте пароль"]';
    }

    get confirmPasswordField() {
        return '[name="password_confirmation"]';
    }

    get name() {
        return '[name="Имя"]';
    }

    get policyAgreement() {
        return '[type="checkbox"]';
    }

   


get registerButton() {
        return '//*[contains(text(),"Зарегистрироваться")]';
    }

    get loginButton() {

        return '[aria-label="Войти"]'
    }

    get messageOnReject() {
        return '._29VUtwB-sxR-MOo8DYK27X.zgC70ih0Ko8GDOgB2HztV';
    }
}

module.exports =new LoginPage ();