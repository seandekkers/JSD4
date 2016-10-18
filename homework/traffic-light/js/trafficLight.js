// Setup
// ----------------------------------------------
//Buttons
var trafficLight = document.querySelector("#traffic-light");
var stop = document.querySelector(".stop-button");
var slow = document.querySelector(".slow-button");
var go = document.querySelector(".go-button");
var caution = document.querySelector(".caution-button");
var run = document.querySelector(".run-button");
//Lights
var stopLightSelector = document.querySelector(".stop-light");
var slowLightSelector = document.querySelector(".slow-light");
var goLightSelector = document.querySelector(".go-light");


// Timers
var runLightsLoop1;
var stopLightTimer;
var slowLightTimer;
var goLightTimer;


// Structure
// ----------------------------------------------
var blinkOff;
var blinkOn;
run.addEventListener("click", runLightsLoop);
stop.addEventListener("click", stopLight);
slow.addEventListener("click", slowLight);
go.addEventListener("click", goLight);
caution.addEventListener("click", blink);
run.addEventListener("dblclick",noLight);

// Events
// ----------------------------------------------

function clearIntervals(){
	clearInterval(runLightsLoop1);
	clearTimeout(stopLightTimer);
	clearTimeout(slowLightTimer);
	clearTimeout(goLightTimer);
	clearInterval(blinkOff);
	clearInterval(blinkOn);
}

function noLight(){
	console.log("nolight")
	
	clearIntervals();

	stopLightSelector.className = "light";
	slowLightSelector.className = "light";
	goLightSelector.className = "light";
}

function stopLight(){
	clearIntervals();
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
	clearIntervals();
	console.log("go");
	stopLightSelector.className = "light";
	slowLightSelector.className = "light";
	goLightSelector.className = "go";
}
function blink(){
	clearIntervals();
	console.log("blink");
	blinkOff = setInterval(function(){stopLightSelector.className = "light";
	slowLightSelector.className = "light";
	goLightSelector.className = "light";},1000);
	blinkOn = setInterval(function(){stopLightSelector.className = "light";
	slowLightSelector.className = "slow";
	goLightSelector.className = "light";},2000);
}

function runLightsOnce(){
	stopLightTimer = setTimeout(function(){stopLightSelector.className = "stop";
	slowLightSelector.className = "light";
	goLightSelector.className = "light";},1000);
	slowLightTimer = setTimeout(function(){stopLightSelector.className = "light";
	slowLightSelector.className = "slow";
	goLightSelector.className = "light";},2000);
	goLightTimer = setTimeout(function(){stopLightSelector.className = "light";
	slowLightSelector.className = "light";
	goLightSelector.className = "go";},3000);

}

function runLightsLoop(){
	clearIntervals();
	setTimeout(runLightsOnce)
	runLightsLoop1 = setInterval(runLightsOnce, 3000);
}





// Event handlers
// ----------------------------------------------
