package com.zerobank.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true ,
        plugin ={
                "pretty",
                "html:target/default-cucumber-reports",
                "rerun:target/rerun.txt",
                "json:target/cucumber.json"
        },

        features = "src/test/resources/feature",
        glue = "com/zerobank/stepdiffinitions",
        dryRun =false,
        tags =  "@jira"
)
public class CukesRunner {

}
