const axios = require("axios");
const express = require("express");
const fs = require("fs");
const path = require('path');


// axios.get(`https://api.teleport.org/api/cities/?search=${city.toLowerCase()}&limit=1`)


const app = express();

app.get("/api/cities", (req, res) => {
	console.log("Check++++++++++++++++++++");
	// const page = req.query.page || 0;
	const city = 'berlin';
	try {
		let mock = require(`/?search=${city}&limit=1`);
		res.send(mock);
	} catch (e) {
		const realUrl = `https://api.teleport.org${req.url}`;
		console.log('Fallback to real URL:', realUrl);
		axios
			.get(realUrl)
			.then((data) => {
				console.log('Trying to save ', path.resolve(`./stub/search/${city}.json`));
				fs.writeFileSync(path.resolve(`C:/Users/Alyona/Documents/Sound recordings/${city}.json`), JSON.stringify(data.data));
				res.send(data.data);
			})
	}
});
app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;