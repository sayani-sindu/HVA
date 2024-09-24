//promise methods =====>Promise.resolve(), Promise.reject(), Promise.All(), Promise.allSettled(), Promise.race(), Promise.any()








// const p1 = Promise.resolve(3);
// const p2 = Promise.reject("Error");
// const p3 = Promise.resolve(5);

// Promise.allSettled([p1, p2, p3])
//   .then((results) => {
//     results.forEach((result) => {
//       if (result.status === "fulfilled") {
//         console.log("Resolved with:", result.value);
//       } else {
//         console.log("Rejected with:", result.reason);
//       }
//     });
//   });

// const p1 = Promise.reject("Error 1");
// const p2 = Promise.reject("Error 2");
// const p3 = Promise.resolve("Success");

// Promise.any([p1, p2, p3])
//   .then((value) => {
//     console.log("Resolved with:", value);
//   })
//   .catch((error) => {
//     console.log("All promises were rejected:", error);
//   });


const p1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'));
const p2 = new Promise((resolve) => setTimeout(resolve, 1000, 'Second'));

Promise.race([p1, p2])
  .then((value) => {
    console.log("Race winner:", value);
  });
