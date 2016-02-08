module.exports = {
	add : function(a,b){
		return a+b;
	},
	subtract : function(a,b){
		return a-b;
	},
	multiply : function(a,b){
		return a*b;
	},
	divide : function(a,b){
		if(a > 0 && b > 0){
			return a/b;
		}else{
			return null;
		}
	},
	power : function(a,b){
		answer = a;
		for(var i = 0; i < b-1; i++){
			answer *= a;
		}
		return answer;
	},
	squareRoot : function(a){
		return Math.sqrt(a);
	}
	
};