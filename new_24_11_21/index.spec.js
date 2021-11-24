const Todos = require('./index');
const assert = require('assert').strict;
const fs = require('fs');

describe("test", () => {
	it('should be able to add and complete TODOs', () => {
		let todos = new Todos();
		assert.strictEqual(todos.list().length, 0);

		todos.add('new el');
		assert.strictEqual(todos.list().length, 1);
		assert.deepStrictEqual(todos.list(),
			[{title: 'new el', completed: false}]);

		todos.add('test');
		assert.strictEqual(todos.list().length, 2);
		assert.deepStrictEqual(todos.list(),
			[
				{title: 'new el', completed: false},
				{title: 'test', completed: false}
			]
		);
		todos.add('run')
		todos.complete('run');
		assert.deepStrictEqual(todos.list(),
			[
				{title: 'new el', completed: false},
				{title: 'test', completed: false},
				{title: 'run', completed: true}
			]
		);
	});
});

describe('complete()', () => {
	it("should fail if there are no TODOs", () => {
		let todos = new Todos();
		const expectedError = new Error('You have no TODO stored. Add new one!');

		assert.throws(() => {
			todos.complete("dosn`t exist");
		}, expectedError);
	});
});

describe('saveToFile()', () => {
	it('should save a single TODO', async () => {
		let todos = new Todos();
		todos.add('save a CSV');
		await todos.saveToFile();

		assert.strictEqual(fs.existsSync('todos.csv'), true);
        let expectedFileContents = "Title completed\nsave a CSV false\n";
        let content = fs.readFileSync("todos.csv").toString();
        assert.strictEqual(content, expectedFileContents);
	});

	it('should save a single TODO', async () => {
		let todos = new Todos();
		todos.add('save a CSV');
		todos.complete('save a CSV');
		await todos.saveToFile();

		assert.strictEqual(fs.existsSync('todos.csv'), true);
        let expectedFileContents = "Title completed\nsave a CSV true\n";
        let content = fs.readFileSync("todos.csv").toString();
        assert.strictEqual(content, expectedFileContents);
	});
});