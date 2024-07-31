function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("sindu")); 

function greetDefault(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greetDefault()); 

let greetFunction = function(name) {
    return `Hello, ${name}!`;
}
console.log(greetFunction("Sindu"));  

const greetArrow = (name) => {
    return `Hello, ${name}!`;
}
console.log(greetArrow("Sindu"));  
