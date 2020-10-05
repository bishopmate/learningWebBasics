// parentElement
// It can be chained as shown below

const heading = document.querySelector('h2');
console.log(heading);
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement.parentElement);

console.log(heading.parentElement.parentElement.parentElement.parentElement.parentElement);// null reached

const parentHeading = heading.parentElement;
parentHeading.style.color = 'rgb(244, 122, 61)';