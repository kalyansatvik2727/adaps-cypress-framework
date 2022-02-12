Feature: Orange HRM - Recruitment
        @focus
        Scenario: Perform blank search
                Given I navigate to HRM page
                And I enter username in HRM
                And I enter password in HRM
                And I click on Login button in HRM
                And I click on tab with text 'Recruitment'
                When I perform search in recruitment page

        Scenario Outline: Perform Specific search
                Given I navigate to HRM page
                And I click on tab with text 'Recruitment'
                And I select value '<jobtitle>' from job title dropdown in recruitment page
                And I select value '<vacancy>' from vacancy dropdown in recruitment page
                And I select value '<hiringmanager>' from hiring manager dropdown in recruitment page
                When I perform search in recruitment page
                Then I validate search results retreive records for specific search in recruitment page

                Examples:
                        | jobtitle          | vacancy              | hiringmanager |
                        | IT Manager        | Associate IT Manager | Odis Adalwin  |
                        | Software Engineer | Software Engineer    | Odis Adalwin  |