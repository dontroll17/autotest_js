const { After } = require('cucumber');

After({ tags: '@google' }, async function(){
	const screenshot = await browser.takeScreenshot();
	const decodedImage = new Buffer.from(screenshot, 'base64');
	return this.attach(decodedImage, 'image/pmg');
});