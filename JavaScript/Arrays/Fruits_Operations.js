let fruits = ["apple", "banana", "cherry", "date"];
fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase());
});
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));
fruits.forEach(function(fruit){
    console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
});
let totalCharacters = 0;
fruits.forEach(function(fruit){
    totalCharacters += fruit.length;
})
console.log(totalCharacters);

let reversedFruits = fruits.map(function(fruit){
    return fruit.split('').reverse().join('');// reverse works on arrays not on strings-- so convert to array- then reverse-- convert to string again
});
console.log(reversedFruits);
reversedFruits = fruits.map((fruit) => fruit.split('').reverse().join(''));
console.log(reversedFruits);

let longFruits = fruits.filter(function(fruit){
    return fruit.length > 5;
});
console.log(longFruits);
longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);


aInFruit = fruits.filter(function(fruit){
    return fruit.includes('a');
});
aInFruitUpper = aInFruit.map(function(fruit){
    return fruit.toUpperCase();
});
console.log(aInFruitUpper);