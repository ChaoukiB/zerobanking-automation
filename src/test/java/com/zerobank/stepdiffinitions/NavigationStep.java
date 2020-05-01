package com.zerobank.stepdiffinitions;

import com.zerobank.pages.BasePage;
import com.zerobank.utities.PageObjects;
import io.cucumber.java.en.When;

public class NavigationStep {

    @When("user navigates to {string} page")
public void user_navigates_to_page(String page) {
        BasePage pageName = PageObjects.getObject(page);
        pageName.navigateTo(page);
}
}
