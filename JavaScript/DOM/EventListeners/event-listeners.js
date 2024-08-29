//EVENT LISTENERS -- load, touch start, key down, mouse over, click

//element.addEventListener("click", function useCapture); ---> useCapture is by default false --> should be captured or not

const buttonTwo = document.querySelector(".btn-2");

const alertBtn = () =>
    alert("I also love JavaScript");


buttonTwo.addEventListener("click", alertBtn);

//MouseOver

const newBackgroundColor = document.querySelector('.box-3'); 

const changeBgColor = () => {
    newBackgroundColor.style.backgroundColor = 'green';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

buttonTwo.removeEventListener("click", alertBtn);

buttonTwo.addEventListener("click", function(event){
    console.log('Event type : ', event.type);
    console.log('Element Clicked : ', event.target);
});

buttonFour = document.querySelector('.btn-4');

buttonFour.addEventListener('dblclick', () => alert("You double clicked the button"));


buttonTwo.addEventListener('mouseout', () => {
    console.log("mouse has left the button");
    alert("Mouse left button 2");
});

/*The keydown event is designed to be used with elements that can 
capture keyboard input, such as input, textarea, or the entire 
document or window objects, rather than on a button.*/

const inputField = document.querySelector('.input-1');

inputField.addEventListener('keydown', function(event) {
    console.log(`Key "${event.key}" pressed`);
});

/*Perform actions after the user has finished pressing a key, such as 
updating search results, validating input, or finalizing changes.*/
inputField.addEventListener('keyup', (event) =>{
    console.log(`Key ${event.key} pressed`);
});

/*Purpose: Log or act on character input. Note that keypress is becoming less commonly used 
because keydown can cover most of its use cases with better compatibility.*/
inputField.addEventListener('keypress', (event) =>{
    console.log(`Key '${event.key}' pressed`);
});



//   inputField.addEventListener('blur', function() {
//     this.style.borderColor = ''; // Reset border color when unfocused
//     if(this.value === '') {
//       alert('Username cannot be empty!'); // Simple validation
//     }
//   });
//mousemove

// inputField.addEventListener('keyup', function(event) {
//     console.log(`Key "${event.key}" pressed`);
// });

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');


// Capturing phase listener on parent
parent.addEventListener('click', () => {
    console.log('Parent capturing');
}, true); // useCapture = true

// Bubbling phase listener on parent
parent.addEventListener('click', () => {
    console.log('Parent bubbling');
}, false); // useCapture = false

// Listener on child (default is bubbling phase)
child.addEventListener('click', () => {
    console.log('Child clicked');
});
