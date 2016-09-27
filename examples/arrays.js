/**
* Arrays
* Most of your answers should be stored in variables called q1, q2 etc..
* and the variables printed to the console.
*
* For example:
* var q0 = "abc"
* console.log("Question 0" + q0)
*/

/** Question 1
* Create an array of image source filenames.
* Use "image1.png", "image2.png", and "image3.png" as the array values.
*/
var images = ["image1.png","image2.png","image3.png"];


/** Question 2
* Using the array from Question 1, store the first element of the array
* in variable q2.
*/
var q2 = images[0];


/** Question 3
* Get the length of the first array (number of elements in the array)
* and store it in variable q3
*/
console.log(images.length);

/** Question 4
* Using the array from Question 1, store the last element of the array
* in variable q4. Hint: How can we get the number of elements in the array?
*/
var q4 = images.pop();

console.log(q4,images.length);

var a = [1,2,3,5,8,13,21];





/*

var total = 0;
a.forEach(add);

function add(number, index) {
	total+= number;
	console.log(index, number);
}


//anonymous function

var days = ["monday", "tuesday", "wednesday", "thursday"];

days.forEach(function(day){
	console.log(day);
});

//for loops
var colors = ["red","blue","green","cyan"];
for(var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}
*/
// ____________________________________________________________________________

/**
* Arrays + Iteration
*/



/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/


var array = [1,2,3,4];
//for(var i = 0; i < array.length; i++)
	
var array2 = [];
array.forEach(function(number){
	array2.push(number += 1);
});

console.log(array2);

/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/
console.log(array.reduce(function(a,b){
	return a + b;
	//console.log(number);
})/array.length);


