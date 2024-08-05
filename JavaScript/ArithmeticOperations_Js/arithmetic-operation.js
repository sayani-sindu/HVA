function addNUmbers(num1, num2){
    return num1 + num2;
}

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

function subtractNumbers(num1, num2){
    return num1 - num2;
}

function divideNumbers(num1, num2){
    if(num2 === 0){
        return "Error: Division By Zero";
    }
    return num1 / num2;
}

function performArithemetic(num1, num2, callback){
    return callback(num1, num2);
}

console.log(performArithemetic(5, 3, addNUmbers));
console.log(performArithemetic(5, 3, multiplyNumbers));
console.log(performArithemetic(5, 3, subtractNumbers));
console.log(performArithemetic(5, 3, divideNumbers));


