Feature: Account Summary Functionality
  Background:
    Given user is on "login" page
    When user enters "username" as "user_username" on "Login" page
    And user enters "password" as "user_password" on "Login" page
    And user clicks on "login" button on "Login" page


  Scenario: Account Activity page should have the title Zero – Account activity.
    Then "Title" should contain "Zero - Account Summary" on "Account Activity" page


  Scenario: In the Account drop down default option
    Then 