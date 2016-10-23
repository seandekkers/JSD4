console.log("test");

var body = document.querySelector("body");
var ul = document.querySelector("ul");

var red = document.querySelector(".red");
var olive = document.querySelector(".olive");
var rebeccapurple = document.querySelector(".rebeccapurple");
var skyblue = document.querySelector(".skyblue");

// red.addEventListener("click", changeRed);
// olive.addEventListener("click", changeOlive);
// rebeccapurple.addEventListener("click", changeRebeccapurple);
// skyblue.addEventListener("click", changeSkyblue);




// body.addEventListener("click", onClick);
body.addEventListener("click", onClick);
body.addEventListener("mousemove", mousePosition);

function mousePosition(event){
	console.log(event.screenX, event.screenY);
}


function onClick(event){
	console.log(event.target.tagName);
	if(event.target.tagName != "LI"){
		console.log("no li clicked");
		return;
	}
	console.log(event.screenX, event.screenY);
	var eventMap = {
		red: function () {
			console.log('red');
			body.className = "red";
		},
		olive: function() {
			body.className = "olive";
		},
		rebeccapurple: function() {
			body.className = "rebeccapurple";
		},
		skyblue: function() {
			body.className = "skyblue";
		}
	};
	eventMap[event.target.className]();
}

function onClickV2(event){
	
	if(event.target.className == "red"){
		body.className = "red";
	} else if(event.target.className == "olive"){
		body.className = "olive";
	} else if(event.target.className == "rebeccapurple"){
		body.className = "rebeccapurple";
	} else if(event.target.className == "skyblue"){
		body.className = "skyblue";
	}
}
