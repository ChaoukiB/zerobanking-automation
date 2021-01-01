
  Feature: Pay Bills
    Background:
      Given user is on "Login" page
      When user enters "username" as "user_username" on "Login" page
      And user enters "password" as "user_password" on "Login" page
      And user clicks on "login" button on "Login" page
      When user navigates to "Pay Bills" page

    Scenario:Pay Bills page should have the title Zero – Pay	Bills

      Then "Title" should contain "Zero - Pay Bills" on "Pay Bills" page

      Scenario:	When user completes	a successful Pay operation, The	payment	was	successfully submitted
       Then user enters "payee" as "Bank of America" on "pay Bills" page
        And user enters "account" as "Savings" on "pay bills" page
        And user enters "amount" as "10" on "pay bills" page
        And user enters "date" as "2020-05-05" on "pay bills" page
        And user enters "description" as "hello" on "pay bills" page
        And user clicks on "pay" button on "pay bills" page
        Then "Message" should contain "The payment was successfully submitted." on "Pay Bills" page


        Scenario Outline: When user	tries to make a	payment	without	entering the amount	or date,
        Please fill out	this field message! should be displayed.
          Then user enters "payee" as "bank of America" on "pay Bills" page
          And user enters "account" as "saving" on "pay bills" page
          And user enters "amount" as "<amount>" on "pay bills" page
          And user enters "date" as "<date>" on "pay bills" page
          And user enters "description" as "hello" on "pay bills" page
          And user clicks on "pay" button on "pay bills" page
          Then "<message>" should contain "Please fill out this field." on "Pay Bills" page
        Examples:
         |amount |   date    |message                 |
          |      |2020-05-05 |Amount empty field message|
          | 20   |           |Date empty field message  |


    Scenario Outline: Amount field should	not	accept alphabetical	or special characters. Date	field should
          not accept alphabetical characters.
      Then user enters "payee" as "bank of America" on "pay Bills" page
      And user enters "account" as "saving" on "pay bills" page
      And user enters "amount" as "<amount>" on "pay bills" page
      And user enters "date" as "2020-05-05" on "pay bills" page
      And user enters "description" as "hello" on "pay bills" page
      And user clicks on "pay" button on "pay bills" page
      Then "After payment message" shouldn't contain "The payment was successfully submitted." on "Pay Bills" page
      Examples:
      |amount|
      | ss   |
      | **   |

Scenario: Date field should not	accept alphabetical characters.
  Then user enters "payee" as "bank of America" on "pay Bills" page
      And user enters "account" as "saving" on "pay bills" page
      And user enters "amount" as "10" on "pay bills" page
      And user enters "date" as "sss" on "pay bills" page
      And user enters "description" as "hello" on "pay bills" page
      And user clicks on "pay" button on "pay bills" page
      Then "Date empty field message" should contain "Please fill out this field." on "Pay Bills" page
      

# commit 3
    # commit 4
    # commit 5
    # commit 6
    # commit 7
    # commit 8
    # commit 9
    # commit 10


#I am pushing to chaouki