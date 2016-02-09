



var Validator = function(){

	var vm = this;

	vm.min;
	vm.max;
	vm.invalidNums = [];
	vm.validNums = [];
	vm.state = '';
	vm.value;

	return{


		//MIN/MAX
		setMin : function(value){
			vm.min = Number(value);
		},
		getMin : function(){
			return vm.min;
		},
		setMax : function(value){
			vm.max = Number(value);
		},
		getMax : function(){
			return vm.max;
		},

		//ARRAYS
		setInvalidArr : function(values){
			vm.invalidNums = values;
		},
		getInvalidArr : function(){
			return vm.invalidNums;
		},
		setValidArr : function(values){
			vm.validNums = values;
		},
		getValidArr : function(){
			return vm.validNums;
		},

		//STATE
		validateState : function(value, state){
			vm.state = state;
			switch(vm.state){
				
				case 'min' : 
					if(value < this.getMin())
					{
						return 'Under Min';
					}else{
						return 'Good';
					}
					break;

				case 'max' :
					if(value > this.getMax())
					{
						return 'Over Max';
					}else{
						return 'Good';
					}
					break;
				case 'valid' :
					
					var arr = this.getValidArr();
					for(var i = 0; i < arr.length; i++){
						if( value === arr[i]){
							return 'Valid Match';
						} else {
							return 'Error';
						}
					}
				
					// this.getValidArr().forEach(function(curVal){
					// 	if(curVal == value){
					// 		return 'Valid Match';
					// 	}else{
					// 		return 'Not a valid value';
					// 	}
					// });
					break;

				case 'invalid' :
					var arr = this.getInvalidArr();
					for(var i = 0; i < arr.length; i++){
						if( value === arr[i]){
							return 'Invalid Match';
						} else {
							return 'Error';
						}
					}

					// this.getInvalidArr().forEach(function(curVal){
					// 	if(curVal == value){
					// 		return 'Invalid Match';
					// 	}else{
					// 		return 'Error';
					// 	}
					// });
					break;


			}//end switch
		
				
			
		}//End function

	}//end return
	

}



module.exports = Validator;
