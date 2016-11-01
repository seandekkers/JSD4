var menu1 = document.querySelector("#digg");
var menu2 = document.querySelector("#hacker-news");
var menu3 = document.querySelector("#new-york-times");

menu1.addEventListener('click', selectDigg);
menu2.addEventListener('click', selectHackerNews);
menu3.addEventListener('click', selectTimes);

var mainArticles = document.querySelector("#main");
var popUpTitle = document.querySelector("h1.title");
var popUpDescription = document.querySelector("p.description");
var popUpLink =  document.querySelector("a.popUpAction");


var logo = document.querySelector('header h1');
logo.addEventListener('click',titleClick);
var popUp = document.querySelector('#popUp');
popUp.addEventListener('click', popUpToggle);
var searchSelection = document.querySelector('header #search');
searchSelection.addEventListener('click', searchToggle);

mainArticles.addEventListener('click', titleClick);




var jsontest = {};
var jsontest2 = {};
var jsontest3 = {};
var i = 1;
var hackerNewsArray = [];


var hackerNewsArray = [];





function titleClick(event){

	var target = event.target;
	console.log(target.innerHTML);

	// var closestH3 = event.closest(h3);


	popUp.classList.toggle("hidden");
	popUp.classList.remove("loader");


		
	popUpTitle.innerHTML = "TEST";
	popUpDescription.innerHTML ="Test";
	popUpLink.innerHTML ="test";

	var closePopUp = document.querySelector('a .closePopUp');
	closePopUp.addEventListener('click',popUpToggle);

}

function popUpToggle(item){
	
	console.log('POP UP');
	popUp.classList.toggle("hidden");
	// popUp.classList.toggle("loader");

	

	

	



}
function searchToggle(){
	
	console.log("click Search");
	searchSelection.classList.toggle("active");

}


function selectDigg(){
	console.log("DIGG");
	url = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json";
	$.getJSON(url, updateArticlesDigg);
	console.log(url);

}

function updateArticlesDigg(json){
	jsontest = json;
	var articleTemplate = document.querySelector("#main-template-digg");
	var articleTemplateFunction = Handlebars.compile(articleTemplate.innerHTML);
	var htmlArticle = articleTemplateFunction(json);
	mainArticles.innerHTML = htmlArticle;
	enableTitleSelect();
}

/////////////////////////////////////////////////////////////////
function selectHackerNews(){
	console.log('HACKER-NEWS')
	var bestStories = "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty";
	$.getJSON(bestStories, hackerNewsJson);

}

function hackerNewsJson(json){
	json.forEach(function(index){
		var hackerNewsUrl = "https://hacker-news.firebaseio.com/v0/item/" + index +".json?print=pretty";
		$.getJSON(hackerNewsUrl, buildHnJson);
	});

}

function buildHnJson(json){
	var hackerData = {
    article: [],
    misc: "test"
	};
	hackerNewsArray.push(json);
	i++;
	if(i == 100){

		console.log("Array Length: "+ hackerNewsArray.length)
		hackerData.article = hackerNewsArray;
		updateArticlesTwo(hackerData);

	}

}

function updateArticlesTwo(json){
	console.log("UPDATE ARTICLES TWO: " + json);
	jsontest2 = json;
	var hnTemplate = document.querySelector("#main-template-hn");
	var hnTemplateFunction = Handlebars.compile(hnTemplate.innerHTML);
	var detailsHTML = hnTemplateFunction(json);
	mainArticles.innerHTML = detailsHTML;
	enableTitleSelect();

}




// function updateArticlesTwo(json){
	
// 	jsontest = json;
// 	console.log(json);
// 	var articleTemplate = document.querySelector("#main-template-digg");
// 	var articleTemplateFunction = Handlebars.compile(articleTemplate.innerHTML);
// 	var htmlArticle = articleTemplateFunction(json);
// 	mainArticles.innerHTML = htmlArticle;


// }

/////////////////////////////////////////////////////////////////

function selectTimes(){
	console.log("NYTIMES");
	url = "https://api.nytimes.com/svc/topstories/v1/home.json?api-key=5c0eef9bf6014d6182e73805cfc6867f";
	$.getJSON(url, updateArticlesThree);

}

function updateArticlesThree(json){
	
	jsontest3 = json;
	var articleTemplate = document.querySelector("#main-template-times");
	var articleTemplateFunction = Handlebars.compile(articleTemplate.innerHTML);
	var htmlArticle = articleTemplateFunction(json);
	mainArticles.innerHTML = htmlArticle;
	enableTitleSelect();
}