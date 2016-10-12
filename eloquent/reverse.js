function reverse(array){
	var newArray = [];
	for(var i = array.length; i > 0; i = i - 1){
		//console.log(newArray.length);
		//var index = i - 1;
		newArray.push(array[i - 1]);
		//console.log(i);
		//newarray.unshift(array[i]);
	}
	return newArray; 
}

function reverseArray(array){
	
	for(var i = 0; i < Math.floor(array.length/2); i++){
		cache = array[i];
		console.log(cache);
		console.log(array[array.length-1-i]);
		array[i] = array[array.length - 1 -i];
		array[array.length - 1 -i] = cache

	}
	//console.log(popIndex);

	return array;
}

var testArrary = ["A","B","C","D","E"];
console.log(reverseArray(testArrary));