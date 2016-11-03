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

var articleTest;


var jsontest = {};
var jsontest2 = {};
var jsontest3 = {};
var i = 1;
var hackerNewsArray = [];


var hackerNewsArray = [];





function titleClick(event){

	var target = event.target;

	
	var jTarget = $(target);
	var sectionId = jTarget.closest('.articleContent');
	var selector = sectionId[0].id.toString();
	console.log("Selector: " + selector);
	var articleId = jTarget.closest('.article');
	articleSearch = articleId[0].id;
	console.log(articleSearch);
	var url = "http://digg.com/search?q="+ articleSearch;


	// var articleTitle = jTarget.closest('h3');
	// var articleDescription = jTarget.siblings('.description');
	// var articleLink = jTarget.siblings('a');

	// console.log(articleTitle[0].outerText);
	// console.log(articleDescription[0].outerText);
	// console.log(articleLink[0].outerText);
	



	// var closestH3 = event.closest(h3);
	var hackerNewsUrl = "https://hacker-news.firebaseio.com/v0/item/" + articleSearch + ".json?print=pretty";
	console.log(hackerNewsUrl);

	popUp.classList.toggle("hidden");
	popUp.classList.remove("loader");
		
	popUpTitle.innerHTML = "Test title"
	popUpDescription.innerHTML = "Test description";
	popUpLink.innerHTML = "Test Link";

	var closePopUp = document.querySelector('a .closePopUp');
	
	// $.getJSON(hackerNewsUrl,retrieveArticlePopUp);

	
	
	if (selector == "digg"){
		console.log("DIGG POP UP");
	
	} else if (selector == "hn"){
		console.log("HACKER-NEWS POP UP");
		$.getJSON(hackerNewsUrl,retrieveArticlePopUp);

	} else if (selector == "times"){
		console.log("TIMES POP UP");

	}
	

	closePopUp.addEventListener('click',popUpToggle);


	

}

function retrieveArticlePopUp(json){
	console.log("RETRIEVE ARTICLE");
	
console.log(json);
// popUp.classList.toggle("hidden");
// popUp.classList.remove("loader");
	
popUpTitle.innerHTML = json.title;
popUpDescription.innerHTML = json.url;
popUpLink.innerHTML = "Link";


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
}


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
	// console.log(json);
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
	var htmlArticle = hnTemplateFunction(json);
	mainArticles.innerHTML = htmlArticle;

}

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
}