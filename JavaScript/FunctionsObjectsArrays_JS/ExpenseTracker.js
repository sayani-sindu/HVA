let expenses = [
    {
        id: 1,
        name: "Groceries",
        amount: 100,
        date: "10-08-2024",
        details: "Fruits, vegetables and others"
    },
    {
        id: 2,
        name: "Bills",
        amount: 500,
        date: "01-08-2024",
        details: "Phone, electricity and water bills"
    },
    {
        id: 3,
        name: "Shopping",
        amount: 1000,
        date: "16-08-2024",
        details: "New festive clothes"
    }
];

class Expense {
    constructor(id, name, amount, date, details) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.details = details;
    }
}

function displayExpenses(expenses) {
    expenses.forEach(expense => console.log(`${expense.name} - ${expense.amount} (${expense.date})`));
}

displayExpenses(expenses);

function addExpense(id, name, amount, date, details) {
    const newExpense = new Expense(id, name, amount, date, details);
    expenses.push(newExpense);
}

addExpense(4, "Utensils", 200, "13-08-2024", "Cooking Essentials");
displayExpenses(expenses);

function updateExpenses(id, amount) {
    const expense = expenses.find(expense => expense.id === id);
    if (expense) {
        expense.amount = amount;
    } else {
        console.log("Expense ID not found");
    }
}

updateExpenses(1, 300);
displayExpenses(expenses);

function updateExpenseWithMap(id, amount) {
    expenses = expenses.map(expense => {
        if (expense.id === id) {
            return {
                ...expense,
                amount: amount
            };
        }
        return expense;
    });
}
console.log(expenses);
updateExpenseWithMap(2, 700);
displayExpenses(expenses);

function removeExpenses(id) {
    expenses = expenses.filter(expense => expense.id !== id);
}

removeExpenses(4);
displayExpenses(expenses);
