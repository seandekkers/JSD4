console.log("test");

var score = 0;

var plusFiveButton = document.querySelector("#increase-5");
var minusFiveButton = document.querySelector("#decrease-5");
var scoreTitle = document.querySelector("#score");
var customScoreInput = document.querySelector("#custom-score");
var customScoreButton = document.querySelector("#submit-custom-score");

// var customInputButton = document.querySelector();

plusFiveButton.addEventListener("click", plusFive);
minusFiveButton.addEventListener("click", minusFive);
customScoreButton.addEventListener("click", customInput);





function plusFive() {

	// console.log(scoreTitle);
	score = score + 5;
	console.log(score);
	scoreTitle.innerHTML = score + " Points";
}


function minusFive(){
	console.log(score);
	score -= 5;
	scoreTitle.innerHTML = score + " Points";
}
function customInput(){
	var inputScore = parseInt(customScoreInput.value);
	console.log(inputScore);
	score += inputScore;
	scoreTitle.innerHTML = score + " Points";
	// console.log(input, + " " + score);

}