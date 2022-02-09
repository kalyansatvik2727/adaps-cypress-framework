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
// Cypress.Commands.add('login', () => {
//     cy.intercept('**/dashboard/employeeDistribution').as('dashboard');

//     cy.visit(Cypress.env('baseUrl'));
//     cy.get('input[name=txtUsername]').type(Cypress.env('username')).should('have.value', Cypress.env('username'));
//     cy.get('input[name=txtPassword]').type(Cypress.env('password')).should('have.value', Cypress.env('password'));
//     cy.get('input[value=LOGIN]').click();

//     cy.wait('@dashboard');
// })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    //cy.intercept('**/dashboard/employeeDistribution').as('dashboard');

    cy.visit(Cypress.env('baseUrl'));
    cy.get('input[placeholder=Username]').type(Cypress.env('username')).should('have.value', Cypress.env('username'));
    cy.get('input[placeholder=Password]').type(Cypress.env('password')).should('have.value', Cypress.env('password'));
    cy.get('input[value=Login]').click();

    //cy.wait('@dashboard');
})

Cypress.Commands.add('priceSplit', (price) => {
    //split text in to an array
    let priceArr = price.split('.');
    // cy.log(priceArr)

    //get rid of dollar sign
    let dollarFirstPart = priceArr[0].slice(1);
    let dollarSecondPart = priceArr[1];
    // cy.log('dollarFirstPart',dollarFirstPart);
    // cy.log('dollarSecondPart',dollarSecondPart);
    let priceArray = [];
    priceArray.push(dollarFirstPart);
    priceArray.push(dollarSecondPart);
    // cy.log('priceArray',priceArray);

    //converting an array as a string 
    let total = priceArray.join("");
    // cy.log(total);
    // cy.log(typeof total);

    return cy.wrap(total);
})

Cypress.Commands.add('enterText', (locator, value) => {
    return cy.get(locator)
        .type(value);
})

Cypress.Commands.add('buttonClick', (locator, value) => {
    return cy.get(locator)
        .click();
})

Cypress.Commands.add('autoSuggestDropdown', (locator, value) => {
    return cy.get(locator)
        .type(value)
        .get('.ac_results ul li')
        .eq(0)
        .click({ force: true });
})

Cypress.Commands.add('selectDropdown', (locator, value) => {
    return cy.get(locator)
        .select(value).wait(3000);
})

//local storage commands
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});


