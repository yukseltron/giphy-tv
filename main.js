function AppViewModel() {
	this.channel = ko.observable("cheese");
	this.url = ko.observable();
	var img;
	var query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=" + this.channel() + "&limit=1&offset=0&rating=PG-13&lang=en";

	$.getJSON(query, function (json) {
		console.log(json.data[0].bitly_gif_url);
		img = json.data[0].bitly_gif_url;
			console.log("IMG1:",img);
	});
	console.log("IMG2:",img);
	this.url = img;
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


//SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I
