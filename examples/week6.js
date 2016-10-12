var timeId = null;
var color = "red";
var blink;
//var yellow = setInterval(changeYellow, 1000);

function changeGreen(){
	console.log("Green");
	color = "yellow";
}

function changeYellow(){
	console.log("Yellow");
	color = "red";
}

function changeRed(){
	console.log("Red");
	color = "green";
}

function changeColor(){
	//console.log("3");
	
	if (color =="red"){
		changeRed();
	} else if (color == "green"){
		changeGreen();
	} else if(color == "yellow"){
		changeYellow();
		stop();
		var blink = setInterval(blink,500);
	} else if(color == "red"){
		console.log("STOP");
		//setInterval(blink,2000);
	}
}

// function changeGreen(){
// 	color = green
// }

function nightMode(){
	if (color == "yellow"){
		color = stop();
	} else {
		color = changeYellow();
	}
}

function start(){
	//console.log("1");
	timeId = setInterval(changeColor, 1000);
}


function stop(){
	//console.log("2");
	clearInterval(timeId);
	timeId = null;
}

function flash(){
	changeYellow
	console.log("blink")

}


start();