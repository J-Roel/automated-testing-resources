var math = require('../exercise1.js');
var expect = require('chai').expect;


describe('Testing math library', function(){

	describe('testing addition', function(){
		it('should add 1+1 to equal 2', function(){	
			expect(math.add(1,1)).to.equal(2);
		});
		it('should add 7+3 to equal 10', function(){	
			expect(math.add(7,3)).to.equal(10);
		});

	});
	describe('testing subtraction', function(){
		it('should subtract 2-1 = 1', function(){
			expect(math.subtract(2,1)).to.equal(1);
		});
		it('should subtract 20-11 = 9', function(){
			expect(math.subtract(20,11)).to.equal(9);
		});
	});
	describe('testing multiply', function(){
		it('should multiply 12*2 = 24', function(){
			expect(math.multiply(12,2)).to.equal(24);
		});
		it('should multiply 18*21 = 378', function(){
			expect(math.multiply(18,21)).to.equal(378);
		});
	});
	describe('testing divide', function(){
		it('should divide 12/2=6', function(){
			expect(math.divide(12,2)).to.equal(6);
		});
		it('should divide 130/10=13', function(){
			expect(math.divide(130,10)).to.equal(13);
		})
	});
	describe('testing power', function(){
		it('should power 8^2=64', function(){
			expect(math.power(8,2)).to.equal(64);
		});
		it('should power 3^4=81', function(){
			expect(math.power(3,4)).to.equal(81);
		});
	});
	describe('testing square root', function(){
		it('should square root 16=4', function(){
			expect(math.squareRoot(16)).to.equal(4);
		});
		it('should square root ', function(){
			expect(math.squareRoot(25)).to.equal(5);
		});
	});



});