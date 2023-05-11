Feature: Login to Application

As a valid user
I want to log in to the Application

Background:
    Given user open the login Page


@case1
Scenario Outline: Valid Login
    Given user open the login Page
    When user enter a username "<userName>"
    And user enter a password "<password>"
    And user click the sign-in button
    Then user should be able to login

Examples:
| userName   | password                |
| Admin  | admin123 |


@case2

Scenario Outline: Invalid Login
    Given user open the login Page
    When user enter a username "<userName>"
    And user enter a password "<password>"
    And user click the sign-in button
    Then error should displayed as "<error_message>"

Examples:
| userName   | password                 | error_message       |
| Admin123  | AdminAdmin_ | Invalid credentials |
|     abc     | sure_id123 | Invalid credentials |
| 123456  |   0000        | Invalid credentials |

@case3

Scenario: Reset Password
  Given I am on the login page
  When I click on the forgot password link
  Then I should be redirected to the reset password page
  And Link successfully sent