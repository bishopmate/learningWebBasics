const handles = [
  { handleName : 'sam000013', highestRating : 1459},
  { handleName : 'Karad_1818', highestRating : 1719},
  { handleName : 'hhvyas', highestRating : 1404},
  { handleName: 'Aayush2000', highestRating : 1464},
  { handleName : 'Abhishek621', highestRating : 951},
  { handleName : 'St4r_3v3n', highestRating : 906}
];

const filteredItems = handles.filter((handle) => {
  return handle.highestRating <= 1300;
})
console.log(filteredItems);

const mappedItems = handles.map((handle)=> {
  return handle.handleName;
});
console.log(mappedItems);

const foundHandle = handles.find((handle) => {
  return handle.handleName === "sam000013";
});
console.log(foundHandle);

handles.forEach((handle) => {
  console.log(`User ${handle.handleName} has the highest Rating of ${handle.highestRating}`);  
});

const someoneORZ = handles.some((handle) => {
  return handle.highestRating >= 1700;
});

if(someoneORZ){
  console.log("Yes there is an ORZ among us");
}else{
  console.log("No one is ORZ");
}

const everyoneBegineer = handles.every((handle) => {
  return handle.highestRating >= 2000;
})

if(everyoneBegineer){
  console.log("Someone's Pro");
}else{
  console.log("Everyone's Rookie");
}

let averageStrength = handles.reduce((currentTotal, handle) => {
  return handle.highestRating + currentTotal;
}, 0);
averageStrength = averageStrength/handles.length;
averageStrength = parseInt(averageStrength);
console.log(`Average Rating of Team is ${averageStrength}`);

const arr = [1,2,3,4,6];

const includesTwo = arr.includes(2);
console.log(`Our array has 2 in it or not - ${includesTwo}`);
const includesFive = arr.includes(5);
console.log(`Our array has 5 in it or not - ${includesFive}`);
