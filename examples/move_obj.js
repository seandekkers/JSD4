console.log("test");

var button = document.getElementById('button');
button.addEventListener("drag", move);
button.addEventListener("mouseup", changeColorBack);

//button.addEventListener("click", move);

function changeColor(){
	button.src = "img/button2.png";
}
function changeColorBack(){
	button.src = "img/button1.png";
}

	//document.onmousemove = mouseMove; 
	function mouseMove(ev){ 
	    ev           = ev || window.event; 
	    var mousePos = mouseCoords(ev); 
	} 
	function mouseCoords(ev){ 
		console.log(ev.pageX, ev.pageY);
	    if(ev.pageX || ev.pageY){ 
	        return {x:ev.pageX, y:ev.pageY}; 
	        console.log(ev);
	    } 
	    return { 
	        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
	        y:ev.clientY + document.body.scrollTop  - document.body.clientTop 
	    }; 
	} 


function move(ev){
	console.log(1);
	//document.onmousemove = move;
var x = ev.pageX-50;
var y = ev.pageY-50;
button.style.left = x;
button.style.top = y;
console.log("X: " + ev.screenX);
console.log("Y: " + ev.screenY);
//document.ondrop = stopMove(x, y);
button.addEventListener("drop", stopMove(x,y));
}
function stopMove(x,y){
	console.log('stop' + x +y);
	//document.onmousemove = move;
button.style.left = x;
button.style.top = y;
console.log("X: " + x);
console.log("Y: " + ev.screenY);
//document.onclick = changeColorBack;

}
