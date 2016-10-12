var numbers = [1,2,3,5,6,7,8,47], sum = 0;


console.log(numbers.reduce(function(a,b){
	return a + b;
}));