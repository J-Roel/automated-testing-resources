var Toaster = function(){
	
	var vm = this;

	vm.powerStatus = 'off';
	vm.toasting = 'off';
	vm.power = power;
	vm.toast = toast;

	function power(){

		console.log(vm.powerStatus, vm.toasting);
		
		if (vm.powerStatus === 'on' && vm.toasting === 'on'){
			vm.powerStatus = 'off';
			vm.toasting = 'off';
		} else {
			switch (vm.powerStatus){
				case 'off' :
					vm.powerStatus = 'on';
					break;
				case 'on' :
					vm.powerStatus = 'off';
					break;
			}
		};
		console.log(vm.powerStatus);
		return vm.powerStatus;
	}

	function toast(){
		if(vm.powerStatus === 'off' ){
			vm.toasting = 'off'
		} else if( vm.powerStatus === 'on' ){
			switch(vm.toasting){
				case 'off' :
					vm.toasting = 'on';
					break;
				case 'on' :
					vm.toasting = 'off';
					break;
			}
		}
		
		return vm.toasting;
	}

};


module.exports = Toaster;