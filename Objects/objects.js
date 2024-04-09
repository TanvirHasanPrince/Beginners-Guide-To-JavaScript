const person = {
 name: "John",
 age: 30,
 isStudent: false,
 profession: {
  title : "Wrestler",
  salary: 50000,
  greet: function () {
   console.log(`Hello, I am ${person.name} and my profession is ${this.title}`);
  }
 }
}

// Loop through the properties of the person object

for (let key in person) {
 if (typeof person[key] === 'object') {
  for (let innerkey in person[key]) {
   console.log(`${innerkey}: ${person[key][innerkey]}`);
  } 
 } else {
  console.log(`${key}: ${person[key]}`);
 }

}

