//! Conditional Statements
//? if, else if, else
// and(ve) operatoru &&
// or(ve ya) operatoru ||

// let userName = "Cavid"
// let pass = "123456"

// if (userName == "Cavid" && pass == "12345") {
//     console.log("Yanlis sistem");
// }
// else if (userName == "Cavid" && pass === 123456) {
//     console.log("elebil nese sehvlik vare :)");
// }
// else {
//     console.log("Sisteme ozum seni daxil etdim :D");
// }

// const admin = "Admin"
// const pass = 12345
// let userInput = prompt("Who's there?")

// if (userInput == null) {
//     alert("Canceled")
// }

// else if (userInput != admin) {
//     alert("I don't know you")
// }

// else if (userInput == admin) {
//     alert("Hello Admin")

//     let userPass = +prompt("Password?")

//     if (userPass == null) {
//         alert("Canceled")
//     }

//     else if (userPass !== pass) {
//         alert("I don't know you")
//     }

//     else if (userPass === pass) {
//         alert("Welcome")
//         let userName = prompt("Size nece muraciet edek?")
//         console.log(userName);
//         document.write(`Salam ${userName}`)
//     }
// }


// let age = 20;
// if (age == 7) {
//     console.log("Siz mekteblsiniz");
// }
// else if (age == 19) {
//     console.log("Siz universitetde oxuyursunuz");
// }
// else {
//     console.log("Siz ishleyirsiniz");
// }

// if (age == 7) {
//     console.log("Siz mekteblsiniz");
// }
// else if (age == 20) {
//     console.log("Siz universitetde oxuyursunuz");
// }
// else {
//     console.log("Siz ishleyirsiniz");
// }


//! Switch Case:
// let userAge = 3;
// switch (10) {
//     case 1:
//         console.log("Sizin 1 yasiniz var");
//         break;
//     case 2:
//         console.log("Sizin 2 yasiniz var");
//         break;
//     case 3:
//         console.log("Sizin 3 yasiniz var");
//         break;
//     case 4:
//         console.log("Sizin 4 yasiniz var");
//     default:
//         console.log("Sizin yasiniz tapilmadi");
//         break;
// }

// let weekDay = `
//     1: "Bazar gunu",
//     2: "Cersenbe axsami",
//     3: "Cersenbe",
//     4: "Cume axsami",
//     5: "Cume",
//     6: "Senbe",
//     7: "Bazar"

//     Seciminiz:
// `

// let userDay = +prompt(weekDay)
// console.log(userDay);

// switch (userDay) {
//     case "1":
//         console.log("Bazar ertesi");
//         break;
//     case "2":
//         console.log("Cersenbe axsami");
//         break;
//     case "3":
//         console.log("Cersenbe");
//         break;
//     default:
//         console.log("Siz reqem tipi daxil etdiniz");
//         break;
// }


// let userName = "Rashad"
// let age = 20
// if (userName == "Rashad" || age == 20) {
//     console.log("Yalniz userName beraberdir");
// }
// else if (userName == "Rashad" && age == 19) {
//     console.log("userName ve age beraberdir");
// }

//? and(&&) operatoru -> her iki teref dogru oldugunda serte daxilindeki kodu icra edir
//?  ikisinden biri falsy deyer olarsa console-a falsy deyer verilir.
//?  her ikisi falsy olsa, console-a birinci verecek
//?  her ikisi truthy olsa, console-a ikincini verecek
//* or(||) operatoru -> iki terefden yalniz biri true olarsa sert daxilindeki kodu icra eder,
//* ikisinden biri truthy deyer olarsa console-a truthy deyer verilir.
//* her ikisi falsy olsa, console-a ikinci verecek
//* her ikisi truthy olsa, console-a birinci verecek

//! CoffeScript: 
let a = 1;
let b = 0;
let c = true;
let d = false;
let e = "word"
let str = "";
let f = null;
let g = NaN;

console.log(e || c); // false