var Toaster = require('../exercise3.js');
var expect = require('chai').expect;


describe('Testing for our toaster', function(){
	
	it('has toasting off', function() {
      	var myToaster = new Toaster();
        expect(myToaster.toasting).to.equal('off');
    });

	it('has power off', function() {
      	var myToaster = new Toaster();
        expect(myToaster.powerStatus).to.equal('off');
    });
    
    it('will switch power on/off', function(){
    	var myToaster = new Toaster();
    	expect(myToaster.power()).to.equal('on');
    });

    it('will switch power on/off', function(){
    	var myToaster = new Toaster();
    	myToaster.powerStatus = 'on';
    	expect(myToaster.power()).to.equal('off');
    });

    it('will switch toasting status if power off/on', function(){
    	var myToaster = new Toaster();
    	myToaster.powerStatus = 'off';
    	myToaster.toasting = 'on';

    	expect(myToaster.toast()).to.equal('off')
    });

    it('will turn both off, if they are both on', function(){
    	var myToaster = new Toaster();
    	myToaster.powerStatus = 'on';
    	myToaster.toasting = 'on';

    	expect(myToaster.power()).to.equal('off');
    });


});