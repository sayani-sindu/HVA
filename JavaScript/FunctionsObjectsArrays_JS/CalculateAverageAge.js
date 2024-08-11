people = [
    {
        name: "sindu",
        age : 18
    },
    {
        name: "Ammu",
        age : 12
    },
    {
        name: "Sandhya",
        age : 20
    },
    {
        name: "Ashiya",
        age: 19
    }
];
function calculateAverageAge(people){
    let sumOfAges = 0;
    people.forEach((person) => sumOfAges += person.age);
    const averageAge = sumOfAges / people.length;
    return averageAge;        
}

console.log(calculateAverageAge(people));
