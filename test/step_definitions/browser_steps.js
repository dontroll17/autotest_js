const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000);

When(/^I open google.com$/, function(){
	return browser.get('https://www.google.com/')
});

Then(/^Page title should be "Google"$/, async function(){
	const pageTitle = await browser.getTitle();
	expect(pageTitle).to.be.equal("Google");
});

When(/^I wait 10 seconds$/, function(){
	return browser.sleep(10000);
});