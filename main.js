function AppViewModel() {
	$.ajaxSetup({
    	async: false
	});

	this.channel = ko.observable("");
	var chan;
	var query;

	this.url = ko.computed(function() {
		var img;
		chan = this.channel();

		if (chan === "") {
			query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=static&limit=1&offset=0&rating=PG-13&lang=en";
		} else {
			query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=" + chan + "&limit=1&offset=0&rating=PG-13&lang=en";
		}


		$.getJSON(query, function (json) {
			img = json.data[0].images.original.url;
		});

		return img;
	}, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


//SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I
