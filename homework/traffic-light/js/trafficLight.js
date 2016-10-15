// Setup
// ----------------------------------------------

var trafficLight = document.querySelector("#traffic-light");
var stop = document.querySelector(".stop-button");
var slow = document.querySelector(".slow-button");
var go = document.querySelector(".go-button");
var caution = document.querySelector(" .caution-button");

var stopLightSelector = document.querySelector(".stop-light");
var slowLightSelector = document.querySelector(".slow-light");
var goLightSelector = document.querySelector(".go-light");

// Structure
// ----------------------------------------------
var blinkOff;
var blinkOn;
stop.addEventListener("click", stopLight);
slow.addEventListener("click", slowLight);
go.addEventListener("click", goLight);
caution.addEventListener("click", blink);

// Events
// ----------------------------------------------

function noLight(){
	console.log("nolight")
	stopLightSelector.className = "light";
	slowLightSelector.className = "light";
	goLightSelector.className = "light";
}

function stopLight(){
	clearInterval(blinkOff);
	clearInterval(blinkOn);
	console.log("stop");
	stopLightSelector.className = "stop";
	slowLightSelector.className = "light";
	goLightSelector.className = "light";
}

function slowLight(){
	console.log("slow");
	stopLightSelector.className = "light";
	slowLightSelector.className = "slow";
	goLightSelector.className = "light";
	// slowLightSelector.style.backgroundColor = "rgb(255, 240, 47)";
	// slowLightSelector.style.boxShadow = "0 10px 40px rgba(255, 240, 47, 0.4)";
	// stopLightSelector.style.backgroundColor = "rgb(96, 80, 0)";
	// goLightSelector.style.backgroundColor = "rgb(96, 80, 0)";
}

function goLight(){
	clearInterval(blinkOff);
	clearInterval(blinkOn);
	console.log("go");
	stopLightSelector.className = "light";
	slowLightSelector.className = "light";
	goLightSelector.className = "go";
}
function blink(){
	console.log("blink");
	blinkOff = setInterval(slowLight,1000);
	blinkOn = setInterval(noLight,2000);
}



// Event handlers
// ----------------------------------------------
