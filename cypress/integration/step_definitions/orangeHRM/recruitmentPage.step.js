import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { recruitmentpage } from '../../../support/pageObjects/orangeHRMPages';


And('I perform search in recruitment page', () => {
    return cy.buttonClick(recruitmentpage.button.search);       
}); 

And('I validate search results retreive records in recruitment page', (length=1) => {
    let records = parseInt(length);
    return cy.get(recruitmentpage.select.records).its('length').should('be.greaterThan', records);
});

And('I select value {string} from job title dropdown in recruitment page', (value) => {
    return cy.selectDropdown(recruitmentpage.select.jobtitle,value);
});

And('I select value {string} from vacancy dropdown in recruitment page', (value) => {
    return cy.selectDropdown(recruitmentpage.select.vacancy,value);
});

And('I select value {string} from hiring manager dropdown in recruitment page', (value) => {
    return cy.selectDropdown(recruitmentpage.select.hiringmanager,value);
});

And('I validate search results retreive records for specific search in recruitment page', (length=1) => {
    let records = parseInt(length);
    return cy.get(recruitmentpage.select.records).its('length').should('be.greaterThan', records);
});
