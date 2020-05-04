$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/PayBills.feature");
formatter.feature({
  "name": "Pay Bills",
  "description": "",
  "keyword": "Feature"
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
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.NavigationStep.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Date field should not\taccept alphabetical characters.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters \"payee\" as \"bank of America\" on \"pay Bills\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"account\" as \"saving\" on \"pay bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"amount\" as \"10\" on \"pay bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"date\" as \"sss\" on \"pay bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"description\" as \"hello\" on \"pay bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"pay\" button on \"pay bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Date empty field message\" should contain \"Please fill out this field.\" on \"Pay Bills\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.should_contain_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});