package com.zerobank.pages;


import com.zerobank.utities.ConfigurationReader;
import com.zerobank.utities.ConstantVariables;
import com.zerobank.utities.Driver;
import com.zerobank.utities.PageObjects;
import io.cucumber.java.en.When;
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
    public WebElement  txt_password;

    @FindBy(xpath=  "//input[@name='submit']")
    public WebElement  btn_login;

    @FindBy(xpath = "//form[@id='login_form']/div[@class='alert alert-error']")
    public WebElement  msg_error;


    @When("user enters {string} as {string} on {string} page")
    public void user_enters_as_on_page(String field, String value, String page) {

        BasePage pageName = PageObjects.getObject(page);

        if (value.equalsIgnoreCase("user_username")){
            value = ConfigurationReader.getProperty("user_username");
        }else  if (value.equalsIgnoreCase("user_password")){
            value = ConfigurationReader.getProperty("user_password");
        }

        pageName.enterValue(field, value);

    }

    @Override
    public void enterValue(String field, String value){
        field = field.toUpperCase();
        switch (field){
            case ConstantVariables.USERNAME:
                txt_login.sendKeys(value);
                break;
            case ConstantVariables.PASSWORD:
                txt_password.sendKeys(value);
                break;
            default:
                Assert.fail("There is no such a " + field + " in this switch statement");
        }}
    public void clickButton(String button){
        button = button.toUpperCase();
        switch (button){
            case ConstantVariables.LOGIN:
                btn_login.click();
                break;
            default:
                Assert.fail("There is no a " + button + " in this switch statement");
        }

    }

    public void validateResults(String element, String expected){
        element = element.toUpperCase();
        switch (element){
            case ConstantVariables.ERROR_MESSAGE:
                Assert.assertEquals(expected, msg_error.getText());
                Assert.assertTrue(msg_error.isDisplayed());
                break;
            default:
                Assert.fail("There is no such " + element + " in this switch statement");
        }
    }

}
