module.exports = {

	tax : function(price){
		
		if(price){

			var finalPrice = 0;
			
			
			if(price <= 10){
				finalPrice = price * 0.1;
			}
			else if(price <= 20){
				finalPrice = (10 * 0.1) + (price-10)* 0.07;
			}
			else if(price <= 30){
				finalPrice = (10 * 0.07) + (price-20)* 0.05;
			}
			else if(price > 30){
				finalPrice = (10 * 0.05) + (price-30)* 0.03;
			}

			return (finalPrice).toFixed(2);

		}else{ 
			return null;
		}
	}
}