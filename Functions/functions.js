// let a = 5
// let b = 3

// let sum = a + b;

// console.log(sum);

// let c = 8
// let d = 10

// let sum2 = c + d

// console.log(sum2);

const sum =  (number1 = 10, number2) => {
  function isEven(num) {
    return num % 2 === 0;
  }

  if (isEven(number1)) {
    console.log(`${number1} is even`);
  }
  if (isEven(number2)) {
    console.log(`${number2} is even`);
  }
  return number1 + number2;
}

console.log(sum(2, 5));

const multiply = (num1, num2) => num1* num2

console.log(multiply(12,3));
