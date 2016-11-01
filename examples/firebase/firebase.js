//Setup

//establish a connection

//create a new firebase db reference
var json = {
  "active" : "green",
  "colors": [
  	"olive",
  	"green",
  	"cyan",
  	"purple",
  	"black"
  ]
}



var ref = new Firebase("https://sean-jsd4.firebaseio.com/")
ref.on('value', updateApp);


var button = document.querySelector("button").addEventListener('click', saveChanges);



function saveChanges(element){
	console.log('saveChanges');
	ref.set(json);
}




function updateApp(snapshot) {
	var value = snapshot.val();
	console.log(value);
	document.body.style.background = value.active;
}

