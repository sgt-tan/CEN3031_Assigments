var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  if (parsedUrl.pathname == '/listings' && request.method == "GET"){
    response.writeHead(200, {'Content-Type': 'application/json',});
    response.write(listingData);
  } 
  else{ 
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("Bad gateway error");
    response.end();
  }
  response.end();
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  if(err) throw err;
  listingData = data;
  http.createServer(requestHandler).listen(port);
});
