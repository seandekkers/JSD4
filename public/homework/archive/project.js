function add(x,y){
	return x + y;

}

function subtract(x,y){
	if (x > y)
		return x - y;
	else
		return y - x;
}

function multiply(x,y){
	return x * y;
	
}
function divide(x,y){
		return Math.ceil(x / y);

	
}
function remainder(x,y){
	return x % y;
}
console.log(add(1,3));
console.log(subtract(1,30));
console.log(multiply(23,40));
console.log(divide(40,3));
console.log(remainder(70,18));