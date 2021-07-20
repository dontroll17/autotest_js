const path = require('path');
const yargs = require('yargs').argv;

exports.config = {
	allScriptsTimeout: 60000,
	getPageTimeout: 60000,
	specs: [path.resolve('./test/features/**/*.feature')],
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	capabilities: {
		shardTestFiles: yargs.instances > 1,
		maxInstances: yargs.instances || 1,
		browserName: 'chrome',
		chromeOptions: {
			args: ['--no-sandbox', '--window-size=1920,1080']
		}
	},
	disableChecks: true,
	directConnect: true,
	cucumberOpts: {
		require: [path.resolve('./test/step_definitions/**/*.js')],
		ignoreUncaughtExceptions: true,
		format: ['json:../../test/reports/report.json'],
		tags: yargs.tags || "@smoke"
	},
	onPrepare: () => {
		return browser.waitForAngularEnabled(false);
	}
};