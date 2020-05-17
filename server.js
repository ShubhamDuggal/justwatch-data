const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');


let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async function(req, res) {
var jsonObj = {'query': req.query.name};
	res.setHeader('Content-Type', 'application/json');
	res.send(jsonObj);
  
});

let server = app.listen(3000, function() {
    console.log('Server is listening on port 8080')
});
