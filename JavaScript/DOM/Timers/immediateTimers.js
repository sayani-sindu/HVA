console.log("Start");

// Schedule an immediate action and store its ID
const immediateId = setImmediate(() => {
  console.log("Executed by setImmediate");
});

// Use setTimeout to delay the call to clearImmediate, allowing the immediate action to be executed
setTimeout(() => {
  clearImmediate(immediateId);
  console.log("Immediate action cancelled");
}, 1000);

console.log("End");
