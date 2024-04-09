# Objects

In JavaScript, objects are fundamental data types that represent a collection of related data and functionality. They are used to store key-value pairs where keys are strings (or Symbols) and values can be of any data type, including other objects, functions, arrays, or primitive values like strings, numbers, and booleans. Objects in JavaScript can be created using object literals, constructor functions, or the class keyword (introduced in ECMAScript 6).

At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice. We’ve been using the power of objects all along, but now it’s time to understand the mechanics of objects and start making our own!

### Creating Object Literals
Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal


### Property Assignment
Once we’ve defined an object, we’re not stuck with all the properties we wrote. Objects are mutable meaning we can update them after we create them!

We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

- If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
  
- If there was no property with that name, a new property will be added to the object.

### Methods
When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

### Nested Objects
In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!


### Looping Through Objects
Loops are programming tools that repeat a block of code until a condition is met. We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the for...in syntax .