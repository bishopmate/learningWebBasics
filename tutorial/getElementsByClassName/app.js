// Works same as getElementsByTagName
// difference is just that it fetches with the help of classNames

const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[1].style.color = 'brown';