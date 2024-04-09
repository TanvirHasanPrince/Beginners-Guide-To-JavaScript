## String Concatenation in JavaScript

String concatenation is the process of combining two or more strings into a single string. In JavaScript, string concatenation can be achieved using the `+` operator or the `concat()` method.

### Using the `+` Operator:

```javascript
var str1 = 'Hello';
var str2 = 'World';
var combinedString = str1 + ' ' + str2; // combinedString equals 'Hello World'
```

### Using the concat() Method:
var str1 = 'Hello';
var str2 = 'World';
var combinedString = str1.concat(' ', str2); // combinedString equals 'Hello World'

### Template Literals (ES6):
Template literals provide a more flexible and readable way to concatenate strings by allowing embedded expressions and multiline strings.
var str1 = 'Hello';
var str2 = 'World';
var combinedString = `${str1} ${str2}`; // combinedString equals 'Hello World'
