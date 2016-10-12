// A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.


//constructor

// function Car(make, model, year, miles){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.miles = miles;
// }

// Car.prototype.about = function(){
//     console.log( this.make + this.model + this.year + this.miles);
// }

// Car.prototype.addMiles = function(miles){
//     this.miles += miles;
//     console.log("new miles :" + this.miles)
// }


// var car1 = new Car("jeep", "wrangler", 1989, 124523);
// car1.numTires = 4;




// Reporting software analyzes the snow removal performance of each snow plow driver in the city.
 


// A simulation predicts the behavior of the MBTA if ridership increases by 20%.


// A user is required to watch video training sessions as part of a recertification process and answer questions about them.

// A user on a cooking website enters the number of dinner guests, and the cooking website adjusts all the recipes accordingly.


function Recipe(eggs, flour, butter, oil, milk){
    this.eggs = eggs;
    this.flour = flour;
    this.butter = butter; 
    this.oil = oil;
    this.milk = milk;
}

var recipe1 = new Recipe(2,3,0,1,4);
var recipe2 = new Recipe(3,1,4,1,2);
var recipe3 = new Recipe(1,2,1,4,1);

Recipe.prototype.addGuest = function(guests){
    this.eggs = this.eggs * (guests * 1);
    this.flour = this.flour * (guests * 2.5);
    this.butter = this.butter * (guests * .5);
    this.oil = this.oil * (guests * .75);
    this.milk = this.milk * (guests * 3);
}

Recipe.prototype.about = function(){
    console.log("This Recipe uses eggs :" + this.eggs + " Flour :" + this.flour + " butter: " + this.butter + " oil: " + this.oil + " and flour: " + this.flour);
}




// A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.




// A computer game allows the user to take the role of a unit commander or general at Gettysburg and simulates the battle based on his or her commands.



// A user searches for her reservation on a hotel website, and changes the arrival date and room type.

function Reservation(id, name, date, type){
    this.id = id;
    this.name = name;
    this.date = date;
    this.type = type;
}

var reservation1 = new Reservation(0, "Bob", "08042016", "Suite");
var reservation2 = new Reservation(0, "Kate", "05022016", "Double");
var reservation3 = new Reservation (0, "Jake", "03202016", "Single");
var reservation4 = new Reservation (0, "Alice", "02302016", "Single");
var reservation5 = new Reservation (0, "Jim", "02202016", "Penthouse");
var searchedReservation = {};
var foundReservation;

function addId(){
    var i = 0;
    hotel.forEach(function(event){
        event.id = i;
        i++;
    })
}

var hotel = [];
hotel.push(reservation1, reservation2, reservation3, reservation4, reservation5);
addId();

function reset(){
    searchName();
}

function searchName(){
    foundReservation = null;
    var searchName = prompt("What name is your reservation under?");
    var searchId = 0;

    searchedReservation = hotel.filter(function(event){
        return event.name == searchName; 
    })
    
    if(searchedReservation.length == 1)
        searchedReservation = searchedReservation[0];
    else reset();


    if(searchedReservation != null) {
        console.log("Yes we found your reservation!");
        console.log("Reservation Number :" + searchedReservation.id + " Name: " + searchedReservation.name + " Date :" + searchedReservation.date + " Room Type: " + searchedReservation.type);
    } else {
        console.log("Sorry we could not find your reservation, Please try again");
        reset();
    }
}
    


function changeDate(){
    
    var newDate = prompt("What would you like to change your date to?")
    hotel[foundReservation.id].date = newDate; 
    console.log("Your new date is: " + hotel[foundReservation.id].date);
}

function changeType(){
   
    var newType = prompt("What would you like to change your room type to?");
    hotel[foundReservation.id].type = newType;
    console.log("Your new room type is: " + hotel[foundReservation.id].type);

}























