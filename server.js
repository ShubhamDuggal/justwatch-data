var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/',function(req,res){
 // var user_name=req.body.name;
    console.log('receiving data...');
    console.log('body is ',req.body);
    res.send(req.body);
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
