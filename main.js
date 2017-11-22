function AppViewModel() {
	$.ajaxSetup({
    	async: false
	});

	this.channel = ko.observable("");

	//url for img src
	this.url = ko.computed(function() {
		var query;
		var chan = this.channel();
		var img = "https://media.giphy.com/media/iF3M9gPPCdulq/giphy.gif";


		if (chan == "") {
			img = "https://media.giphy.com/media/iF3M9gPPCdulq/giphy.gif";//tv static gif for default
		} else {
			query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=" + chan + "&limit=20&offset=0&rating=PG-13&lang=en";

			$.getJSON(query, function(json) {
				console.log("length:",json.data.length);
				if (json.data.length == 0) {
					img = "https://media.giphy.com/media/iF3M9gPPCdulq/giphy.gif";
				} else {
					var rand = Math.floor((Math.random() * json.data.length) + 0);
					img = json.data[rand].images.original.url;
				}
			});
		}

		return img;
	}, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


//SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I
