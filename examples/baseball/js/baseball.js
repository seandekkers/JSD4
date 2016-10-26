// Elements
// ------------------------------------------


var date      = document.querySelector('.date');
var games     = document.querySelector('.games');

var dateTemplate = document.querySelector("#date-template");
var gameTemplate = document.querySelector("#game-template");

var dateTemplateFunction = Handlebars.compile(dateTemplate.innerHTML);
var gameTemplateFunction = Handlebars.compile(gameTemplate.innerHTML);

var htmlDate = dateTemplateFunction(mockdata);
var htmlGame = gameTemplateFunction(mockdata);

date.innerHTML = htmlDate
games.innerHTML = htmlGame

// Templates
// ------------------------------------------
