package com.zerobank.utities;


import com.zerobank.pages.AccountActivityPage;
import com.zerobank.pages.AccountSummaryPage;
import com.zerobank.pages.BasePage;
import com.zerobank.pages.LoginPage;
import org.junit.Assert;

public class PageObjects {

    public static BasePage getObject(String pageName){
        pageName = pageName.toUpperCase();
        switch (pageName){
            case ConstantVariables.LOGIN:
                return new LoginPage();
            case ConstantVariables.ACCOUNT_SUMMARY:
                return new AccountSummaryPage();
            case ConstantVariables.BASE:
                return new BasePage();
            case ConstantVariables.ACCOUNT_ACTIVITY:
                return  new AccountActivityPage();
            default:
                Assert.fail("There is no "+ pageName+"in this switch statement");
        }
      return new BasePage();
    }
}

