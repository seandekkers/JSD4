var main = document.querySelector("main");

//create event
var me = document.createEvent("MouseEvent");
me.initEvent("click");

//Listen for an event
main.addEventListener("click", count);
var counter = 1;

var p = document.createElement("p");

p.addEventListener('click',clickCircle);

//event handler callback function
function count(){
	p.innerHTML = counter;
	main.appendChild(p)
	console.log("count " + counter);
	counter++
}



function clickCircle(event){
	p.innerHTML = counter;
	console.log(event);
	console.log("type ", event.type);
	console.log("target ", event.target);
	console.log("content ", event.target.innerHTML);

	// counter++;
	
	// console.log("count", counter);
}