//! Functions
//* Function Declaration:
// sayHello();
// function sayHello() {
//   console.log("hello function declaration");
// }

//* Function Expression:
// const sayHello = function adiniDe() {
//   console.log("hello function expression");
// };

//* Arrow Function:
// const sayHello = () => console.log("hello arrow function ");
// sayHello();

//* IIFE
// (function say() {
//   console.log("IIFE");
// })();

//* funksiyanin return etmesi
// let a = 10;
// let b = 20;
// function toplama() {
//   return a + b; // 30
// }
// let cavab = toplama(); //30
// console.log(cavab);
// console.log(toplama());

// function birinci() {
//   return { ad: "Elvin", soyad: "Taghizade", };
// }
// function ikinci() {
//   return
//   { ad: "Elvin"; soyad: "Taghizade"; }
// }
// console.log(birinci());
// console.log(ikinci());

//! Arguments vs Parameters
// function sayName(name, _, age = 19) {
//   console.log(name, age);
// }
// sayName("Rasif", "Taghizade", 20);
// sayName("Ramil", "Rasulov", 25);
// sayName("Rashad", "Valiyev");
// sayName("Ramin", "Aliyev", 15);

//? Task 1
// toplama(10, 20);
// toplama(10, 30);
// cixma(50, 30);
// function toplama(a, b) {
//   console.log(a + b);
// }
// function cixma(a, b) {
//   console.log(a - b);
// }
// function vurma(a, b) {
//   console.log(a * b);
// }
// function bolme(a, b) {
//   console.log(a / b);
// }

//! Task-1:
//! Birinci usul:
// function ededinCevrilmesi(reqem) {
//   let str = "";

//   while (reqem > 0) {
//     str = str + (reqem % 10);
//     reqem = parseInt(reqem / 10);
//   }
//   return Number(str);
// }
// console.log(ededinCevrilmesi(32243));
// console.log(ededinCevrilmesi(12345));

//! Ikinci usul:
// let num = 12345;
// let str = String(num); // "12345"
// let result = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   result += str[i];
// }
// result = Number(result);
// console.log(result);

//! Ucuncu usul:
// let num = 12345;
// let result = Array.from(String(num));
// console.log(+result.reverse().join(""));
