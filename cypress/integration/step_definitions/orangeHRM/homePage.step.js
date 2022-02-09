import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { homepage,assignleave } from '../../../support/pageObjects/orangeHRMPages'

Then('I validate subscriber link on home page', () => {
    return cy.get(homepage.links.subscriber).should('be.visible');
});

Then('I click on button with text {string}', (text) => {
    return cy.contains(text, { timeout: 50000 }).click({ force: true });
});

And('I select value {string} from Employee name auto suggest dropdown', (text) => {
    return cy.get(assignleave.input.employeename)
        .type(text)
        .get('.ac_results ul li')
        .eq(0)
        .click({ force: true });
});

And('I select value {string} from leave type dropdown', (text) => {
    return cy.get(assignleave.select.leavetype)
        .select(text);        
});

And('I click on view details link and validate pop up data', () => {
    return cy.get(assignleave.links.viewdetails)
        .click()
        .get('div[id=balance_details] h3')
        .contains('OrangeHRM - Leave Balance Details')
        .get('div[id=balance_details] input[id=closeButton]')
        .click();        
});

And('I select date from From Date date picker', () => {
    cy.log('Current Date', Cypress.moment().format('MM/DD/YYYY'))
    let currentDate = Cypress.moment().add(3,'days').format('DD/MM/YYYY');
    let futureDay = Math.abs(currentDate.split('/')[0]);
    cy.log(futureDay);
    cy.get(assignleave.datePicker.fromdate)
    .click()
    .get('td a')
    .contains(futureDay)
    .click();
});

And('I select date from To Date date picker', () => {
    cy.log('Current Date', Cypress.moment().format('MM/DD/YYYY'))
    let currentDate = Cypress.moment().add(5,'days').format('DD/MM/YYYY');
    let futureDay = Math.abs(currentDate.split('/')[0]);
    cy.log(futureDay);
    cy.get(assignleave.datePicker.todate)
    .click()
    .get('td a')
    .contains(futureDay)
    .click();
});

And('I click on assign button', () => {
    return cy.get(assignleave.button.assign)
        .click();        
});

And('I click on Ok button', () => {
    return cy.get('#confirmOkButton').click();        
});

And('I click on Add button', () => {
    return cy.get('#btnAdd').click();        
});

And('I click on tab with text {string}', (text) => {
    return cy.get('#mainMenuFirstLevelUnorderedList').contains(text).click();        
});

And('I click on button with text {string}', (text) => {
    return cy.get('div input[type=button]',{timeout:50000}).should('be.visible').contains(text).click();        
});
