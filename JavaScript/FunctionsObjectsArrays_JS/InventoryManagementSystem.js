inventory = [
    {
        id: 1,
        name: "Bicycle",
        price: 20,
        quantity: 1,
        description: "push-bike or cycle, is a human-powered or motor-assisted, pedal-driven, single-track vehicle, with two wheels attached to a frame, one behind the other."
    },
    {
        id: 2,
        name: "Eggs",
        price: 6,
        quantity: 10,
        description: "high in protein"
    },
    {
        id: 3,
        name: "Car",
        price: 7000,
        quantity: 1,
        description: "AI inserted car"
    }
];

class Product{
    constructor(id, name, price, quantity, description){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

function displayProducts(inventory){
    inventory.forEach( product => console.log(`${product.name} - ${product.price}(${product.quantity})`));
}
displayProducts(inventory);

function addProduct(id, name, price, quantity, description){
    const newProduct = new Product(id, name, price, quantity, description);
    inventory.push(newProduct);
}

function updateProduct(id, quantity){
    const product = inventory.find(product => product.id === id);
    if(product){
        product.quantity = quantity;
    }
    else{
        console.log("product not found");
    }
}
function updateProductWithMap(id, quantity){
    inventory = inventory.map(product =>{
        if(product.id === id)
            return {...product, quantity: quantity};
        return product;
    });
}

function removeproduct(id){
    inventory = inventory.filter(product => product.id !== id);
}//we are updating inventory -- if true -- means not equal -- add this product, if false means equal -- have to remove that product

addProduct(4, "phone", 100, 1, "This phone has flipping feature");
console.log("new inventory array is:")
displayProducts(inventory);

updateProduct(1, 2)
console.log("afetr update inventory");
displayProducts(inventory);

updateProductWithMap(2, 12);
console.log("after updating with map");
displayProducts(inventory);

removeproduct(1);
console.log("after removing product");
displayProducts(inventory);