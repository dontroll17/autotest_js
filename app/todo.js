class Todo{
	constructor(){
		this.todos = [];
	}
	//add new elements
	add(item){
		if(!item) throw new Error('Todo.prototype.add require an item');
		this.todos.push(item);
	}
	//delete all elements
	deleteAll(){
		this.todos = [];
	}
	//defines number of elements
	get length(){
		return this.todos.length;
	}
	//performs a callback after 2 sec
	doAsync(cb){
		setTimeout(cb, 2000, true);
	}
}

module.exports = Todo;