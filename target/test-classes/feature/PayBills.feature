
  Feature: Pay Bills
    Background:
      Given user is on "Login" page
      When user enters "username" as "user_username" on "Login" page
      And user enters "password" as "user_password" on "Login" page
      And user clicks on "login" button on "Login" page


    Scenario:Pay Bills page should have the title Zero – Pay	Bills
      When user navigates to "Pay Bills" page
      Then "Title" should contain "Zero - Pay Bills" on "Pay Bills" page

      Scenario:	When user completes	a successful Pay operation, The	payment	was	successfully submitted
       Then
        Then "successful pay" should contain "The payment was successfully submitted" on "Pay Bills" page


        Scenario: When user	tries to make a	payment	without	entering the amount	or date,
        Please fill out	this field message! should be displayed.


          Scenario: Amount field should	not	accept alphabetical	or special characters. Date	field should
          not accept alphabetical characters.