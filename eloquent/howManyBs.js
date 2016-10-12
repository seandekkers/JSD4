function beanCount(string){
//cant use string conversion for string
//var string = String.string;
var count = 0;
//console.log(string.length);
	for(var i = 0; i <= string.length; i++){
		//console.log(string.charAt(i));
		if (string.charAt(i) == "B")
		count = 1 + count;
	}
return count;
}

function countChar(string,letter){
	var count2 = 0;
	for(var i = 0; i <= string.length; i++){
		if(string.charAt(i) == letter)
			count2 = count2 + 1;
	}
return count2;
}

//console.log(beanCount("MrBBean"));
console.log(countChar("kakkerlak", "k");