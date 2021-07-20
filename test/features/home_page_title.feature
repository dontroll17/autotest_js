@smoke
Feature: Home Page Title

Scenario: Page title
	Given I open google.com
	Then Page title should be "Google"
	When I wait 10 seconds