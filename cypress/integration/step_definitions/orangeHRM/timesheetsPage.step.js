import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { timesheets } from '../../../support/pageObjects/orangeHRMPages'

Then('I click on Timesheets button', () => {
    return cy.xpath('//span[normalize-space()="Timesheets"]').click();
});

And('I select value {string} from Employee name auto suggest dropdown in Timesheets page', (text) => {
    return cy.get(timesheets.input.employeename)
        .type(text)
        .get('.ac_results ul li')
        .eq(0)
        .click({ force: true });
});

And('I click on view button in Timesheets page', () => {
    return cy.get(timesheets.button.viewButton)
        .click();
});

And('I click on add timesheet button in Timesheets page', () => {
    return cy.get(timesheets.button.viewButton)
        .click();
});

And('I select date from From Date date picker in Timesheets page', () => {
    cy.log('Current Date', Cypress.moment().format('MM/DD/YYYY'))
    let currentDate = Cypress.moment().add(3, 'days').format('DD/MM/YYYY');
    let futureDay = Math.abs(currentDate.split('/')[0]);
    cy.log(futureDay);
    cy.get(timesheets.datePicker.selectDate)
        .click()
        .get('td a')
        .contains(futureDay)
        .click();
})

And('I click on edit button in Timesheets page', () => {
    return cy.get(timesheets.button.editButton)
        .click();
});

And('I select value {string} from Project name auto suggest dropdown in Timesheets page', (text) => {
    return cy.get(timesheets.input.projectname)
        .type(text)
        .get('.ac_results ul li')
        .eq(0)
        .click({ force: true }).wait(3000);
});

And('I select value {string} from activity name dropdown in Timesheets page', (text) => {
    return cy.get(timesheets.select.activityname)
        .select(text).wait(3000);
});

And('I enter time in timesheet in Timesheets page', () => {
    cy.get(timesheets.input.mon).type(3);
    cy.get(timesheets.input.tue).type(4);
    cy.get(timesheets.input.wed).type(5);
    cy.get(timesheets.input.thu).type(3);
    cy.get(timesheets.input.fri).type(4);
});

And('I click on save button in Timesheets page', () => {
    return cy.get(timesheets.button.saveButton)
        .click();
});