describe('basic test', () => {
	it('should check title', async () => {
		await browser.get('https://www.google.ru/');
		const title = await browser.getTitle();
		expect(title).toEqual("Google");
	});
});