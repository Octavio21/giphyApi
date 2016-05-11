$('#form-control').on('click', function(){

		// Here we grab the text from the input box 
		var videos = $('#form-control').val();

		// Here we assemble our URL 
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=tv+shows" + videos + "&api_key=dc6zaTOxFJmzC&limit=10";

		console.log(videos);

	});