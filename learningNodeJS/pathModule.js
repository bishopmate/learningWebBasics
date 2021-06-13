const path = require('path');

// Directory name
console.log(__dirname);
// File name
console.log(__filename);

// Base file name
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));// without extension if extension passed as parameter matches

// Directory name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create path object
// console.log(path.parse(__filename));
const currentFilePathObj = path.parse(__filename);
console.log(currentFilePathObj);
console.log(currentFilePathObj.base);

// Concatenate paths
const newFile = path.join(__dirname, "test", "hello.html");
console.log(typeof(newFile), newFile);
const newFileObj = path.parse(newFile);
console.log(newFileObj);

