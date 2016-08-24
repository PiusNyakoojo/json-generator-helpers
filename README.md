# json-generator-helpers
### A set of helper functions that generate useful data with http://json-generator.com

### (Copy and paste the function to the value field of key)

### Generating an Acronym - e.g. NASA
```javascript
{
  title: "my impressive organization title",
  acroynm: function() {
    var word = this.title;
  	var isUppercase = true; // set uppercase
  
  	var words = word.split(" ");
  	var acronym = "";
  
  	for (var i = 0; i < words.length; i++) {
  		acronym += words[i].charAt(0);
  	}
  
  	if (isUppercase) {
  		acronym = acronym.toUpperCase();
  	}
  
  	return acronym; // "MIOT"
  }
}

```

### Generating an Organization Name - e.g. National Lorem Ipsum Society
```javascript
{
  title: function() {
    var minWords = 1;
  	var maxWords = 6;
  	var words = lorem(maxWords, "words").split(" "); // Generate Lorem Ipsum text
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
}
```
