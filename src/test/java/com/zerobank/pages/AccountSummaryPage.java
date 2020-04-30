package com.zerobank.pages;

import com.zerobank.utities.ConstantVariables;
import com.zerobank.utities.Driver;
import io.cucumber.java.bs.A;
import org.junit.Assert;

public class AccountSummaryPage extends BasePage{

    public void validateResults(String element, String expected){
       element = element.toUpperCase();
       switch (element){
           case ConstantVariables.TITLE :
               Assert.assertEquals(expected, Driver.getDriver().getTitle());
       }
    }
}
