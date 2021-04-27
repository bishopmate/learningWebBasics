const http = require('http'), fs = require('fs');
let responsePagesSync = [];
let array = ["index", "about", "contact-me", "pageNotFound"];

for(let i=0; i<array.length; i++){
  responsePagesSync.push(fs.readFileSync(array[i]+".html"));
}

http.createServer((req, res)=>{
  // the pathname I use eventually was available anyways through req.url, the below line is just for practising
  const currentRequestURL = new  URL("http://localhost:8080" + req.url);

  console.log(currentRequestURL.pathname);
  res.writeHead(200, {'Content-Type' : 'text/html'});
  switch(currentRequestURL.pathname){
    case '/':
      res.write(responsePagesSync[0]);  
      break;
    case '/about.html':
      res.write(responsePagesSync[1]);  
      break;
    case '/contact-me.html':
      res.write(responsePagesSync[2]);  
      break;
    default:
      res.write(responsePagesSync[3]); 
      break;
  }
  res.end();
}).listen(8080);