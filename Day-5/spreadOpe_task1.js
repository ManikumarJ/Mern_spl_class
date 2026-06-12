// Task 1: Spread Operator Input 
// const frontend = ["HTML", "CSS", "JavaScript"];
//  const backend = ["Node.js", "MongoDB"];
// Task Using Spread Operator: Create a new array called fullStack.

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "MongoDB"];

const fullStack = [...frontend, ...backend]

console.log(fullStack);
