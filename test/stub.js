const sinon = require('sinon');
const Database = require('../app/data_base');
const fs = require('fs');
const database = new Database('../app/sample.json');

//replaces the method with its own function
const stub = sinon.stub(fs, 'writeFile').callsFake((file, data, callback) => {
	callback();
});
const saveDone = sinon.spy();

database.insert('name', 'Cоюз 11');
database.save(saveDone);

sinon.assert.calledOnce(stub);
sinon.assert.calledOnce(saveDone);

fs.writeFile.restore();