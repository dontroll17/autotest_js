/**
 *
 *Methods for validating numbers
 * @class NumbersValidator 
 */

class NumbersValidator {
	/**
	 *Creates an instance of NumbersValidator
	 * @memberof NumbersValidator
	 */
	constructor(){
	
	};
	/**
	 * 
	 *
	 * @param {number} num number to check
	 * @returns {Boolean} true is number is even
	 * @memberof NumberVlidatior
	 */
	isNumberEven(num){
		const typeofVariable = typeof num;
		if(typeofVariable !== 'number'){
			throw new Error(`${num} is not of type 'number' it is ${typeofVariable}`);
		}else {
			return num % 2 === 0;
		}
	}

	/**
	 * 
	 *
	 * @param {Array<Number>} arrayOfNumber array of numbers to go through
	 * @returns {Array<Number>} array of even numbers
	 * @memberof NumberVlidatior
	 */
	getEvenNumbersFromArray(arrayOfNumbers){
		if(Array.isArray(arrayOfNumbers) && arrayOfNumbers.every((item) => typeof item == 'number')){
			const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
			return arrayOfEvenNumbers;
		}else{
			throw new Error(`${arrayOfNumbers} is not an array of 'numbers'`)
		}
	}

}

module.exports = NumbersValidator;