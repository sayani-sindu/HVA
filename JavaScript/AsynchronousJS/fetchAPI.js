
//GET

// fetch('https://dummyjson.com/products/1',{})
// .then(response => console.log(response))
// .then(data => console.log(data))
// .catch(error => console.log(error))

//POST

// fetch('https://dummyjson.com/products/add',{
//     method: 'POST',
//     headers: {
//         'Content-type' : 'application/json'
//     },
//     bosy: JSON.stringify({
//         description: 'Iphone 19',
//         price: '1000',
//         rating: '9/10'
//     })
// })
// .then(response => console.log(response))
// .then(data => console.log(data))
// .catch(error => console.log(error))


//PULL

// fetch('https://dummyjson.com/products/1',{
//     method: 'PUT',
//     headers: {
//         'Content-type' : 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'iphone 19',
//         description: 'changed to Iphone 19',
//         price: '1000',
//         rating: '9/10'
//     })
// })
// .then(response => console.log(response))
// .then(data => console.log(data))
// .catch(error => console.log(error))


const getAllProducts = async () => {
    try{
        const response = await fetch('https://dummyjson.com/products/');
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.log(error);
    }

}

getAllProducts();