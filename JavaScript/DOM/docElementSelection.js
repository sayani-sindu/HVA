//SELECTING ELEMENTS


//GetElementById -- return null if nothing found

const title = document.getElementById('main-heading');

console.log(title);

//GetElementByClassName -- return empty collection if nothing found

const listItem = document.getElementsByClassName('list-item');

console.log(listItem);

//getElementByTagName

const listTag = document.getElementsByTagName('li');

console.log(listTag);

//QuerySelector -- returns the first element that matches the selector, null if nothing found

const container = document.querySelector('div');

console.log(container);

//querySelectorAll -- to select all the divs return a Nodelist, empty if nothing found


//STYLING ELEMENTS

const heading = document.getElementById('main-heading');
heading.style.color = 'blue';

const listEle = document.querySelectorAll('.list-item');
// listEle.style.fontSize = '4rem'; -- not working
for(index = 0; index < listEle.length; index ++){
    listEle[index].style.fontSize = '3rem';
}

//CREATING ELEMENTS


const ul = document.querySelector('ul');
const li = document.createElement('li'); // create new html element

//ADDING ELEMENTS
ul.append(li);

li.innerText = "hi Nanna";


//MODIFYING TEXT

const firstListItem = document.querySelector('.list-item');

console.log(firstListItem.innerText);
/*Retrieves or sets the text content of an element 
and its descendants, but only the visible text. 
It respects CSS styles like display: none or 
visibility: hidden, meaning it will not include text that 
is hidden from view.*/

console.log(firstListItem.textContent);
/* Retrieves or sets the text content of an element and 
all its child elements, including text that is not visible 
(like text inside elements with display: none or visibility: hidden*/

console.log(firstListItem.innerHTML);
/*Retrieves or sets the HTML content inside an 
element. This includes the element's text content 
as well as any nested HTML tags.*/

//MODIFYING ELEMENTS

// li.setAttribute('class', 'list-item');
// li.removeAttribute('class');

// li.classList.add('list-item');
// li.classList.remove('list-item');

console.log(li.classList.contains('list-item'));

//REMOVE ELEMENTS

// li.remove()

// METHODS IN CLASSLIST

/*
add(className1, className2, ...): Adds one or more class names to the element.
remove(className1, className2, ...): Removes one or more class names from the element.
toggle(className, force): Toggles a class name on or off; optionally forces adding or removing the class.
contains(className): Checks if the element has a specific class.
replace(oldClassName, newClassName): Replaces an existing class with a new class.
item(index): Returns the class name at the specified index.
forEach(callback): Executes a callback function for each class name in the classList.
*/
// listEle.forEach(item => {
//     if (!item.classList.contains('hidden')) {
//         item.classList.toggle('hidden');
//     }
// });
// li.classList.add('hidden');


