const assert = require('assert');
const Todo = require('../../app/todo');
const todo = new Todo();
let testsComplited = 0;

function deleteTest(){
	//create elements to delete
	todo.add('Delete this');
	//check 
	assert.equal(todo.length, 1, '1 item should exist');
	//delete all
	todo.deleteAll();
	//check
	assert.equal(todo.length, 0, 'no items should exist');
	//count +1
	testsComplited++;
}
function addTest(){
	//delete all
	todo.deleteAll();
	//create new elemen
	todo.add('added');
	//check
	assert.notEqual(todo.getCount, 0, 'one item shouls exist');
	//count +1
	testsComplited++;
}
function doAsyncTest(cb){
	todo.doAsync(value => {
		//check
		assert.ok(value, 'Callback should be passed true');
		//count +1
		testsComplited++;
		//initiates callback after finish
		cb();
	});
}

deleteTest();
addTest();
doAsyncTest(function(){
	console.log(`Complite ${testsComplited} tests`);
});