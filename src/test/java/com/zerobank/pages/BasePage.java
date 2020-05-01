package com.zerobank.pages;

import com.zerobank.utities.CommonMethod;
import com.zerobank.utities.ConstantVariables;
import com.zerobank.utities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasePage implements CommonMethod {
    public BasePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//div[@class='span12']/div/ul/li/a[contains(text(),'Account Activity')]")
    public WebElement tab_accountActivity;
    @FindBy(id = "pay_bills_tab")
    public WebElement tab_PayBills;

    public void navigateTo(String page){
        page = page.toUpperCase();
        switch (page){
            case ConstantVariables.ACCOUNT_ACTIVITY:
                tab_accountActivity.click();
                break;
            case ConstantVariables.PAY_BILLS :
                    tab_PayBills.click();
                break;
            default:
                Assert.fail("There is no such " + page + " in this switch statement");
        }
    }
}
