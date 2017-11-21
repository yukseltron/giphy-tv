function AppViewModel() {
	$.ajaxSetup({
    	async: false
	});

	this.channel = ko.observable("static");

	this.url = ko.computed(function() {
		var query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=" + this.channel() + "&limit=1&offset=0&rating=PG-13&lang=en";
		var img;

		$.getJSON(query, function (json) {
			img = json.data[0].images.original.url;
		});

		return img;
	}, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


//SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I
