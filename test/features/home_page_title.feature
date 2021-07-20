@smoke
Feature: Home Page Title

Scenario: Page title
	Given I open "https://www.google.com/" url
	Then Page title should be "Google"
	When I wait "3" seconds

Scenario: Page title
	Given I open "https://bash.im/" url
	Then Page title should be "Цитатник Рунета"
	When I wait "3" seconds