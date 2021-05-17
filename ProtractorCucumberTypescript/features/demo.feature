Feature: i am going to validate the calc app

  @CalculatorTest
  Scenario: calculate add functionality
    Given will navigate to "calc"
    When add two numbers "2" and "3"
    Then output will be "5"

  @CalculatorTest
  Scenario: calculate add functionality
    Given will navigate to "calc"
    When add two numbers "7" and "9"
    Then output will be "16"

  @CalculatorTest
    Scenario Outline: calculate add functionality
      Given will navigate to "calc"
      When add two numbers "<key1>" and "<key2>"
      Then output will be "<result>"

      Examples:
        | key1 | key2 | result |
        |  4   |  5   |   9    |
        |  6   |  7   |   13    |
        |  8   |  9   |   16    |


  @AngularTest
  Scenario: checking angular websites
     Given will navigate to "angular"
    When  i click on the header link
     And Navigate to next page
      Then You will enter "Hello" in search box
