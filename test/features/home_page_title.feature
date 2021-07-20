@smoke
Feature: Home Page Title

@google
Scenario: Page title google
	Given I open "https://www.google.com/" url
	Then Page title should be "Google"
		And Page title should not be "Boogle"
	When I wait "3" seconds

@bash
Scenario: Page title bash
	Given I open "https://bash.im/" url
	Then Page title should be "Цитатник Рунета"
	When I wait "3" seconds

@scenarioOutline
Scenario Outline: Page title
	Given I open "<URL>" url
	Then Page title should be "<Title>"
	When I wait "3" seconds

	Examples:
	| URL      			  | Title   |
	| https://yandex.ru/  | Яндекс  |