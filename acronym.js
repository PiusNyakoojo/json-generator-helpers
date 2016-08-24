function() {
	var word = this.title; // set word e.g. "American Biological Society"
	var isUppercase = true; // set uppercase

	var words = word.split(" ");
	var acronym = "";

	for (var i = 0; i < words.length; i++) {
		acronym += words[i].charAt(0);
	}

	if (isUppercase) {
		acronym = acronym.toUpperCase();
	}

	return acronym;
}