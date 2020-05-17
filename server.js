const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async function(req, res) {

	res.send(req.query.name);
  
});

let server = app.listen(8080, function() {
    console.log('Server is listening on port 8080')
});
