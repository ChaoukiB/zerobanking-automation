package com.zerobank.pages;

import com.zerobank.utities.Driver;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class PayBillsPage extends BasePage{
    public PayBillsPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }
@FindBy(id = "alert_content")
public WebElement text_pay_successful ;

    @FindBy(id = "sp_amount")
    public WebElement amount_box ;

    @FindBy(id = "pay_saved_payees")
    public WebElement pay_button ;

    @FindBy(id = "sp_account")
    public WebElement txt_account ;
    @FindBy(id = "sp_date")
    public WebElement txt_date;

    @FindBy(id = "sp_account")
    public WebElement drpd_account ;

    public Select getAccount(){
        return new Select(drpd_account);
    }

    @When("user enters {string} as {string} on {string} page")
    public void user_enters_as_on_page(String field, String value, String page) {

        field = field.toUpperCase();
        switch (field){
            case "Payee":
                ;
                break;
            case "Account":
                getAccount().selectByVisibleText(value);
                break;
            case "Accout":
                getAccount().selectByVisibleText(value);
                break;
            case "Accot":
                getAccount().selectByVisibleText(value);
                break;
        }


    }
}
