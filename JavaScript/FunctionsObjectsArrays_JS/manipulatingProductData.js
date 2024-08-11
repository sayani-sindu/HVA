products = [
    {
        id: 1,
        name: "Banana",
        price: 1.99,
        category: "Food"
    },
    {
        id: 2,
        name: "Phone",
        price: 799,
        category: "Gadgets"
    },
    {
        id: 3,
        name: "Bottle",
        price:10,
        category: "Accesories"
    },
    {
        id: 4,
        name: "Laptop",
        price: 1000,
        category: "Gadgets"
    }
];

function displayProducts(products){
    products.forEach(product => console.log(`${product.name} - $${product.price}`));
}
console.log("Products: ");
displayProducts(products);

const taxRate = 0.1;
const productsWithTax = products.map(product =>
{
    return {
        // id: product.id,
        // name: product.name,
        // category: product.category,
        ...product,// copies all data to new array
        priceWithTax: (product.price * (1 + taxRate)).toFixed(2)
    };
});
console.log("products with Tax");
productsWithTax.forEach(product => console.log(`${product.name} - $${product.priceWithTax}`));

const foodProducts = products.filter( product =>
    {
        return product.category === "Food";
    }
);
console.log("Products in Food Category");
displayProducts(foodProducts);

const affordableProducts = products.filter(product =>
{
    return product.price <= 10;
}
);

const affordableProductsStrings = affordableProducts.map(product =>
{
    return `${product.name} - $${product.price}`;
}
);
console.log("Products that are Affordable");
console.log(affordableProductsStrings);


// let totalPrice = 0;
// products.forEach(product => totalPrice += product.price);
// console.log(totalPrice);
const totalPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price;
}, 0);
console.log(totalPrice);
