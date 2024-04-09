# Loops
A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

When we need to reuse a task in our code, we often bundle that action in a function. Similarly, when we see that a process has to repeat multiple times in a row, we write a loop. Loops allow us to create efficient code that automates processes to make scalable, manageable programs.


## The For Loop
Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

- an initialization starts the loop and can also be used to declare the iterator variable.
- a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
- an iteration statement is used to update the iterator variable on each loop.

### Nested Loops
When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

## The While Loop
A while loop in JavaScript repeatedly executes a block of code as long as a specified condition is true. It consists of the while keyword followed by a condition in parentheses. The block of code to be executed is enclosed in curly braces {}. The condition is evaluated before each iteration, and if it evaluates to true, the block of code inside the loop is executed. The loop continues to execute until the condition becomes false. It's important to ensure that the condition will eventually become false, otherwise, the loop will run indefinitely, causing a program to hang or crash.


## Do...While Statements
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.

### The break Keyword
The break keyword allows programs to “break” out of the loop from within the loop’s block.

### The Continue Keyword
The continue keyword is used in JavaScript to skip the current iteration of a loop (either for, while, or do...while) and continue with the next iteration.