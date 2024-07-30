function doubleNumber(num){
    return 2 * num;
}

function squareNumber(num){
    return num * num;
}

function incrementNumber(num){
    return num++;
}

function performOperation(num, callback){
    return callback(num);
}

console.log(performOperation(5, doubleNumber));
console.log(performOperation(5, squareNumber));
console.log(performOperation(5, incrementNumber));