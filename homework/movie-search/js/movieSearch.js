var details = document.querySelector(".details");
var searchTitle = document.querySelector(".search");
var resultsSelector = document.querySelector(".results")
var mainPoster = document.querySelector("img.poster");
var mainTitle = document.querySelector("h2.title");
var mainPlot = document.querySelector("p.plot");
var mainLink = document.querySelector("a.imdb-link");
var inline = String.fromCharCode(47);

details.style.visibility = 'hidden';
mainPoster.src = "";
mainTitle.innerHTML = "";
mainPlot.innerHTML = "";
mainLink.href = "";
mainLink.innerHTML = "";


var secondClick = document.querySelector("p.id");
// secondClick.addEventListener("click", searchSecondMovie);



document.addEventListener("keydown", function(event){
	console.log("EVENT KEY: " + event.which);
	if (event.which == 13){
		console.log("SERACH VIA ENTER");
		searchMovie();
	}

});


document.addEventListener("click",function(event){
	event.preventDefault();
	console.log(event.target.tagName);
	// console.log(event.keyCode);
	if (event.target.tagName == "BUTTON"){
		console.log("click: 1");
		searchMovie();
	} else if (event.target.tagName == "P" && event.target.id != null){
		testForId(event.target.innerHTML);
		console.log("click: 2");
		console.log(event.target.id);
	}
	// var checkObj = {
	// 	BUTTON: searchMovie(),
	// 	// INPUT: function clickedSearch(){console.log(event.keyCode);},
	// 	P: testForId(event.target.innerHTML),
		
	// };

	// checkObj[event.target.tagName]();
	console.log("EVENT TARGET TAG NAME: " + event.target.tagName);
	console.log("EVENT TARGET INNER HTML: " + event.target.innerHTML);

});

function testForId(event){
	console.log("TEST FOR ID" + event);
	// if (parent has ID !=) {}
	searchSecondMovie(event);

}


function searchSecondMovie(event){
	console.log("Title: " + event);
	secondUrl = "http://www.omdbapi.com/?t=" + event;
	console.log(secondUrl);
	jQuery.getJSON(secondUrl,updateMovie);

}

function searchMovie(){
	console.log("Search Movie")
	url = "http://www.omdbapi.com/?s=" + searchTitle.value;
	jQuery.getJSON(url,getMovie);
}


function getMovie(json){
	resultsSelector.innerHTML = '';
	var moviesList = [];
	console.log("GET MOVIE LIST");
	var i = 0;
	json.Search.forEach( function(object) {
		if (object.Poster != null){
			console.log(object.Poster.slice(7,object.Poster.length));
			var templateHtml = '<li id="' + object.imdbID + '>\n<img src="http:'+ inline + inline + object.Poster.slice(7,object.Poster.length) + '">\n<p id="'+ object.imdbID + '">' + object.Title + '</p></li>';
			moviesList.push(templateHtml);
			// resultsSelector.innerHTML += templateHtml;		
			i++;
		}
	});
	
	var templateString = moviesList.toString();
	resultsSelector.innerHTML = templateString;
	// console.log(templateString);

}


function updateMovie(json){
	details.style.visibility = 'visible';
	console.log("UPDATE MAIN MOVIE" + json.Title);
	mainPoster.src = String(json.Poster);
	mainTitle.innerHTML = String(json.Title);
	mainPlot.innerHTML = String(json.Plot);

}