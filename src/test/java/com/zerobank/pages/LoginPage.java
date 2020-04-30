package com.zerobank.pages;


import com.zerobank.utities.ConstantVariables;
import com.zerobank.utities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage{
    public LoginPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//input[@id='user_login']")
    public WebElement txt_login;
    @FindBy(id=  "user_password")
    public WebElement  txt_password;    // ErrorMessage
    @FindBy(xpath=  "//input[@name='submit']")
    public WebElement  btn_login;
    @FindBy(className = "alert alert-error")
    public WebElement  msg_error;

    public void enterValue(String field, String value){
        field = field.toUpperCase();
        switch (field){
            case ConstantVariables.USERNAME:
                txt_login.sendKeys(value);
                break;
            case ConstantVariables.PASSWORD:
                txt_password.sendKeys(value);
        }
    }
    public void clickButton(String button){
        button = button.toUpperCase();
        switch (button){
            case ConstantVariables.LOGIN:
                btn_login.click();
                break;
        }

    }

    public void validateResults(String element, String expected){
        element = element.toUpperCase();
        switch (element){
            case ConstantVariables.ERROR_MESSAGE:
                Assert.assertEquals(expected, msg_error.getText());

        }
    }

}
