package com.zerobank.stepdiffinitions;

import com.zerobank.pages.BasePage;
import com.zerobank.utities.ConfigurationReader;
import com.zerobank.utities.PageObjects;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class inputSteps {
    @When("user enters {string} as {string} on {string} page")
    public void user_enters_as_on_page(String field, String value, String page) {

        BasePage pageName = PageObjects.getObject(page);

        if (value.equalsIgnoreCase("user_username")){
            value = ConfigurationReader.getProperty("user_username");
        }else  if (value.equalsIgnoreCase("user_password")){
               value = ConfigurationReader.getProperty("user_password");
        }

        pageName.enterValue(field, value);

    }

}
