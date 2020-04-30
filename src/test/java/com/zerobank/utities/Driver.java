package com.zerobank.utities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.opera.OperaDriver;

public class Driver {
 private Driver(){}
    private static ThreadLocal<WebDriver> driverPool = new ThreadLocal<>();


    public static WebDriver getDriver(){


        if (driverPool.get()== null) {
            String browser = ConfigurationReader.getProperty("browser");
            switch (browser.toLowerCase()) {
                case "chrome":
                    WebDriverManager.chromedriver().setup();
                    driverPool.set(new ChromeDriver());
                    break;
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driverPool.set(new FirefoxDriver());
                    break;
                case "edge":
                    WebDriverManager.edgedriver().setup();
                    driverPool.set(new EdgeDriver());
                    break;
                case "opera":
                    WebDriverManager.operadriver().setup();
                    driverPool.set(new OperaDriver());
                    break;
            }
        }
            return driverPool.get() ;
    }

    public static void closeDriver(){
        if (driverPool!= null){
            driverPool.get().close();
            driverPool.remove(); ;
        }
    }

}
