// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");

var html;




// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	results.innerHTML = '';

	//handlebars Step #1
	var restaurantTemplate = document.querySelector("#restaurant-template");


	//handlebars  Step #2 - Compile
	var templateFunction = Handlebars.compile(restaurantTemplate.innerHTML);

	//step 3
	html = templateFunction(json);
	results.innerHTML = html;

	console.log('updateRestaurants',json);

	// clears out the old results


	// add new result for each item in array
	// json.restaurants.forEach(createRestaurant);
}


// function createRestaurant(restaurant) {

// 	// Step 1 - create elements
// 	var li = document.createElement("li");
// 	var img = document.createElement("img");
// 	var h2 = document.createElement("h2");
// 	var p = document.createElement("p");

// 	// Step 2 - add content / attributes
// 	img.src = restaurant.image_url;
// 	h2.textContent = restaurant.name;
// 	p.textContent = restaurant.address;

// 	// Step 3 - append to parents
// 	results.appendChild(li);
// 	li.appendChild(img);
// 	li.appendChild(h2);
// 	li.appendChild(p);
// }

	




