var isEven = function(input){
	var even = "false";
	if (input == 0)
		 even = "true";
	else if (input == 1)
		even = "false";
	else ((input % 2) == 0)
		even = "true";
	console.log(even);
	return(even);

};
console.log(isEven(20));