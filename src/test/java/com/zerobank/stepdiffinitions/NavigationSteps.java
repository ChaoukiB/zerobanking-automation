package com.zerobank.stepdiffinitions;


import com.zerobank.pages.BasePage;
import com.zerobank.pages.LoginPage;
import com.zerobank.utities.ConfigurationReader;
import com.zerobank.utities.Driver;
import com.zerobank.utities.PageObjects;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class NavigationSteps {
    @Given("user is on {string} page")
    public void user_is_on_page(String string) {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @When("user clicks on {string} button on {string} page")
    public void user_clicks_on_button_on_page(String button, String page) {
        BasePage pageName = PageObjects.getObject(page);
        pageName.clickButton(button);
    }
}
