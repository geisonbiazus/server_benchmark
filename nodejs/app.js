var http = require("http");

var app = function(request,response) {
    response.writeHeader(200);

    response.write("Node Server: You requested " + request.url);

    response.end();
};

http.createServer(app).listen(8081, function() {
  console.log('Server listening on port 8081');
});

module.exports = app
