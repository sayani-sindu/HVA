class Employee{
    constructor(name, email,department,position,salary){
        this.name = name;
        this.email = email;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
    introduce()
    {
        console.log("Hello, I am " + this.name + ", " + this.position);
    }
    displaySalary() 
    {
        console.log("Salary : $" + this.salary);
    }
}

let newEmployee = new Employee("sindu", "sindusayani@gmail.com", 19, "CSE", "Software Developer", "100000");
console.log(newEmployee);
newEmployee.introduce();
newEmployee.displaySalary();