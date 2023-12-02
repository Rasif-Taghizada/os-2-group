//! Task
// let arr1 = [3, "a", 3, 2, 3, "a", 3, "a", 2, 4, "a", "a", 9]; // a => 2; "3" => 4 ; "2" => 1
// let maxCount = 0; // cavab ucun => 3
// let elem;
// for (let i = 0; i < arr1.length; i++) {
//   let count = 0;
//   for (let j = 0; j < 7; j++) {
//     if (arr1[i] == arr1[j]) {
//       count++;
//     }
//   }

//   if (maxCount < count) {
//     maxCount = count;
//     elem = arr1[i];
//   }
// }
// console.log(maxCount);
// console.log(elem);

// let massiv = ["rasdif", 1, 10, true];
// console.log(massiv.findIndex(true));
// let arr6 = [1, 2, -2, 4, 5, 4, 7, 8, 8, 7, 7, 71, 3, 6];
// let dublicateArr = [];
// function duplicateValues(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         console.log(arr[i]);
//       }
//     }
//   }
//   return dublicateArr;
// }
// console.log(duplicateValues(arr6));

let array = [6, 9, 15, 6, 13, 9, 11, 15, 15, 15];
let index = 0,
  newArr = [];
const length = array.length; // to get length of array
function findDuplicates(arr) {
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
        newArr[index] = arr[i];
        index++;
      }
    }
  }
  return newArr;
}
console.log(findDuplicates(array));
