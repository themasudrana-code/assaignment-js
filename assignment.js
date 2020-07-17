
// feetToMile function
function feetToMile(feet) {
	if (feet < (0)) {
		return 'input cannot be less than zero';
	} else {
		return (feet*0.000189394);
	}
}


// tinyFriend
function tinyFriend(arry) {
	return arry.reduce(function(prevWord, currWord) {
		if (currWord.length < prevWord.length) {
			return currWord;
		}
		else 
			return prevWord;
	})
}


//brickCalculator
 function brickCalculator(weather){
 	if (weather > 0 && weather <= 10) {
        var tenth  = (weather*15*1000);
        return tenth;
	} else if (weather > 10 && weather <= 20) {
	    var twenty  = (weather*12*1000+30000);
        return twenty;
	} else if (weather > 20 ) {
	    var thirty  = (weather*10*1000+70000);
        return thirty;
	} else {
	    var nonee  = ("anne ki moskora koren aar loi");
        return nonee;
	}
 }
var result = brickCalculator(21);
console.log(result);


// woodCalculator
function woodCalculator(chair, table, khat){
    var isChair= chair*1;
    var isTable= table*3;
    var isKhat= khat*5;
    var resulte= isChair+isTable+isKhat;
    return resulte;
}
var result= woodCalculator(4, 7, 10);
console.log(result);