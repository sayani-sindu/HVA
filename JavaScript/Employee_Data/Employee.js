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
    displaySalary = () => 
    {
        console.log("Salary : $" + this.salary);
    }
}

let newEmployee = new Employee("sindu", "sindusayani@gmail.com", "CSE", "Software Developer", 100000);
console.log(newEmployee);
newEmployee.introduce();
newEmployee.displaySalary();

let manager = new Employee("sudha", "sudhasayani@gmail.com", "Sales", "Manager", 10000000);
console.log(manager);
manager.introduce();
manager.displaySalary();