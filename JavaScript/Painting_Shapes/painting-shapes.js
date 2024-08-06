function areaofRectangle(length, width){
    return length * width;
}

function areaOfCirlce(radius){
    return Math.PI * radius * radius;
}

function areaofTriangle(base, height){
    return 0.5 * base * height;
}

function calculatepaintingCost(dim1, dim2, calculateArea){
    const area = calculateArea(dim1, dim2);
    const costPerUnit = 2;
    const total = area * costPerUnit;
    return total;
}

console.log(calculatepaintingCost(5, 10, areaofRectangle));
console.log(calculatepaintingCost(3, null, areaOfCirlce));
console.log(calculatepaintingCost(6, 8, areaofTriangle));