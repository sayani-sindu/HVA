inventory = [
    {
        id: 1,
        name: "Pallace of Illusions",
        author: "Chitra Banerjee Divakaruni",
        price: 300,
        quantity : 1
    },
    {
        id: 2,
        name : "you don't love me anymore",
        author: "Rithwik Singh",
        price: 200,
        quantity: 1
    },
    {
        id: 3,
        name: "It ends with us",
        author: "Colleen Hoover",
        price: 200,
        quantity: 1
    },
    {
        id: 4,
        name: "twisted Series",
        author: "Ana Huang",
        price: 300,
        quantity: 1
    }
];

class Book{
    constructor(id, name, author, price, quantity){
        this.id = id,
        this.name = name,
        this.author = author,
        this.price = price,
        this.quantity = quantity
    }
}

function displayBooks(inventory){
    inventory.forEach( book => console.log(`${book.name} - ${book.author}(${book.price})`));
}

displayBooks(inventory);

function updateBook(id, quantity){
    const book = inventory.find(book => book.id === id);
    if(book){
        book.quantity = quantity;
    }
    else{
        console.log("book ID not available");
    }
}
updateBook(2, 2);
displayBooks(inventory);
console.log(inventory);

function updateBookWithMap(id, quantity){
    inventory = inventory.map(book => {
        if(book.id === id){
            return {
                ...book,
                quantity : quantity
            }
        }
        return book;
    });
}

updateBookWithMap(2, 1);
console.log(inventory);

function removeBook(id){
    inventory = inventory.filter(book => book.id !== id);
}

removeBook(4);
console.log(inventory);