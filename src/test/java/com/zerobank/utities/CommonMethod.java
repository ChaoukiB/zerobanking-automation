package com.zerobank.utities;

public interface CommonMethod {
public default void enterValue(String field, String value){}
public default void clickButton(String button){}
public default void validateResults(String element, String expected){}
}
