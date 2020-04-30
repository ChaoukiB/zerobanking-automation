package com.zerobank.utities;


import com.zerobank.pages.BasePage;
import com.zerobank.pages.LoginPage;
import org.junit.Assert;

public class PageObjects {

    public static BasePage getObject(String pageName){
        pageName = pageName.toUpperCase();
        switch (pageName){
            case ConstantVariables.LOGIN:
                return new LoginPage();
            default:
                return new BasePage();
        }

    }
}

