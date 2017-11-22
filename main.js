function AppViewModel() {
	$.ajaxSetup({
    	async: false
	});

	this.channel = ko.observable("");
	var chan;
	var query;

	//url for img src
	this.url = ko.computed(function() {
		chan = this.channel();
		var img = "https://media2.giphy.com/media/Yqn9tE2E00k4U/giphy.gif";//tv static gif for default
		var rand;

		if (chan == "") {
			img = "https://media.giphy.com/media/lCkumTggV53xe/giphy.gif";//tv static gif for default
		} else {
			query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=" + chan + "&limit=20&offset=0&rating=PG-13&lang=en";

			$.getJSON(query, function(json) {
				console.log("length:",json.data.length);
				if (json.data.length == 0) {
					img = "https://media2.giphy.com/media/Yqn9tE2E00k4U/giphy.gif";
				} else {
					rand = Math.floor(Math.random() * json.data.length)
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
