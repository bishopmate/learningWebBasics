const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res){
  let parsedURL = url.parse(req.url);
  let path = parsedURL.pathname;

  //Standardising by removing any '/' at the start or end
  path = path.replace(/^\/+|\/+$/g, "");
  console.log(path);
  let qs = parsedURL.query;
  let headers = req.headers;
  let method = req.method.toLowerCase();
  console.log(method);
  // To be safe always add an error eventListener for the ReadableStream
  req.on("error", (err)=>{
    console.error(err.stack);
  });

  req.on("data", ()=>{
    console.log("got some data");
  });
  req.on("end", ()=>{
    console.log("sent a response");
    let route = (typeof routes[path]) === 'undefined' ? routes["notFound"] : routes[path];
    let data = {
      path,
      queryString : qs,
      headers,
      method,
      buffer : ""
    }
    route(data, res); 
    
  });
});

const PORT = 1874;
server.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`);
})

const routes = {
  "" : (data, res)=>{
    let payload = {
      name : "unknown"
    }
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write(payloadStr);
    res.end("\n");
  },
  kenny : (data, res)=>{  // kenny is same as "kenny", remeber it's an object property after all
  let payload = {
    name : "kenny"
  }
  let payloadStr = JSON.stringify(payload);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200);
  res.write(payloadStr);
  res.end("\n");
  },
  "kenny/manny" : (data, res) => {
    let payload = {
      name : "Kenny's manny"
    }
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write(payloadStr);
    res.end("\n");
  },
  "kenny/nanny" : (req, res)=>{
    let payload = {
      name : "Kenny's nanny"
    }
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write(payloadStr);
    res.end("\n");
  },
  notFound : (data, res) => {
    let payload = {
      message : "invalid request"
    }
    let payloadStr = JSON.stringify(payload);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.write(payloadStr);
    res.end("\n");
  }

}