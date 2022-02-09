Feature: Demo

        Scenario: Validate login
                Given I navigate to page
                And I enter username 'standard_user'
                And I enter password 'secret_sauce'
                When I click on Login button
                Then I validate home page

        Scenario Outline: Validate login with data table
                Given I navigate to page
                And I enter username '<username>'
                And I enter password '<password>'
                When I click on Login button
                Then I validate text '<text>'

                Examples:
                        | username      | password      | text                                                                      |
                        | standard_user | secret_sauce  | Products                                                                  |
                        | standard_user | standard_user | Epic sadface: Username and password do not match any user in this service |

        Scenario: Login with common action
                Given I navigate to page with required login
                Then I validate home page

        Scenario: E2E flow
                Given I navigate to page with required login
                And I validate home page
                Then I select the product 'Sauce Labs Bolt T-Shirt'
                And I validate product price
                And I validate product price with regex
                And I click on Add to Cart button
                And I click on Remove button
                And I click on Add to Cart button
                And I click on Card icon
                And I validate cart has '1' elements
                And I click on button with label 'Checkout'
                And I enter text 'fname' in first name
                And I enter text 'lname' in last name
                And I enter text '90001' in Zipcode
                And I click on Continue button
                And I click on Finish button
                And I validate text 'THANK YOU FOR YOUR ORDER'
                # And I validate text 'sdjkaslkdj'
