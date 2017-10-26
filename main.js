function AppViewModel() {
	this.channel = ko.observable("cheese");

	var query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=" + this.channel() + "&limit=1&offset=0&rating=PG-13&lang=en";
	var request = new XMLHttpRequest();
	request.open('GET', query);

	console.log("EAD:", request);

	this.url = request;


/*
	var request = new XMLHttpRequest();
	request.open('GET', query);

	request.onload = function(){
    	var data  = JSON.parse(request.responseText);
    	console.log("EAD:", data[0]);
	};


	this.url = ko.observable(query);
	*/
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


//SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I
