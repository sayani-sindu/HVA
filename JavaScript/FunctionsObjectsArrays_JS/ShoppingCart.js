cart = [
    {
        name: "headphones",
        price: "100$",
        quantity: 1
    },
    {
        name: "scruches",
        price: "6$",
        quantity: 10
    },
    {
        name: "iphone 13",
        price: "700$",
        quantity: 1
    },
    {
        name: "Biolage",
        price: "50$",
        quantity: 2
    }
];

function calculateTotalPrice(cart){
    let totalPrice = 0;
    cart.forEach(cartItem => {
        totalPrice += cartItem.price * cartItem.quantity;
    });
    return totalPrice;
}

console.log(calculateTotalPrice(cart));