function() {
	var minWords = 1;
	var maxWords = 6;
	var words = lorem(maxWords, "words").split(" ");
	var amount = minWords + Math.floor(Math.random() * maxWords);

	// remove random amount of words
	words = words.splice(0, amount || 0);

	// concatenate words together
	var title = "";
	for (var i = 0; i < words.length; i++) {
		title += words[i] + " ";
	}

	// remove last space character
	title = title.slice(0, -1);

	// capitalize the first characters of each word
	title = title.replace(/\b\w/g, function(l){ return l.toUpperCase();});

	return title;
}