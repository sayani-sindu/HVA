function calculateArea(width, height){
    return width * height;
}
let result = calculateArea(5,10);
console.log(result);

function calculateAreaWithDefaults(width = 1, height = 1){
    return width * height;
}
result = calculateAreaWithDefaults()
console.log(result);

let calculateAreaFunction = function(width, height){
    return width * height;
}
result = calculateAreaFunction(5, 10);
console.log(result);

let calculateAreaArrow = (width, height) =>{
    return width * height;
}
result = calculateAreaArrow(5, 10);
console.log(result);