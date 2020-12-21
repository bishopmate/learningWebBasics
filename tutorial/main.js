console.log("Bonjour");

// *Anonymous Function
var person = function(name){
  console.log("Yoo "+name)
}
person("Raghav");

// *Arrow Function()
var person = (name) =>{ console.log("Hey "+ name);
  console.log("Wassup! ?");
}
person("Ramlal");

// *Global Objects
console.log(__dirname);
console.log(__filename - __dirname);
var arr = Array(16);
console.log(arr);
console.log(Array(16));
