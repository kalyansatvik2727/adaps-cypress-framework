import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to page', () => {
    return cy.visit(Cypress.env('baseUrl'));
})

Given('I navigate to page with required login', () => {
    return cy.login();
})

And('I enter username {string}', (username) => {
    // return cy.get('input[name=txtUsername]').type(username).should('have.value', username);
    return cy.get('input[placeholder=Username]').type(username).should('have.value', username);
});

And('I enter password {string}', (password) => {
    // return cy.get('input[name=txtPassword]').type(password).should('have.value', password);
    return cy.get('input[placeholder=Password]').type(password).should('have.value', password);
});

When('I click on Login button', () => {
    // return cy.get('input[value=LOGIN]').click();
    return cy.get('input[value=Login]').click();
});

Then('I validate home page', () => {

    return cy.get('.title', { timeout: 50000 }).contains('Products');
});

Then('I validate text {string}', (text) => {

    return cy.contains(text);
});

Then('I select the product {string}', (product) => {
    cy.get('.inventory_item_name').each(($option, index) => {
        // cy.log($option.text())
        if ($option.text() == product) {
            cy.wrap($option).click();
        }
    })
});

Then('I validate product price', () => {
    return cy.get('.inventory_details_price').then((element) => {
        //get the element text
        const priceText = element.text();
        // cy.log(priceText)

        //priceSplit returns an object as it is wraped
        const priceObject = cy.priceSplit(priceText);

        //convert object to number for validations 
        const price = Math.floor(parseInt(priceObject));
        // cy.log(typeof price);

        if (price != 0) {
            cy.log('Price is greater than zero');
        } else {
            cy.log('Price is equal or less than zero');
        }
    })

});

Then('I validate product price with regex', () => {
    return cy.get('.inventory_details_price').then((element) => {
        //get the element text
        const priceText = element.text();
        expect(priceText).to.match(/[0-9]/);
    })

});

Then('I click on Add to Cart button', (label) => {
    //performing operation on visible text
    return cy.contains('Add to cart').click().then(() => {
        //validating DOM attributes using jquery methods
        cy.get('[data-test*=sauce]').invoke('attr', 'name').then((attr) => {
            cy.wrap(attr).should('contain', 'remove');
        })
    })

});

Then('I click on Remove button', (label) => {
    return cy.contains('Remove').click().then(() => {
        cy.get('[data-test*=sauce]').invoke('attr', 'name').then((attr) => {
            cy.wrap(attr).should('contain', 'add');
        })
    })

});

Then('I click on Card icon', () => {
    return cy.get('.shopping_cart_link').click();

});

Then('I validate cart has {string} elements', (length) => {
    return cy.get('.cart_item [id*=title_link]').its('length').should('eq', parseInt(length));
});

Then('I click on button with label {string}', (label) => {
    return cy.contains(label).click();
});

Then('I enter text {string} in first name', (fname) => {
    return cy.get('input[placeholder="First Name"]').type(fname).should('have.value',fname);
});

Then('I enter text {string} in last name', (lname) => {
    return cy.get('input[placeholder="Last Name"]').type(lname).should('have.value',lname);
});

Then('I enter text {string} in Zipcode', (zip) => {
    return cy.get('input[placeholder="Zip/Postal Code"]').type(zip).should('have.value',zip);
});

Then('I click on Continue button', () => {
    return cy.get('input[value=Continue]').click();
});

Then('I click on Finish button', () => {
    return cy.get('[data-test=finish]').click();
});

Then('I validate text {string}', (text) => {
    return cy.contains(text);
});






