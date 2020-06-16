$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/AccountActivity.feature");
formatter.feature({
  "name": "Account activity functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"username\" as \"user_username\" on \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password\" as \"user_password\" on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"login\" button on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.NavigationStep.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account drop down should have the following options: Savings, Checking, Loan, Credit Card, Brokerage.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@jira"
    }
  ]
});
formatter.step({
  "name": "\"Account drop down\" should contain the following information on \"Account Activity\" page",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});