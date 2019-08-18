let firstArray = ['1', '2', '3'];
let secondArray = ['4', '5', '6'];

function mergeArray(firstArray, secondArray) {
  for (let i = 0; i < secondArray.length; i++) {
    firstArray.push(secondArray[i]);
  }
  return firstArray;
}

const result1 = mergeArray(firstArray, secondArray);
console.log(result1);

// -----------------------------------

function vacsieAkoDva(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let actualArray = array[i];
    if (actualArray > 2) {
      newArray.push(actualArray);
    }
  }
  return newArray;
}

let array = [-1, 2, 0, 30, 4, -5, 60, 7];
// console.log(array[6]);
const result2 = vacsieAkoDva(array);
console.log(result2);
