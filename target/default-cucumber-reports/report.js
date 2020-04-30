$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/Login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
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
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Only authorized users should be able to login to the application.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters \"username\" as \"user_username\" on \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password\" as \"user_password\" on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Title\" should contain \"Account summary\" on \"Account summary\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.AssertionSteps.should_contain_on_page(java.lang.String,java.lang.String,java.lang.String)"
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
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_is_on_page(java.lang.String)"
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
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters \"username\" as \"chaouki\" on \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password\" as \"user_password\" on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"ErrorMessage\" should contain \"Login and/or password are wrong.\" on \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.AssertionSteps.should_contain_on_page(java.lang.String,java.lang.String,java.lang.String)"
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
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Users with valid username and wrong password should not be able to login.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters \"username\" as \"user_username\" on \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password\" as \"Na\" on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"ErrorMessage\" should contain \"Login and/or password are wrong.\" on \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.AssertionSteps.should_contain_on_page(java.lang.String,java.lang.String,java.lang.String)"
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
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Users with blank username and valid password should not be able to login.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters \"username\" as \"\" on \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password\" as \"user_password\" on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"ErrorMessage\" should contain \"Login and/or password are wrong.\" on \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.AssertionSteps.should_contain_on_page(java.lang.String,java.lang.String,java.lang.String)"
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
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Users with valid username and blank password should not be able to login.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters \"username\" as \"user_username\" on \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password\" as \"\" on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"ErrorMessage\" should contain \"Login and/or password are wrong.\" on \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.AssertionSteps.should_contain_on_page(java.lang.String,java.lang.String,java.lang.String)"
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
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Users with blank username and blank password should not be able to login.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters \"username\" as \"\" on \"Login\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password\" as \"\" on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.inputSteps.user_enters_as_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button on \"Login\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.NavigationSteps.user_clicks_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"ErrorMessage\" should contain \"Login and/or password are wrong.\" on \"Login\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdiffinitions.AssertionSteps.should_contain_on_page(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});