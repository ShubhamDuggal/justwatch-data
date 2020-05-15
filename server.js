var http = require('http');
querystring = require('querystring');
const JustWatch = require('./');
var port = process.env.PORT || 3000;


const server = http.createServer((request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*')
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      	response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
               
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
			
            //   response.writeHead(200, {'Content-Type': 'text/html'});
          //  response.write('404 Not Found\n');
            
            // { name: 'John', gender: 'MALE', email: 'john@gmail.com' }
              console.log(body.name);
		var name = body.name;
	        var jsonObj = {'query': 'name'};
		//var searchResult = justwatch.search({query: name});
             response.writeHead(200, {'Content-Type': 'application/json'});
             response.write(JSON.stringify(jsonObj, null, 4));
         
		
		//  var justwatch = new JustWatch();
                //var searchResult = justwatch.search({query: body});
	        // return searchResult;
          response.end();
        });
    }
    
    // rest of the code
});

server.listen(port);




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

