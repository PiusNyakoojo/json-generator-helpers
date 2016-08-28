let json = require('./data.json'); // add data.json
let firebase = require('firebase');

let config = {
  apiKey: "<API-KEY>",
  authDomain: "<whatever>.firebaseapp.com",
  databaseURL: "<db-whatever>.firebaseio.com"
};

firebase.initializeApp(config);

let rootRef = firebase.database().ref();

let pushData = (path) => {

	console.log("pushing data");

	let ref = rootRef;

	if (path)
		ref = ref.child(path);

	for (data in json) {
		ref.child(json[data].id).update(json[data]);
	}
};

pushData("test");