
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
                response.writeHead(500, {'Content-Type': 'application/json'});
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
		
		jsonData = JSON.parse(body);
             var name = jsonData.name;
	
	(async function(){
	var justwatch = new JustWatch();

	var searchResult = await justwatch.search({query: name});
	 // response.writeHeader(200, {"Content-Type": "application/json"});
      response.write(JSON.stringify(searchResult, null, 4));
 response.end();
	//var episodes = await justwatch.getEpisodes(searchResult.items[0].id);
//	print_result("episodes", episodes);
})();

	        
        });
    }
    
    // rest of the code
});

server.listen(port);

