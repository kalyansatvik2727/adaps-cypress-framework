Feature: Orange HRM

        Scenario: Create an user
                Given I navigate to HRM page
                And I enter username in HRM
                And I enter password in HRM
                And I click on Login button in HRM
                And I click on tab with text 'Admin'
                And I click on Add button
                And I select 'ESS' from User Role dropdown in user management page
                And I select value 'John Smith' from Employee name auto suggest dropdown in user management page
                And I enter text 'John' in Username in user management page
                And I enter text 'welcome123' in password in user management page
                And I enter text 'welcome123' in confirm password in user management page
                When I click on Save button in user management page
                Then I validate page redirects and system users section is present

        Scenario: Search the user created
                Given I navigate to HRM page
                And I click on tab with text 'Admin'
                And I enter text in search box in system users page
                When I click on search in system users page
                Then I validate search results retreive '1' records in system users page

        Scenario: Delete the record created
                Given I navigate to HRM page
                And I click on tab with text 'Admin'
                And I enter text in search box in system users page
                When I click on search in system users page
                Then I validate search results retreive '1' records in system users page
                And I check the record in system users page
                And I click on Delete button in system users page
                And I click on pop up Ok button in system users page
                And I enter text in search box in system users page
                When I click on search in system users page
                Then I validate search results retreive No Records Found in system users page