var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/',function(req,res){
  var user_name=req.body.name;
  res.send("test")
  res.end("yes");
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
