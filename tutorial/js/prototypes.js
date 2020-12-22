let animal = {
  a : 14,
  b : function(){
    console.log("I am an Animal");
  }
}

let rabbit = {
  __proto__ : animal,
  x : {a : 1},
  legs : 4,
}

let golu = Object.create(rabbit);

console.log(golu.__proto__);// rabbit Object
console.log(golu.__proto__.__proto__);// animal Object

console.log(Object.getPrototypeOf(rabbit));// animal Object
console.log(Object.getPrototypeOf(golu));// rabbit Object
