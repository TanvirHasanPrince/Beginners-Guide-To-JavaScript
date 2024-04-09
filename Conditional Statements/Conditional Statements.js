let age = 16;
let car = false;

// if (age === 18) {
//   console.log(`This person is eligible for a driving test`);
// } else if (age === 17) {
//   console.log(`This person will have to wait 1 more year for a driving test`);
// } else if (age === 16) {
//   console.log(`This person will have to wait 2 more years for a driving test`);
// } else {
//   console.log(`This person is not eligible for a driving test`);
// }

switch (age) {
  case 18:
    console.log(`This person is eligible for a driving test`);
    break;
  case 17:
    console.log(`This person will have to wait 1 more year for a driving test`);
    break;
  case 16:
    console.log(
      `This person will have to wait 2 more years for a driving test`
    );
    break;
  default:
    console.log(`This person is not eligible for a driving test`);
    break;
}

// car
//   ? console.log(`This person is eligible for a driving test`)
//   : console.log(`This person is not eligible for a driving test`);
