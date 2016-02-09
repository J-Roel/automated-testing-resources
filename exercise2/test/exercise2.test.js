var taxCalc = require('../exercise2.js');
var expect = require('chai').expect;


	describe('tax calculator test', function(){
		it('should tax of $20 = 70cents', function(){
			expect(taxCalc.tax(3)).to.equal('0.30');
		});
	});
