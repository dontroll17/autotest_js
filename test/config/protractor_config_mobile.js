exports.config = {
	seleniumAddress: 'http://localhost:4723/wd/hub',

	capabilities: {
		browserName: 'chrome',
		platformName: 'Android',
		deviceName: 'placeHolder'
	},

	specs: {
		'../mobile_spec.js'
	},

	onPrepare: () => {
		browser.wait.ForAngularEnabled(false);
	},

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
}