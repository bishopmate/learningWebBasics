const fileSystem = require("fs");

try{
  const data = fileSystem.readFileSync(__dirname + "/passage.txt", "utf8");
  console.log(data);
}catch(e){
  console.log(e);
}

console.log("Reading File Completed");
