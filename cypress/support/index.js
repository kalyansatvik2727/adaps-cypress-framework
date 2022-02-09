// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "cypress-react-selector";
require('cypress-xpath');
import "./commands";
import '@shelex/cypress-allure-plugin';
Cypress.moment = require('moment');

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", (error, runnable) => {
  return false;
});

before('Restore local storage', () => {
  cy.restoreLocalStorage();
  Cypress.Cookies.defaults({
      preserve: /[\s\S]*/,
  });
})

after('Save local storage', () => {
  cy.saveLocalStorage();
})
