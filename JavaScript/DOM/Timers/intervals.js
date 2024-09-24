const interval = setInterval(() => console.log('hi'), 3000);

console.log(interval); // This will log the interval ID

setTimeout(() => {
    clearInterval(interval); // Clear the interval after 20 seconds
    console.log('Interval cancelled');
}, 20000);
