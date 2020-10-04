// Selects the element or group of elements that we want
// And then decide the effect we want to apply to the selection

// querySelector('any css selector'); - selects single element
// querySelectorAll('any css selector'); - selects all elements of the css selector specified and returns a static NodeList**
// unlike the getElementsByClassName which return a Live HTMLCollection

// We can also use the array method forEach because it is a NodeList

const result = document.querySelector('#result');
result.style.backgroundColor = 'rgb(255,255,158)';

const item = document.querySelector('.special');// If we still specify multiple elements it will only fetch the first one
console.log(item);// <li class = "special">cat</li>

// We can write any and by that I mean, even complex CSS selectors as a parameter to querySelector
// the :last-child pseudo-class will select an element if it’s the last element within its parent.

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);// <li class="special last">hamster</li>

const list = document.querySelectorAll('.special');
console.log(list);

list.forEach(item =>  {
  console.log(item);
  item.style.color = 'rgb(255,100,59)'
});