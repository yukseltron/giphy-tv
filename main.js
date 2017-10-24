function AppViewModel() {
	this.channel = ko.observable("Charlie Brown");
	var query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=" + this.channel() + "&limit=1&offset=0&rating=PG-13&lang=en"
	var gif = $.get(query);
	console.log("EAD:",gif)
	var json = JSON.parse(gif);

	$("#tv").src = json.responseJSON.data.url;
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


//SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I
