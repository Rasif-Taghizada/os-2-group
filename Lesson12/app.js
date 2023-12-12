// Scope and Closure
// IIFE -> explain
// Micro task:

//! Scope => əhatə dairəsi
/*
    1). Global scope
    2). Block scope
    3). Function scope
*/

//* Global scope
// var a = 10;
// console.log(a);
// console.log(window.a); // globalda yaratdigimiz butun deyisenler window obyektine assign olunurlar

// debugger;
// console.log("birinci konsol " + a); //undefined
// var a = 20;
// console.log("ikinci konsol " + a); // 20

//* Block scope -> "var" vecine almir
// {
//     const a = 20;
// }
// console.log(a);

// var ad;
// {
//   ad = "Ramil";
// }
// console.log(ad);

//! block scopea aiddir => if,elseif,else,for loops, switch-case,while,do-while

//* Function scope => bu scope icerisinde olan deyisenler globalda gorunmur
//NOTE: IIFE basqa hamisi yalandi :D -> IIFE icerisinde olan deyisenleri biz globala cixara bilirik

// function test() {
//   var ad = "Rasif";
//   return ad;
// }
// test();
// console.log(ad);

// function hesabla() {
//   let say = 0; //
//   function artirmaq() {
//     say++; // artir
//     return say; // artirlan deyer geri qaytarilir
//   }
//   return artirmaq;
// }
// let cavab = hesabla();
// console.log(cavab());
// console.log(cavab());
// console.log(cavab());

// function counter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(count);
//   }
//   function decrement() {
//     count--;
//     return count;
//   }

//   return {
//     artirmaq: increment,
//     azaltmaq: decrement,
//   };
// }

// let result = counter();
// result.artirmaq();
// console.log(result.artirmaq());
// console.log(result.artirmaq());
// console.log(result.azaltmaq());

// setTimeout(() => {
//   console.log("nese is gordu");
// }, 1000); // 1saniye sonra bu metod ise duserek konsolu ekrana verecek

// let time = setInterval(() => {
//   console.log("bura konsoldur");
// }, 500);

// setTimeout(() => {
//   clearInterval(time);
// }, 10000);

//! IIFE => Immidetly Invoked Function Expression

// (function (name) {
//   console.log(name);
// })("Ramil");
// for (var i = 0; i < 3; i++) {
//   (function (id) {
//     setTimeout(function () {
//       console.log("seconds: " + id);
//     }, id * 1000);
//   })(i);
// }

//! IIFE explain:

// script.js

// app.js

//! Encapsulation pozulub!
// let counter = {
//   number: 0,
//   increment: function () {
//     return ++this.number;
//   },
//   decrement: function () {
//     return --this.number;
//   },
// };

// console.log(counter.increment());
// counter.number = 10;
// console.log(counter.decrement());

//! Enkapsulasiya pozuldu!
// function encap() {
//   let number = 0;
//   function increment() {
//     return ++number;
//   }
//   return increment;
// }
// let result = encap();
// result = 10;
// console.log(result());

// //! IIFE encapsulation:
// let cavab = (function () {
//   // private members
//   let number = 0;
//   let increment = function () {
//     return ++number;
//   };

//   let decrement = function () {
//     return --number;
//   };

//   return {
//     // public members
//     increment,
//     decrement,
//   };
// })();
// console.log(cavab.increment());
// console.log(cavab.increment());
// console.log(cavab.increment());
// console.log(cavab.decrement());
// console.log(cavab.decrement());
