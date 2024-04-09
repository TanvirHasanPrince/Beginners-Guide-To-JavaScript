## Variables in JavaScript
In programming, a variable is a container for a value. You can think of variables as little containers for information that live in a computer’s memory. Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.

Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.

In short, variables label and store data in memory. It is important to distinguish that variables are not values; they contain values and represent them with a name.

In this lesson, we will cover how to use the var, let, and const keywords to create variables.

### Create a Variable: var
There were a lot of changes introduced in the ES6 version of JavaScript in 2015. One of the biggest changes was two new keywords, let and const, to create, or declare, variables. Prior to the ES6, programmers could only use the var keyword to declare variables.

var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.

### There are a few general rules for naming variables:
Variable names cannot start with numbers.
Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
Variable names cannot be the same as keywords. 


### Create a Variable: let
The let keyword was introduced in ES6. The let keyword signals that the variable can be reassigned a different value. 

Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. 


### Create a Variable: const
The const keyword was also introduced in ES6, and is short for the word constant.

However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.

Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.


### String Concatenation with Variables
The + operator can be used to combine two string values even if those values are being stored in variables