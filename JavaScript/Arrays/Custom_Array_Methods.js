function forEachArray(array, callback){
    for(let index = 0; index < array.length; index ++){
        callback(index, array[index]);
    }
}

let numbers = [1,2,3,4,5];
forEachArray(numbers, function(index, ele){
    console.log(`${index}: ${ele}`);
});

function mapArray(array, callback){
    let result = []
    for(let index = 0; index < array.length ; index ++){
        result.push(callback(array[index]));
    }
    return result;
}
numbers = [6, 7, 8, 9];
let squares = mapArray(numbers, function(ele){
    return ele ** 2;
});
console.log(squares);


function filterArray(array, callback){
    let result = [];
    for(let index = 0; index < array.length; index ++){
        if(callback(array[index])){
            result.push(array[index]);
        }
    }
    return result;
}

numbers = [-1, 4, 5, -4, -7];
let negativeNum = filterArray(numbers, function(ele){
    return ele < 0;
});
console.log(negativeNum);

