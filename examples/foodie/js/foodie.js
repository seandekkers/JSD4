// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");


// Event
// ------------------------------------
var ul = document.querySelector('ul');
var li;
form.addEventListener('submit', getRestaurants);

// Event Handler 
// ------------------------------------
function getRestaurants(event){
	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;
	console.log(url);

	jQuery.getJSON(url,updateRestaurants);
	
	event.preventDefault();
	console.log(zip.value);


}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	console.log("update", json.restaurants)
	// clear restaurants 
	// result.innerHTML = "";
	json.restaurants.forEach(function(restaurant){
		console.log(restaurant.name);
		li = document.createElement("li");
		li.innerHTML = restaurant.name;
		ul.appendChild(li);

	})
	
	
	
}