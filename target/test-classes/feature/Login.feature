@regression
Feature: Login functionality

  Background:
    Given user is on "Login" page


  Scenario: Only authorized users should be able to login to the application.

  When user enters "username" as "user_username" on "Login" page
   And user enters "password" as "user_password" on "Login" page
    And user clicks on "Login" button on "Login" page
#    Then "Title" should contain "Account summary" on "Account summary" page

  @smoke
  Scenario: Users with wrong username and valid password should not be able to login.

    When user enters "username" as "chaouki" on "Login" page
    And user enters "password" as "user_password" on "Login" page
    And user clicks on "Login" button on "Login" page
    Then "ErrorMessage" should contain "Login and/or password are wrong." on "Login" page
  @smoke
  Scenario: Users with valid username and wrong password should not be able to login.

    When user enters "username" as "user_username" on "Login" page
    And user enters "password" as "Na" on "Login" page
    And user clicks on "Login" button on "Login" page
    Then "ErrorMessage" should contain "Login and/or password are wrong." on "Login" page
  @smoke
  Scenario: Users with blank username and valid password should not be able to login.

    When user enters "username" as "" on "Login" page
    And user enters "password" as "user_password" on "Login" page
    And user clicks on "Login" button on "Login" page
    Then "ErrorMessage" should contain "Login and/or password are wrong." on "Login" page

  Scenario: Users with valid username and blank password should not be able to login.

    When user enters "username" as "user_username" on "Login" page
    And user enters "password" as "" on "Login" page
    And user clicks on "Login" button on "Login" page
    Then "ErrorMessage" should contain "Login and/or password are wrong." on "Login" page

  Scenario: Users with blank username and blank password should not be able to login.

    When user enters "username" as "" on "Login" page
    And user enters "password" as "" on "Login" page
    And user clicks on "Login" button on "Login" page
    Then "ErrorMessage" should contain "Login and/or password are wrong." on "Login" page
#Feature: login functionality
#
#  Background:
#    Given user is on "login" page
#@wip
#  Scenario: Only authorized user should be able to login
#
##    When user enters "username" as "user_username" on "login" page
##    When user enters "password" as "user_password" on "login" page
##    And user clicks on "login" button on "login" page
##    Then "Title" should contain "Account summary" on "Account summary" page
#
#
#
#    Scenario: User with wrong username or valid password
#
#      When user enters "username" as "chaouki" on "login" page
#      When user enters "password" as "user_password" on "login" page
#      And user clicks on "login" button on "login" page
#      Then "Login and/or password are wrong." should be display
#
#  Scenario: User with valid username or wrong password
#
#    When user enters "username" as "user_username" on "login" page
#    When user enters "password" as "chaouki" on "login" page
#    And user clicks on "login" button on "login" page
#    Then "Login and/or password are wrong." should be display
#
#  Scenario: User with blank username or valid password
#
#    When user enters "username" as "" on "login" page
#    When user enters "password" as "user_password" on "login" page
#    And user clicks on "login" button on "login" page
#    Then "Login and/or password are wrong." should be display
#
#  Scenario: User with valid username or blank password
#    When user enters "username" as "user_username" on "login" page
#    When user enters "password" as "" on "login" page
#    And user clicks on "login" button on "login" page
#    Then "Login and/or password are wrong." should be display