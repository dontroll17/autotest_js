const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000);

When(/^I open "([^"]*)" url$/, function(url){
	return browser.get(url);
});

Then(/^Page title should be "([^"]*)"$/, async function(title){
	const pageTitle = await browser.getTitle();
	expect(pageTitle).to.be.equal(title);
});

When(/^I wait "([^"]*)" seconds$/, function(timeInSeconds){
	return browser.sleep(timeInSeconds * 1000);
});