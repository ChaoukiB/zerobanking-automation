package com.zerobank.stepdiffinitions;

import com.zerobank.pages.BasePage;
import com.zerobank.utities.PageObjects;
import io.cucumber.java.en.Then;

public class AssertionSteps {
    @Then("{string} should contain {string} on {string} page")
    public void should_contain_on_page(String element, String expected, String page) {
        BasePage pageName = PageObjects.getObject(page);
        pageName.validateResults(element, expected);

    }
}
