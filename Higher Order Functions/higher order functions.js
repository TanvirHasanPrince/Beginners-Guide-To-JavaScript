// // Higher order function that takes another function as an argument
// function sayHello (callback) {
//  console.log(`Hello`);
// callback()
// }

// // Callback function that is passed to the higher order function
// function sayGoodbye() {
//  console.log('Goodbye');
// }

// sayHello(sayGoodbye);


// Define functions as data
// const add = function (a, b) {
//  return a + b
// }

// const substract = function (a,b) {
//  return a -b
// }

// const multiply = function (a, b) {
//  return a * b
// }

// // Store functions in an array 
// const operations = [add, substract, multiply]

// console.log(operations[0](5,5));
// console.log(operations[1](10,5));
// console.log(operations[2](5,3));

function higherOrderfunction (callback, value) {

 // Call the callback function with the provided value
 const result = callback(value);
 return result
}

function doubleNumber (x) {
 return x * 2
}

const result = higherOrderfunction(doubleNumber, 5);

console.log(result);