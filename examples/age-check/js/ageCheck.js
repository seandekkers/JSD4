// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here

function getPrivilege(input){

switch(true){
	case (input < 16):
		return "1";
	case (input > 16 && input < 19):
		return "2";
	case (input > 18 && input < 21):
		return "3";
	case (input > 21 && input < 25):
		return "4";
	case (input > 25 && input < 35):
		return "5";
	case (input > 35 && input < 62):
		return "6";
	case (input > 62):
		return "7";
	default:
	console.log("default")
}

}
