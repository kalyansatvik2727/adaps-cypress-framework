Feature: Orange HRM - Assign Leave functionality

        Background:
                Given I navigate to HRM page
                And I enter username in HRM
                And I enter password in HRM
                And I click on Login button in HRM
        
        Scenario: Validate Assign Leave Functionality
                And I click on button with text 'Assign Leave'
                And I select value 'Jasmine Morgan' from Employee name auto suggest dropdown
                And I select value 'CAN - Bereavement' from leave type dropdown
                And I click on view details link and validate pop up data
                And I select date from From Date date picker
                And I select date from To Date date picker
                And I click on assign button
