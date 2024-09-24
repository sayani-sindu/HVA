let timeoutId = setTimeout(() => {
    console.log("before timeout cancelled"); // First statement
  }, 5000);
  
  // Log the timeoutId to the console if you want to check it
  console.log(timeoutId);
  
  setTimeout(() => {
    clearTimeout(timeoutId);  // Cancel the first timeout (if it hasn't run)
    console.log("Timer cancelled"); // Second statement
  }, 7000);

console.log('End');