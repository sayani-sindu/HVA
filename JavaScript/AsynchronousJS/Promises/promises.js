//promises

//what is a promise

// A promise s aan assurance or guarantee that something will happen in the future. 
//A person can promise another person a specific outcome or result. A promise is an object that holds the future value of an async operation.


//states => pending, fulfilled, rejected


const promise = new Promise((resolve, reject) => {
    const allWentWell = true;
    if (allWentWell) {
        resolve("All things went well!");
    } else {
        reject("Oops! Something went wrong");
    }
});

promise
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error);
    });

const promisePending = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if (randomNumber < 4) {
            resolve("Well Done! You Guessed Right!");
        } else {
            reject("Oops! You guessed it wrong");
        }
    }, 2000);
});


promisePending
    .then((value)=>{
    console.log(value);
})
    .catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("promise completed");
});


const promiseOne = new Promise((resolve, reject)=>{
    resolve("Well Done! First promise is resolved");
});

const promiseTwo = new Promise((resolve, reject)=>{
    resolve("Well Done! Second promise is resolved");
});

const promiseThree = new Promise((resolve, reject)=>{
    reject("Sorry! Third promise is rejected");
});


// promiseOne
//     .then((value) => {
//         console.log("promiseOne:", value); 
//         return promiseTwo; 
//     })
//     .catch((error) => {
//         console.log("Error in promiseOne:", error); 
//         return promiseTwo; 
//     })
//     .then((value) => {
//         console.log("promiseTwo:", value);
//         return promiseThree; 
//     })
//     .catch((error) => {
//         console.log("Error in promiseTwo:", error); 
//         return promiseThree; 
//     })
//     .then((value) => {
//         console.log("promiseThree:", value); 
//     })
//     .catch((error) => {
//         console.log("Error in promiseThree:", error); 
//     });
// promiseOne
//     .then((value)=>{
//         console.log(value);
//         promiseTwo.then((data)=>{
//             console.log(data);
//             promiseThree.then((data)=>{
//                 console.log(data);
//             }).catch((error)=>{
//                 console.log(error);
//             })
//         }).catch((error)=>{
//             comsole.log(error);
//         })
//     }).catch((error)=>{
//         console.log(error);
//     });

promiseOne
    .then((value)=>{
        console.log(value);
        return promiseTwo;
    })
    .then((value)=>{
        console.log(value);
        return promiseThree;
    })
    .catch((error)=>{
        console.log(error);
    });


const promiseAllOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise one completed");
    },2000);
});

const promiseAllTwo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Promise two rejected");
    },1000);
});

Promise.all([promiseAllOne,promiseAllTwo])
    .then((data)=>{
    console.log(data[0],data[1]);
    })
    .catch((error)=>{
        console.log(error)
    })

