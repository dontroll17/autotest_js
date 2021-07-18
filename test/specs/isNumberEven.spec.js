const NumberValidator = require('../../app/number_validator');
const {expect} = require('chai');

describe('isNumberEvev positive and negative scenarios', function(){
	let validator;
	beforeEach(function(){
		validator = new NumberValidator();
	});
	afterEach(function(){
		validator = null;
	});

	it('should return true if number is even', function(){
		expect(validator.isNumberEven(4)).to.be.equal(true);
	});

	it('should return false if number is even', function(){
		expect(validator.isNumberEven(5)).to.be.equal(false);
	});

	it('chai test', function(){
		expect({a: 'apple', b: 43}).to.have.property('a');
	});

	it('chai test_obj', function(){
		expect({a: 'apple', b: 43}).to.have.eql({a: 'apple', b: 43});
	});

	it('chai test_arr', function(){
		expect([1, 'chai']).to.have.eql([1, 'chai']);
	});

	it('chai test_arr_length', function(){
		expect([1, 'chai']).to.have.lengthOf(2);
	});
});