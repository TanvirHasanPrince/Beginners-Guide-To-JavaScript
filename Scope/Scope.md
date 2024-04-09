# Scope
In JavaScript, "scope" refers to the context in which variables, functions, and objects are accessible. There are mainly two types of scope:

- Global Scope: Variables declared outside of any function have global scope, meaning they can be accessed from anywhere within the script.

- Local Scope: Variables declared within a function have local scope, meaning they are accessible only within that function.

- JavaScript also has lexical scoping, meaning inner functions can access variables from outer functions, but not vice versa.

### Scope Pollution
Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

### Practice Good Scoping

1. **Minimize Global Variables**: Limit their use to prevent naming conflicts and unintended modifications.

2. **Use Function Scope**: Declare variables within the smallest possible scope to avoid pollution.

3. **Avoid Variable Hoisting**: Declare variables at the beginning of their scope for clarity.

4. **Use Block Scope with let and const**: Confine variables to the nearest curly braces to prevent modification.

5. **Avoid Namespace Pollution**: Prefix variables to prevent conflicts with other scripts or libraries.

6. **Use Strict Mode**: Enforce stricter rules to catch common coding mistakes.

7. **Use IIFEs**: Create private scopes to encapsulate functionality.

8. **Use Modules**: Organize code into modules to manage dependencies and prevent scope pollution.
