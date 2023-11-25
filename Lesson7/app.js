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
// console.log(massiv.splice(2, 2));
// console.log(massiv.splice(4, 0, "Rasif", "Ramil"));
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
// let massiv = ["Red", "Green", "White", "Black"];
// console.log(massiv.toString());

//! Join()
// let massiv = ["Red", "Green", "White", "Black"];
// console.log(massiv.join(","));
