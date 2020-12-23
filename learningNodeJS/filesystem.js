const fileSystem = require("fs");
// console.log(fileSystem);

// Two different ways to read a simple textfile
fileSystem.readFile(__dirname + "/passage.txt", (err, data)=>{  // encoding not specified
  if(err) throw err;
  console.log(data.toLocaleString()); // since encoding isn't provided we have to convert it into human readable text
});

fileSystem.readFile(__dirname + "/passage.txt","utf8", (err, data)=>{ // encoding specified
  if(err) throw err;
  console.log(data);
});

const http = require("http");

http.createServer((req, res) =>{
  res.writeHead(200, {"content-type" : "text/plain"});
  fileSystem.readFile(__dirname + "/passage.txt","utf8", (err, data) => {

    res.write(data);
    res.end();
  });
  
}
).listen(5569, ()=> console.log("Server's up and runnin on our favorite port(5569)"));

//  Below 3 lines when executed will delete the file provided
// fileSystem.unlink(__dirname + "/passage.txt", (err, data)=>{
//   if(err) throw err;
//   console.log("File Deleted : " + data);
// });