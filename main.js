function AppViewModel() {
	this.channel = ko.observable("tv");

	var query = "https://api.giphy.com/v1/gifs/search?api_key=SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I&q=" + this.channel() + "&limit=1&offset=0&rating=PG-13&lang=en";
	var json = $.getJSON(query);
	var obj = JSON.parse(json);
	console.log(obj)

	var channelTag = obj.data[3];
	console.log("Q1:",obj.data[3]);
	console.log("Q2:",query);

	this.url = ko.observable();
	this.url = channelTag;
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());


//SPI6LMY5gmLf6GFxoQwehrP6mTm6yE0I
