const fs = require('fs');

class Database {
	constructor(filename){
		this.filename = filename;
		this.data = {};
	}

	save(callback){
		fs.writeFile(this.filename, JSON.stringify(this.data), callback);
	}

	insert(key, value){
		this.data[key] = value;
	}
}

module.exports = Database;