// const myArray = [1, 2, 3, 4, 5, 'last element']
// for (let i = myArray.length-1; i >= 0; i-- ) {
// console.log(myArray[i]);
// }

// Nested Loop
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [2, 3, 7, 8, 9];

// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     if (array1[i] === array2[j]) {
//       console.log(array2[j]);
//     }
//   }
// }

// const myArray = [1, 2, 3, 4, 5, "last element"];
// let i = 0
// while (i <= myArray.length-1) {
//   console.log(myArray[i]);
//   i++
// }

// Do while loop
// const myArray = [1, 2, 3, 4, 5, "last element"];
// let i = 0;

// do {
//  console.log(myArray[i]);
//  i++
// } while (i <myArray.length)

// Break Keyword
const myArray = [1, 2, 3, 4, 5, "last element", 7, 8, 9, 10];

for (let i = 0; i < myArray.length; i++) {

  if (myArray[i] === "last element") {
    // console.log(`I have skipped this element`);
    continue;

  }
  console.log(myArray[i]);

 
}
