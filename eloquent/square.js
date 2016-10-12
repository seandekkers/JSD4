function power(base, exponent){
	result = base;
	if (exponent == undefined)
		exponent = 2;
	for(i = 0; i <= exponent; i++)
		result *= base;
	return result;
}

console.log(power(2,4));