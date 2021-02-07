const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Anything", "Allowed")// Pun Intended
  res.writeHead(200);
  const dataObj = {"name" : "sam", "game" : "fame"};
  const data = JSON.stringify(dataObj);
  res.end(data);
});

const PORT = 5569;
server.listen(PORT, ()=>{
  console.log(`Server's up and running on port ${PORT}`)
});