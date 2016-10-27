console.log("test");
var details = document.querySelector(".details");
var main = document.querySelector("main");
var searchTitle = document.querySelector(".search");
var resultsSelector = document.querySelector(".results")
var url, htmlOutput, movieTemplateFunction, movieTemplate;

var asideHide = document.querySelector(".questions").style.visibility = "hidden";



//Listen for Enter
document.addEventListener("keydown", function(event){
	console.log("EVENT KEY: " + event.which);
	if (event.which == 13){
		console.log("SERACH VIA ENTE");

		searchMovie();
	}

});

//Listen for click
main.addEventListener("click",function(event){
	event.preventDefault();
	console.log(event.target.tagName);
	//Butoon or P with ID
	if (event.target.tagName == "BUTTON"){
		console.log("click: 1");
		searchMovie();
	} else if (event.target.tagName == "P" && event.target.id != null){
		searchSecondMovie(event.target.innerHTML);
		console.log("click: 2");
		console.log(event.target.id);
	}
	// var checkObj = {
	// 	BUTTON: searchMovie(),
	// 	// INPUT: function clickedSearch(){console.log(event.keyCode);},
	// 	P: testForId(event.target.innerHTML),
		
	// };

	// checkObj[event.target.tagName]();

});


function searchMovie(){
	console.log("Search Movie");
	url = "http://www.omdbapi.com/?s=" + searchTitle.value;
	console.log("URL: " + url);
	jQuery.getJSON(url, updateMovies);

}

function searchSecondMovie(event){
	console.log("Title: " + event);
	secondUrl = "http://www.omdbapi.com/?t=" + event;
	console.log(secondUrl);
	jQuery.getJSON(secondUrl,updateMovieDetails);

}


function updateMovies(json){

	console.log("GET MOVIE LIST");
	resultsSelector.innerHTML = '';
	movieTemplate = document.querySelector("#movie-template");
	movieTemplateFunction = Handlebars.compile(movieTemplate.innerHTML);
	htmlOutput = movieTemplateFunction(json);
	resultsSelector.innerHTML = htmlOutput;
	// console.log(templateString);

}


function updateMovieDetails(json){
	console.log(json);
	var detailsTemplate = document.querySelector("#details-template");
	var detailsTemplateFunction = Handlebars.compile(detailsTemplate.innerHTML);
	var detailsHTML = detailsTemplateFunction(json);
	details.innerHTML = detailsHTML;

}