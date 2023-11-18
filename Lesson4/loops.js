//! For, While, Do-while loop (dovrler)
//? for of(array), for in(object)

// for (let reqem = 1; reqem <= 10; ++reqem) {
//     if (reqem % 2 != 0) console.log(reqem);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }

//* for of loop:
// let arr = ["Leman", "Reshad", 20, undefined, true]

// for (let i = 1; i <= arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(arr);
// for (let index of arr) {
//     console.log(index);
// }


//* forn in loop:
// let obj = {
//     userName: 'Eyvaz',
//     userAge: 26,
//     isMarried: true,
//     skills: ["HTML", "CSS", "JavaScript"]
// }

// console.log(obj["userName"]);

// for (let key in obj) {
//     // console.log(obj.key);  is not working method
//     console.log(obj[key]);
//     console.log(typeof key);
// }



//! While loop:
// let age = 10;
// while (age < 20) {
//     console.log(++age);
// }
// console.log(age);

//! Bize bir eded verilib; bu ededin reqemleri cemini tapmaq;
// let num = 234564;
// let cem = 0;
// while (num > 0) {
//     let reqem = num % 10; //4, 6
//     cem = cem + reqem; // 10
//     num = parseInt(num / 10); //2345
// }

// console.log(cem);
// console.log(num / 10);
// console.log(num % 10); //4


//? ededin icerisindeki reqemlerin sayini tapmaq:
// let num = 3123456;
// let say = 0;
// while (num > 0) {
//     // 3123456
//     num = parseInt(num / 10); //0
//     say++; // 7
// }
// console.log(say);

//! Hemise 3reqemli eded verilerse:
// let num = 234;
// let yuzluk = parseInt(num / 100);  //2
// let onluq = parseInt(num / 10) % 10  //3
// let teklik = num % 10  //4
// console.log(teklik + onluq + yuzluk);



//! Do while loop
// let age = 20;
// do {
//     console.log(age);
//     age++;
// } while (age < 25)
