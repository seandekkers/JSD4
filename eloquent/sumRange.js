function range(start, end, step){
	var numArray = [];
	var end1 = end;
	if (step == null) step = 1;
	if (step == 0) step = 1;
	
	if (step > 0){
	for(var i = start; i <= end1; i += step){
		console.log(i);
		numArray.push(i);
		//console.log(numArray.length);	
		}
	}else {
		for(var i = start; i >= end1; i += step){
		console.log(i);
		numArray.push(i);
	}
	}

	return numArray;
}

function sum(numArray){
	var sumRange = 0;
	for(var i = 0; i < numArray.length; i++){
		sumRange += numArray[i];
		//console.log(sumRange);
	}
//console.log(sumRange);
	return sumRange;

}
console.log(sum(range(5,2, -1)));


