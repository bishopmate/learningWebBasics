// returns a node-list (array like object)
// index, length property but no array methods
const headings = document.getElementsByTagName('h2');
console.log(headings);
headings[0].style.color = 'blue';
console.log(headings.length);

const items = document.getElementsByTagName('li');

items[2].style.color = 'orange';

const betterItems = [...items];
betterItems.forEach(item => {
  console.log(item);
});

console.log(items);
console.log(betterItems);