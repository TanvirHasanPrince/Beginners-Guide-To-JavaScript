# Functions

## What are Functions?
In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.


### Parameters and Arguments

In JavaScript functions, parameters and arguments are important concepts.

**Parameters** are variables listed as part of the function definition. They act as placeholders for the values that the function will receive when it's invoked. Parameters are declared in the parentheses of the function declaration.

**Arguments** are the actual values passed to the function when it is called. They correspond to the parameters defined in the function declaration. Arguments are provided within the parentheses of the function call.

For example:

```javascript
// Function definition with parameters
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Function call with arguments
var result = addNumbers(5, 10);
console.log(result); // Output: 15
```
### Default Parameters
One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.


### Helper Function
We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. 


## Function Expressions
Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

To declare a function expression:

- Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

- Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

- To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.


## Arrow Functions
ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }

 Things to remember with arrow function:
   - Shorter Syntax: Arrow functions allow you to define functions using a shorter syntax. Instead of the function keyword, you use the => (fat arrow) syntax
   - Lexical this Binding: One significant advantage of arrow functions is their lexical this binding behavior. Traditional functions in JavaScript have their own this context, which can vary depending on how they are called. Arrow functions, however, inherit the this value from the enclosing lexical context. This means that inside an arrow function, this refers to the this value of the surrounding code. It's especially useful when working with object methods or event handlers.
   - No arguments Object: Unlike traditional functions, arrow functions do not have their own arguments object. If you need to access the arguments passed to an arrow function, you can use the rest parameters (...).