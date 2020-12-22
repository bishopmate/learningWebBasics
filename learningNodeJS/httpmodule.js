const http = require("http");
const server = http.createServer(function(req, res){
  res.writeHead(200, {"content-type" : "text/html"});
  res.write("<h1>Hey ya, We've been waitin for you</h1>");
  res.end();
}).listen(5569, ()=>console.log("Server's up and runnin on our favorite port(5569)"));
