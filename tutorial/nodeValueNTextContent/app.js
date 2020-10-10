/* 
  nodeValue - The nodeValue property of the Node interface returns or sets the value of the current node.
  
  textContent - The textContent property of the Node interface represents the text content of the node and its descendants. It concatenates
  the Text Content of all the childNodes. same as nodeValue it can also be used to set the value.
*/

const item = document.getElementById('special');
// item.nodeValue won't work since the text is contained inside in the item's childNodes
console.log(item.childNodes);
const value = item.firstChild.nodeValue;// item.childNodes[0].nodeValue will also work
console.log(value);

// Easier way to get the TextContent
const easyValue = item.textContent;
console.log(easyValue);