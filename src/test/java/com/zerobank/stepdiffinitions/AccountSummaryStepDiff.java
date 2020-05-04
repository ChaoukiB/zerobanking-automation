package com.zerobank.stepdiffinitions;

import com.zerobank.pages.BasePage;
import com.zerobank.utities.PageObjects;
import io.cucumber.java.en.Then;

import java.util.List;

public class AccountSummaryStepDiff {

    @Then("{string} table must have following columns on {string} page")
    public void table_must_have_following_columns_on_page(String element, String page, List<String> tableColumns) {
        BasePage pageName = PageObjects.getObject(page);
        pageName.validateResultsList(element,tableColumns);
    }
}
