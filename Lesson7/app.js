// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// arr2.push(6);
// console.log(arr);
// console.log(arr2);

// let userName = "Rasif";
// let surName = "Rasif";
// console.log(userName === surName);
//! Array nece isleyir:
// let massiv = {
//   length: "some code",
//   push: "some code",
//   pop: "some code",
//   shift: function () {
//     //some code
//   },
// };

// const arr = [1, 2, 3, 4, true, NaN, undefined, [1, 2, 3]]; //good
// const arr2 = new Array(5); //bad  [undefined, undefined, undefined, undefined, undefined]

//! Length:
// console.log(arr2[3]);

//!  Massivin sonuncu elementine catmaq:
// console.log(arr.length - 1);
// console.log(arr[4]);
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-4));

//! Push:
// let massiv = [1, 2, 3, 4, true, NaN];
// // massiv.push();

// function push(arr, element) {
//   arr[arr.length] = element;
//   return arr;
// }
// console.log(push(massiv, "Umid"));

//! Pop:
// let massiv = [1, 2, 3, 4, true, NaN];
// console.log(massiv.pop());
// console.log(massiv);

//! Shift:
// let massiv = [1, 2, 3, 4, true, NaN];
// console.log(massiv.shift());
// console.log(massiv);

//! Unshift:
// let massiv = [1, 2, 3, 4, true, NaN];
// console.log(massiv.unshift("Ramil", "Rashad", "Umid"));
// console.log(massiv);

//! Slice() => dilim,hisse,tike:
// let massiv = [1, 2, 3, 4, true, NaN];
// console.log(massiv.slice());
// console.log(massiv.slice(3));
// console.log(massiv.slice(0, 3));

//! Splice()
// let massiv = [1, 2, 3, 4, true, NaN];
// let addData = ["Rasif", "Rashad", "Umid"];
// console.log(massiv.splice(2, 2));
// console.log(massiv.splice(4, 0, ...addData));
// console.log(massiv);

//! Reverse()
// let massiv = [1, 20, 3, 40, true, NaN];
// console.log(massiv.reverse() === massiv); // true

//! Sort()
// let nums = [19, 20, 30, 40, 15, 56, 72, 8, 96, 10];
// console.log(nums.sort((a, b) => b - a));
// console.log(nums.sort());
// let str = ["Rashad", "Rasif", "Ramil"];
// console.log(str.sort());

//! toString()
// let massiv = ["Red", "Green", ["White", "Black"]];
// console.log(massiv.toString());

//! Join()
// let massiv = ["Red", "Green", "White", "Black"];
// console.log(massiv.join(","));

//! Concat()
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8];
// let arr3 = [9, 10, 11];

//* 1-ci variant:
// console.log(arr2.concat(arr1, arr3));
// console.log(arr1);

//* 2-ci variant:  ... => spread operator
// console.log([...arr2, ...arr1, ...arr3]);

//! indexOf() and lastIndexOf()
//TODO let arr1 = [1, true, null, "3", "Rashad", null, NaN, [10, 20, 40]];
// console.log(arr1.indexOf(null, 4));
// console.log(arr1.lastIndexOf(NaN));
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] == [10, 20, 40]) {
//     console.log(i);
//   }
// }

//! findIndex()
// let arr1 = [1, true, null, NaN, "3", "Rashad", null];
// arr1.findIndex((elem, index) => {
//   if (elem == null) {
//     console.log(index);
//   }
// });

//! find()
// let arr1 = [2, 46, 8, 99, 7];
// function isODD(num) {
//   return num % 2 !== 0;
// }
// console.log(arr1.find(isODD));
//* short variant: arrow function
// console.log(arr1.find((num) => num % 2 !== 0));

//! includes()
// let arr1 = [2, 46, 8, 99, 7];
// console.log(arr1.includes(98));

//! ForEach()
// let arr1 = [10, 5, 9, 24, 35, 46, 7];
// let arr = ["Rasif", null, 21, true, "Rashad", 20, "Umid"];
// arr1.forEach(function (value, index, array) {
//   console.log(value * 2);
// });

//! Map()
// let arr1 = [10, 5, 9, 24, 35, 46, 7];
// let result = arr1.map(function (elem, index, massiv) {
//   return elem * 2;
// });
// console.log(result);

//! Filter()
// let arr = ["Rasif", null, 21, true, "Rashad", 20, "Umid"];
// let result = arr.filter((elem) => typeof elem === "number");
// console.log(result);

//! Some()
// let arr = [19, 21, 23, 25];
// console.log(arr.some((elem) => elem % 2 === 0));

//! Every()
// let arr = [19, 21, 23, 25, 27];
// console.log(arr.every((elem) => elem % 2 !== 0));
// * Task:
// let massiv = [1, 1, 1, 1, 4];
// console.log(massiv.every((elem, index, arr) => elem === arr[0]));

//! flat()
// let massiv = [1, 2, 3, ["rasif", [21, true]], [7, 8, 9]]; // [1, 2, 3, "rasif", 21, true, 7, 8, 9]
// console.log(massiv);
// console.log(massiv.flat(Infinity));
// console.log(massiv.toString().split(","));  //! wrong variant

//! reduce()
// let arr = [10, 5, 9, 24, 35, 46, 7];
// let result = arr.reduce((prev, curr, currIndex) => {
//   // prev = 4; curr = 10; currIndex = 0;
//   // prev = 14; curr = 5; currIndex = 1;
//   return (prev += curr);
// }, 10);
// console.log(result);

// * Task: ["Sona", "Eyvaz", "Afsana", "Rasif", "Rashad", "Umid"]
let words = ["Sona", "Eyvaz", "Afsana", "Rasif", "Rashad", "Umid"];
let result = words.reduce(function (prev, curr) {
  // prev = Sona; curr = Eyvaz;
  // prev = Eyvaz; curr = Afsana;
  // prev = Afsana; curr = Rasif
  // prev = Afsana; curr = Rashad
  return prev.length > curr.length ? prev : curr;
});
console.log(result);
