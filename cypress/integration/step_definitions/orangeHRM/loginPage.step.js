import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { loginpage} from '../../../support/pageObjects/orangeHRMPages'

Given('I navigate to HRM page', () => {
    return cy.visit(Cypress.env('baseUrl'));
})

And('I enter username in HRM', () => {
    return cy.get(loginpage.input.username).type(Cypress.env('username')).should('have.value', Cypress.env('username'));
});

And('I enter password in HRM', (password) => {
    return cy.get(loginpage.input.password).type(Cypress.env('password')).should('have.value', Cypress.env('password'));
});

When('I click on Login button in HRM', () => {
    return cy.get(loginpage.button.loginButton).click();
});