let list = document.querySelector("#parentLI");
let childs = list.childNodes;
let element = document.querySelector(childs[3]);
element.parentNode.removeChild(element);