var http = require('http');
querystring = require('querystring');
const JustWatch = require('./');
var port = process.env.PORT || 3000;
(async function(){
	var justwatch = new JustWatch();

	var searchResult = await justwatch.search({query: 'money heist'});
	
    http.createServer(print_result(searchResult)).listen(port);
	
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
  
   if(request.method === 'POST') {
        let body = '';
        
        // very important to handle errors
        request.on('error', (err) => {
            if(err) {
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.write('An error occurred');
                response.end();
            }
        });
        
        // read chunks of POST data
        request.on('data', chunk => {
            body += chunk.toString();
        });

        // when complete POST data is received
        request.on('end', () => {
            // use parse() method
            body = querystring.parse(body);
            
            console.log(body);

            // rest of the code
        });
}

}

