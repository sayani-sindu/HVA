document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.myform').addEventListener('submit', function(event){
        event.preventDefault();
        console.log("Form submitted");
    });

    const inputField = document.querySelector('.name');
    inputField.addEventListener('focus', function() {
        this.style.borderColor = 'blue'; 
        console.log("Input Field is focussed");// Change border color when focused
    });
});
