/* 
  nextElementSibling and previousElementSibling return the next/previous Elements respectively rather than nodes
  previously which makes our lives easier when we just want to work with the elements directly.
  It also returns null for non-existing element access attempt.
*/
const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'rgba(256,64,128,0.9)';

const last = document.querySelector('#last');
last.previousElementSibling.style.color = 'rgba(32,64,256,0.8)';

console.log(first.previousElementSibling);
// P.S. The colors look beautiful