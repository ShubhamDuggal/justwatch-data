var http = require('http');
const JustWatch = require('./');
var hostname = '127.0.0.1';
var port = 8080;
(async function(){
	var justwatch = new JustWatch();

	var searchResult = await justwatch.search({query: 'money heist'});
	
    http.createServer(print_result(searchResult)).listen(port, hostname);
	
})();




function print_result(result) {
  return function(request, response) {
    //  response.writeHeader(200, {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"});
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Credentials", "true");
      response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	  response.write(JSON.stringify(result, null, 4));
      response.end();
  }
}

