package com.zerobank.stepdiffinitions;

import com.zerobank.pages.BasePage;
import com.zerobank.utities.PageObjects;
import io.cucumber.java.en.Then;

import java.util.List;

public class AccountSummaryStepDiff {
    @Then("{string} should contain the following information on {string} page")
    public void should_contain_the_following_information_on_page(String element, String page, List<String> accountType) {
        BasePage pageNmae = PageObjects.getObject(page);
        pageNmae.validateResults(element, accountType);
    }

    @Then("{string} table must have columns")
    public void table_must_have_columns(String element,String  page ,List<String> tableColumns) {
        BasePage pageName = PageObjects.getObject(page);
        pageName.validateResults(element, tableColumns);
    }
}
