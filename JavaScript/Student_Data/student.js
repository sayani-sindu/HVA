let student = {};

student.name = "Sindu";
student.email = "sindusayani@gmail.com";
student.age = 18;

console.log(student.name);

student.age = 10;
console.log(student.age);

student.greet = function() {
    console.log("Hello " + this.name + "!");
}

student.address = {
    country: "India",
    city: "Bhimavaram",
    pin_code: "534204"
};
console.log(student.address.country);

student.address.pin_code = "523187";
console.log(student.address.pin_code);

let friend = {
    name: "Sanndhhya",
    email: "sanndhhyakatta@gmail.com",
    age: 20,
    address: {
        country: "India",
        city: "Guntur",
        pin_code: "523187"
    },
    greet: function() {
        console.log("Hello " + this.name + "!");
    }
};
friend.greet();
console.log(friend);

let topper = {
    name: "Sahasra",
    email: "sahasrasayani@gmail.com",
    age: 8,
    address: {
        country: "India",
        city: "Gudiwada",
        pin_code: "534101"
    },
    greet: function() {
        console.log("Hello " + this.name + "!");
    }
};
topper.greet();
console.log(topper);

class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country: country,
            city: city,
            pin_code: pin_code
        };
    }
    greet() {
        console.log("Hello " + this.name + "!");
    }
    greetFullAddress() {
        return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
    }
}

let student1 = new Student("Sindu", "sindusayani@gmail.com", 18, "India", "Bhimavaram", 534204);
let friend1 = new Student("Ashiya", "ashiyasulthanashaik@gmail.com", 19, "India", "Bhimavaram", 534204);
let topper1 = new Student("Sahasra", "sahasrasayani@gmail.com", 8, "India", "Gudiwada", 523163);

student1.greet();
friend1.greet();
topper1.greet();

console.log(student1.greetFullAddress());
console.log(friend1.greetFullAddress());
console.log(topper1.greetFullAddress());