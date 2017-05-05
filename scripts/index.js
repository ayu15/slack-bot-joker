// First we need to import the HTTP module. This module contains all the logic for dealing with HTTP requests.
const httpServer = require('http');
const qs = require('querystring');
const concat = require('concat-stream');
const liners = require('./liners');
let culprit;
let responseBody;

// We define the port we want to listen to. Logically this has to be the same port than we specified on ngrok.
const PORT = 4420;

// We create a function which handles any requests and sends a simple response
function handleRequest(request, response) {
	request.on('data', chunk => {
		const data = qs.parse(chunk.toString());
		culprit = data.text;
		const responseLine = liners.getJokeOn(culprit);
		responseBody = {
			"response_type": "in_channel",
			"text": `${responseLine}`
		};
	});
	request.on('end', () => {
		response.writeHead(200, {"Content-Type": "application/json"});
		response.end(JSON.stringify(responseBody));
	})
}

// We create the web server object calling the createServer function. Passing our request function onto createServer guarantees the function is called once for every HTTP request that's made against the server
const server = httpServer.createServer(handleRequest);
// Finally we start the server
server.listen(PORT, function () {
	// Callback triggered when server is successfully listening. Hurray!
	console.log("Server listening on: http://localhost:%s", PORT);
});