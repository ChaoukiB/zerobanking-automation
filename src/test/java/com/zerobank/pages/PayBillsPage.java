package com.zerobank.pages;

import com.zerobank.utities.ConstantVariables;
import com.zerobank.utities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class PayBillsPage extends BasePage{
    public PayBillsPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }
@FindBy(xpath = "//*[@id='alert_content']/span")
public WebElement txt_pay_successful;

    @FindBy(xpath = "//*[@id='alert_content']/span")
    public WebElement msg_addNewPayee;

    @FindBy(id = "sp_payee")
    public WebElement txt_payee ;

    @FindBy(id = "pay_saved_payees")
    public WebElement btn_pay ;

    @FindBy(id = "sp_description")
    public WebElement  txt_description;

    @FindBy(id = "sp_date")
    public WebElement  txt_date;
    @FindBy(id = "sp_amount")
    public WebElement txt_amount;

    @FindBy(id = "sp_account")
    public WebElement drpd_account ;

    public Select getAccount(){
        return new Select(drpd_account);
    }
    public Select getPayee(){
        return new Select(txt_payee);
    }
    public void enterValue(String field, String value){
        field = field.toUpperCase();
        switch (field){
            case ConstantVariables.BANK_OF_AMERICA:
                getPayee().selectByVisibleText(value);
                break;
            case ConstantVariables.SAVINGS:
                getAccount().selectByVisibleText(value);
                break;
            case ConstantVariables.AMOUNT:
                txt_amount.sendKeys(value);
                break;
            case ConstantVariables.DATE:
                txt_date.sendKeys(value);
                break;
            case ConstantVariables.DESCRIPTION:
                txt_description.sendKeys(value);
                break;
        }}

    public void validateResults(String element, String expected){
       element = element.toUpperCase();
        switch (element){
            case ConstantVariables.TITLE:
                Assert.assertEquals(expected, Driver.getDriver().getTitle());
                break;
            case ConstantVariables.MESSAGE:
                Assert.assertEquals(expected, txt_pay_successful.getText());
                break;
            case ConstantVariables.AMOUNT_EMPTY_FIELD_MESSAGE:
                Assert.assertEquals(expected, txt_amount.getAttribute("validationMessage"));
                break;
            case ConstantVariables.DATE_EMPTY_FIELD_MESSAGE:
                  Assert.assertEquals(expected, txt_date.getAttribute("validationMessage"));
                break;
            case ConstantVariables.AFTER_PAYMENT_MESSAGE:
                Assert.assertTrue(expected.contains(txt_pay_successful.getText()));
                break;
            case ConstantVariables.ADD_NEW_PAYEE_MESSAGE:
                Assert.assertEquals(expected,msg_addNewPayee.getText());
                break;
            default:
                Assert.fail("the word "+element+" not in switch");
        }
    }


        public void clickButton(String button) {
        button = button.toUpperCase();
        switch (button) {
            case ConstantVariables.PAY_BUTTON:
            btn_pay.click();
        }
        }
    }



