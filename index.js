const express = require('express');
const app = express();

app.get('/', function(request, response, next) {
	response.sendFile(__dirname + "/index.html");
});

app.listen(3000);
