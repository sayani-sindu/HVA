//PARENT NODE TRAVERSAL

let ul = document.querySelector('ul');

console.log(ul);

console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;

console.log(html);

console.log(html.parentNode);
console.log(html.parentElement);

//CHILD NODE TRAVERSAL

console.log(ul.childNodes); // Logs all child nodes of <ul>, including text nodes (like indentation), comments, elements -- array like object

console.log(ul.firstChild); // Logs the first child node of <ul>, likely a text node (indentation or newline)
console.log(ul.lastChild); // Logs the last child node of <ul>

//ul.firstChild.style.backgroundColor = 'blue'; // No change-- first element is likely a text node

//ul.childNodes.style.backgroundColor = 'blue'; // No change-- 'childNodes' is a NodeList, not a single node

console.log(ul.childNodes);
ul.childNodes[1].style.backgroundColor = 'blue'; // This should work if the second child is an element node

console.log(ul.children); // HTML Collection -- element nodes exclude text, comments -- array like object

console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

 ul.children[1].style.backgroundColor = 'black';

 // SIBILING NODE TRAVERSAL

 console.log(ul);

 const div = document.querySelector('div');
console.log(div.childNodes);

 console.log(ul.previousSibling); // same as childNodes
 console.log(ul.nextSibling);

 console.log(ul.previousElementSibling); // same as children
 console.log(ul.nextElementSibling);
