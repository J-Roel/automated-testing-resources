var Validator = require('../exercise4');
var expect = require('chai').expect;


describe('Validation Tests', function(){
	it('should beable to set the min value', function(){
		var valObj = new Validator();
		valObj.setMin(2);
		expect(valObj.getMin()).to.equal(2);
	});
	it('should beable to set the max value', function(){
		var valObj = new Validator();
		valObj.setMax(10);
		expect(valObj.getMax()).to.equal(10);
	});

	//Arrays
	it('should set invalid array values', function(){
		var valObj = new Validator();
		var myArr = [2, 5, 8, 10, 15];
		valObj.setInvalidArr(myArr);
		expect(valObj.getInvalidArr()).to.equal(myArr);
	});
	it('should set valid array values', function(){
		var valObj = new Validator();
		var myArr = [3, 4, 7, 11, 14];
		valObj.setValidArr(myArr);
		expect(valObj.getValidArr()).to.equal(myArr);
	});

	//Track validation usage
	it('min validation', function(){
		var valObj = new Validator();
		valObj.setMin(2);

		expect(valObj.validateState(8, 'min')).to.equal('Good');
	});
	it('max validation', function(){
		var valObj = new Validator();
		valObj.setMax(10);

		expect(valObj.validateState(18, 'max')).to.equal('Over Max');
	});
	it('valid validation', function(){
		var valObj = new Validator();
		var myArr = [3, 4, 7, 11, 14];

		valObj.setValidArr(myArr);

		expect(valObj.validateState(18, 'valid')).to.equal('Error');
	});
	it('invalid validation', function(){
		var valObj = new Validator();
		var myArr = [3, 4, 7, 11, 14];

		valObj.setInvalidArr(myArr);

		expect(valObj.validateState(18, 'invalid')).to.equal('Error');
	});



});