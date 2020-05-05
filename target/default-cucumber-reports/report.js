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
  "name": "Account Activity page should have the title Zero – Account activity.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "\"Title\" should contain \"Zero - Account Activity\" on \"Account Activity\" page",
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
  "name": "The Account drop down default option should be Savings.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "\"Account drop down default option\" should contain \"Savings\" on \"Account Activity\" page",
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
formatter.uri("file:src/test/resources/feature/Login.feature");
formatter.feature({
  "name": "Login functionality",
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
formatter.scenario({
  "name": "Users with wrong username and valid password should not be able to login.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters \"username\" as \"chaouki\" on \"Login\" page",
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
  "name": "user clicks on \"Login\" button on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.LoginFunctionalitySteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"ErrorMessage\" should contain \"Login and/or password are wrong.\" on \"Login\" page",
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