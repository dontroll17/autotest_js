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

@yandex
Scenario: Page title yandex
	Given I open "https://yandex.ru/" url
	Then Page title should be "Яндекс"

	When I wait "3" seconds