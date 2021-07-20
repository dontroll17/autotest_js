const sinon = require('sinon');
const Database = require('../app/data_base');
const fs = require('fs');
const database = new Database('../app/sample.json');

const fsWriteFileSpy = sinon.spy(fs, 'writeFile');
const saveDone = sinon.spy();

database.insert('name', 'John Dow');
database.save(saveDone);

sinon.assert.calledOnce(fsWriteFileSpy);

fs.writeFile.restore();