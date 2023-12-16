//! DRY => Don't repeat yourself
//! Class Function:

// var rashad = {
//   fullName: "Rashad Valiyev",
//   age: 19,
//   skill: ["HTML", "CSS"],
// };
// var nigar = {
//   fullName: "Nigar Ashurova",
//   age: 24,
//   skill: ["React", "Vue"],
// };

// function Person(ad, yas, bacariq) {
//   this.fullName = ad;
//   this.age = yas;
//   this.skill = bacariq;
//   this.getBirthDay = function () {
//     return 2023 - this.age;
//   };
// }

// let rashad = new Person("Rashad Valiyev", 19, ["HTML", "CSS"]);
// let nigar = new Person("Nigar Ashurova", 24, ["React", "Vue"]);
// console.log(rashad.age);
// console.log(nigar);
// console.log(nigar.getBirthDay());

//! Task: bankdan pul cekmek ->
// function Musteri(ad, balans, cardNo) {
//   this.clientName = ad;
//   this.balans = balans;
//   this.card = cardNo;

//   this.hesabla = function (mebleg, cardNomresi) {
//     if (cardNomresi == this.card && this.balans >= mebleg) {
//       this.balans = this.balans - mebleg;
//       return this.balans;
//     } else {
//       console.error("Para yok abi :(");
//     }
//   };
// }

// let sona = new Musteri("Sona xanim", 5000, "12345");
// let rashad = new Musteri("Rashad", 2000, "24092004");
// console.log(sona);
// console.log(sona.hesabla(3000, "12345"));
// console.log(sona);
// console.log(rashad.hesabla(1999,'24092004'));

//! Prototype:
// let Person = function (name, yearOfBirthday, job) {
//   this.name = name;
//   this.yearOfBirthday = yearOfBirthday;
//   this.job = job;
// };
// Person.prototype.calculateAge = function () {
//   return 2023 - this.yearOfBirthday;
// };
// let rasif = new Person("Rasif", 2002, "FrontEnd");
// console.log(rasif.calculateAge());
// console.log(rasif);

//! call,apply,bind
/**
 * call -> ikinci arqumentleri adi reqem kimi qebul edir ve normal isleyir. Aralarindan en normali budur :D
 * bind -> return eleyir ve donen deyeri sen alib cagirmalisan
 * apply -> digerlerinden ferqi ondadir ki, ikinci arqumentler massiv seklinde qebul edilir
 */

// let anotherNumbers = {
//   num1: 50,
//   num2: 30,
// };
// let numbers = {
//   num1: 30,
//   num2: 40,
//   calc: function () {
//     return this.num1 + this.num2;
//   },
// };

// function cem(number1, number2, number3) {
//   return this.num1 + this.num2 + number1 + number2 + number3;
// }

// console.log(cem.apply(anotherNumbers, [20, 40, 60]));

// let result = cem.bind(anotherNumbers, 20, 30, 40);
// console.log(result());

// console.log(cem.call(anotherNumbers, 20, 30, 40));

//! Task:

var salam = function (age) {
  console.log("Salam aleykum " + this.name + " Yasi: " + age);
};

let rashad = { name: "Rashad" };
salam.call(rashad, 20);
salam.apply(rashad, [20]);
let result = salam.bind(rashad, 20);
console.log(result());
