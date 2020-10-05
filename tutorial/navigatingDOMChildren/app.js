// childNodes - returns a live NodeList of child nodes of the given element including non-element nodes like
// text and comment nodes.

const result = document.querySelector('#result');
console.log(result);

const allChildren = result.childNodes;
console.log(allChildren);
for(let i=0; i < allChildren.length; i++){
  console.log(allChildren[i].nodeName);
}

// ParentNode.children returns a live HTMLCollection which only contains all the elements of the node upon which it was called

const children = result.children;
console.log(children);

