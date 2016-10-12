function zeroPad(num,width){
	var numString = String(num);
	while(numString.length < width)
		numString = "0" + numString;
	console.log(numString);
	return numString;

}
zeroPad(7,19);