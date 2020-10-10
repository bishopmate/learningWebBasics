/* 
nextSibling and previousSibling return next and previous nodes respectively and they also return whitespace 
between the elements that's why we apply two of them to hop on to the intended next or previous element
*/
const first = document.querySelector('.first');
console.log(first);
const second = first.nextSibling.nextSibling;

second.style.color = 'rgb(122, 122, 256)';
second.style.backgroundColor = 'rgba(35,35,35,0.4)';
const width = "50px";
second.style.width = width;

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);

// when we try to access a Node that doesn't exists 'null' is returned
console.log(last.nextSibling.nextSibling);