const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');


let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))


app.get('/', async function(req, res) {
var jsonObj = {'query': req.query.name};
	res.setHeader('Content-Type', 'application/json');
	res.send(jsonObj);
  
});

let server = app.listen(3000, function() {
    console.log('Server is listening on port 8080')
});
