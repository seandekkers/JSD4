/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/


// console.log("test");

// function Monkey(name, species, foodsEaten){
// 	this.name = name;
// 	this.species = species;
// 	this.foodsEaten = foodsEaten;

// }

// Monkey.prototype.eatSomething = function(food){
// 	this.foodsEaten = food;
// }
// Monkey.prototype.introduce = function(){
// 	console.log("My name is " + this.name + " and I am a " + this.species + ", Today I have eaten " + this.foodsEaten);
// }

// var monkey1 = new Monkey("Bob", "Baboon", "Bananas");
// var monkey2 = new Monkey("Joe", "Spider", "Carrots");
// var monkey3 = new Monkey("Jim", "Chimpanzee", "Grapes");


// function Person(name, age, gender){
// 	this.name = name;
// 	this.age = age;
// 	this.gender = gender;
// }

// Person.prototype.speak = function(){
// 	console.log("my name is " + this.name + " and i am a " + this.age + " " + this.gender);
// }

// Person.prototype.growYears = function(years){
// 	this.age += years;
// }

// var person1 = new Person("Jill", 21, "female");
// var person2 = new Person("James", 32, "male");
// var person3 = new Person ("Alex", 26, "female");



// console.log("person 1 is :" + person1.age + " years old");
// person1.growYears(3);
// console.log("person 1 is now :" + person1.age + " years old");

// console.log(person1.name + person1.age + person1.gender);

// person2.speak();

// function Car(color, make, model, miles){
// 	this.color = color;
// 	this.make = make;
// 	this.model = model;
// 	this.miles = miles;
// }

// Car.prototype.about = function(){
// 	console.log("Color :" + this.color + " Make : " + this.make + " Model : " + this.model + " Miles :" + this.miles);
// }

// Car.prototype.addMiles = function(){
// 	var miles = prompt("how many miles to add?");
// 	this.miles += parseInt(miles);
// 	console.log("it now has " + this.miles + " miles.");
// }

// Car.prototype.paint = function(){
// 	var paintColor = prompt("what color did you paint it?");
// 	this.color = paintColor;
// 	console.log("It is now " + this.color);

// }

// var prius = new Car("blue", "toyota", "prius", 100);
// var wrangler = new Car("white", "jeep", "wrangler", 119453);
// var landRover = new Car("black", "Land Rover", "defender", 56324);

// prius.about();
// // wrangler.about();
// // landRover.about();

// prius.addMiles();
// prius.paint();

// prius.about();


