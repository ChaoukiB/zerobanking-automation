@smoke
Feature: Account Summary Functionality
Background:
  Given user is on "login" page
  When user enters "username" as "user_username" on "Login" page
  And user enters "password" as "user_password" on "Login" page
  And user clicks on "login" button on "Login" page

  Scenario: Account	summary	page	should	have	the	title	Zero– Account	summary
  Then "Title" should contain "Zero - Account Summary" on "Account Summary" page


    Scenario: Account summary	page should	have to	following	account	types:
    Then "Account type" should contain the following information on "Account Summary" page
    |Cash Accounts|
    |Investment Accounts|
    |Credit Accounts   |
    |Loan Accounts |


      Scenario: 	Credit	Accounts table	must	have	columns Account,
    Then "Credit Accounts" table must have following columns on "Account summary" page
      | Account     |
      | Credit Card |
      | Balance     |