
//get a random gif function
function getGif(tag) {
	var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + tag;
	jQuery.getJSON(url, handleCats);
}

//callback function
function handleCats(json){
	console.log(json);
	console.log(json.data.fixed_width_small_url);
	var img = document.createElement("img");
	img.src = json.data.fixed_height_small_url;
	document.body.appendChild(img);
}

jQuery.getJSON(url, handleGif);

