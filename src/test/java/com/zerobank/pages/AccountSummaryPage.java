package com.zerobank.pages;

import com.zerobank.utities.BrowserUtils;
import com.zerobank.utities.ConstantVariables;
import com.zerobank.utities.Driver;
import io.cucumber.java.bs.A;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class AccountSummaryPage extends BasePage{
  public AccountSummaryPage(){
      PageFactory.initElements(Driver.getDriver(), this);
  }
  @FindBy(tagName ="h2")
  public List<WebElement> hdr_accountType;

    @FindBy(xpath ="(//table)[3]/thead/tr/th")
    public List<WebElement> hdr_tableColumns;


    public void validateResults(String element, String expected){
       element = element.toUpperCase();
       switch (element){
           case ConstantVariables.TITLE :
               Assert.assertEquals(expected, Driver.getDriver().getTitle());
       }
    }

    public void validateResultsList(String element, List<String> expectedList){
        element = element.toUpperCase();
        switch (element){
            case ConstantVariables.ACCOUNT_TYPE:
                Assert.assertEquals(expectedList, BrowserUtils.getElementsText(hdr_accountType));
                break;
            case ConstantVariables.CREDIT_ACCOUNT:
      Assert.assertEquals(expectedList, BrowserUtils.getElementsText(hdr_tableColumns));
      break;
            default:
                Assert.fail("There is no such " + element + " in this switch statement");
        }
    }
}
