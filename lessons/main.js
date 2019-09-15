let x1 = 0;
while (x1 < 6) {
  // 0, 1, 2, 3, 4, 5
  console.log(x1); // 0, 1, 2, 3, 4, 5
  x1++; // 1, 2, 3, 4, 5, 6
}

// Output: 0,1,2,3,4,5
console.log('---------------------------');

let x2 = 0;
while (x2 < 6) {
  x2++; // 0, 1, 2, 3, 4, 5, 6
  console.log(x2); //  1, 2, 3, 4, 5, 6
}

// Output: 1,2,3,4,5,6
console.log('---------------------------');

let x3 = 0;
while (x3 < 6) {
  x3++; //1, 2, 3, 4, 5, 6
}
console.log(x3); // 6
// Output: 6
