var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', origin || "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    next();
});

app.post('/', cors(), function(req,res){
 // var user_name=req.body.name;
    console.log('receiving data...');
    console.log('body is ',req.body);
    res.json({ msg: 'WHOAH with CORS it works!' })
   // res.send(req.body);
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
