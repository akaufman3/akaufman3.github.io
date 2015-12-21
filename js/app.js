'use strict';
(function() {
 
	var nytURL = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?critics-pick=Y";
	// remove key before pushing to github
	var apiKey = "b99d9f650e32a5356ff7bd7542705425:17:73793406";
	console.log(nytURL + "&api-key=" + apiKey);
	$.ajax({
		url: nytURL + "&api-key=" + apiKey,
		data: {
			format: 'json'
		},
		success: function(response) {
			console.log(response.results)

			var source = $("#articleTemp").html();
			var template = Handlebars.compile(source);

			$(response.results).each(function(){
				var articleInfo = {
					title: this.headline,
					thumbnail: this.multimedia.resource.src,
					publicationDate: this.publication_date,
					readMore: this.related_urls[0].url
				};

				var basicArticleData = template(articleInfo);
				$('#main').append(basicArticleData)
			});

		}
	})

	$(document).on('click','.articleContent', function() {
		$('#popUp').removeClass('hidden');
		$('#popUp').delay(2000).removeClass('loader');
		var articleParent = $(this).parent();
		var title = articleParent.find('h3').html();
		var url = articleParent.find('#readMore').html();
		console.log(url, "url")

		$('#popUp h1').text(title);
		$('#popUp a').attr('href', url);

	});

})();