const debug = require('debug')('on');
const http = require("http");
const url = require("url");
const {URL} = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable");

const PORT = 1874;

debug("Started");
const server = http.createServer((req, res) => {
  // debug(req.headers);
  // debug(req.url)
  let path = url.parse(req.url, true);
  if(req.method.toLowerCase() == 'post'){

    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
      if(err){
        console.error(err.message);
        return;
      }
      res.writeHead(200, "OK", {"Content-Type" : "text/plain"});
      res.write("The POST response is \n");
      res.end(util.inspect({fields, files}));
    })

  }else if(req.method.toLowerCase() == 'get'){

    res.writeHead(200, "0K", {"Content-Type" : "text/plain"});
    res.write("The GET response is\n");
    debug(util.inspect(path.query));
    res.write(util.inspect(path.query) + "\n");
    res.end("End of message to browser");
  
  }else{
    // dealing with other method  
  }

  // let decoder = new StringDecoder("utf-8");// By default also utf-8
  // let buffer = "";
  // req.on("data", (chunk)=>{
  //   buffer = buffer + decoder.write(chunk);
  // });
  // req.on("end", ()=>{
  //   buffer = buffer + decoder.end();
  //   res.writeHead(200, "0K", {"Content-Type" : "text/plain"});
  //   res.write("The response is\n");
  //   debug(util.inspect(path.query));
  //   res.write(util.inspect(path.query) + "\n");
  //   res.write(buffer + "\n");
  //   res.end("End of message to browser");
    
  // });

  
});


server.listen(PORT, ()=>{
  debug(`Server up and running on port number ${PORT}`);
});