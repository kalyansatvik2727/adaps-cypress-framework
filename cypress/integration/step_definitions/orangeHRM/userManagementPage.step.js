import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { usermanagementpage } from '../../../support/pageObjects/orangeHRMPages';
import {randomNumber} from '../../../support/helper'

let name;

And('I select {string} from User Role dropdown in user management page', (value) => {
    return cy.selectDropdown(usermanagementpage.select.usertype,value);       
}); 

And('I select value {string} from Employee name auto suggest dropdown in user management page', (value) => {
    return cy.autoSuggestDropdown(usermanagementpage.input.employeename,value);
});

And('I enter text {string} in Username in user management page', (value) => {
    name= value+randomNumber();
    cy.log(name);
    return cy.enterText(usermanagementpage.input.username,name);
}); 

And('I enter text {string} in password in user management page', (value) => {
    return cy.enterText(usermanagementpage.input.password,value);
});

And('I enter text {string} in confirm password in user management page', (value) => {
    return cy.enterText(usermanagementpage.input.confirmPassword,value);
});

And('I click on Save button in user management page', () => {
    return cy.buttonClick(usermanagementpage.button.save);
});

And('I validate page redirects and system users section is present', () => {
    return cy.get(usermanagementpage.div.systemusers,{timeout:50000}).should('be.visible');
});

And('I enter text in search box in system users page', () => {
    return cy.enterText(usermanagementpage.systemsuers.username,name);
});

And('I click on search in system users page', () => {
    return cy.buttonClick(usermanagementpage.systemsuers.searchButton);
});

And('I validate search results retreive {string} records in system users page', (length) => {
    let records = parseInt(length);
    return cy.get(usermanagementpage.systemsuers.records).its('length').should('eq', records);
});

And('I check the record in system users page', () => {
    return cy.get(usermanagementpage.systemsuers.searchResultsCheckbox).check();
});

And('I click on Delete button in system users page', () => {
    return cy.get(usermanagementpage.systemsuers.deleteButton).click();
});

And('I click on pop up Ok button in system users page', () => {
    return cy.get(usermanagementpage.systemsuers.popupOkButton).click();
});

And('I validate search results retreive No Records Found in system users page', (length) => {
    return cy.contains('No Records Found');
});
