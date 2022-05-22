
const navPanel = require("../../pageobjects/pagecomponents/nav.panel")
const suNewsPage = require("../../pageobjects/signupfornews")
const loginPage = require("../../pageobjects/login.page")
const elements = require("../../pageobjects/pagecomponents/elementsonpage")
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('login', () =>{

cy.get(loginPage.emailField).type("isporova@yandex.ru");
cy.get(loginPage.passwordField).type("12345678");
cy.get(loginPage.loginButton).click({force: true});
cy.get(loginPage.loginButton).click({force: true});
cy.get(loginPage.loginButton).click({force: true});
cy.get(loginPage.loginButton).click({force: true});
})
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
