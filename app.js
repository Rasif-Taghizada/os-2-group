// Maraqlı suallar part-1:

//! Task-1
// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }

// numbers; // => ???

//! Task-2:
// function arrayFromValue(item) {
//   return
//     [item];
// }

// arrayFromValue(10); // => ???

//! Task-3:
// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo);
//     console.log("outer func:  self.foo = " + self.foo);
//     (function () {
//       console.log("inner func:  this.foo = " + this.foo);
//       console.log("inner func:  self.foo = " + self.foo);
//     })();
//   },
// };
// myObject.func();

//! this -> object , object assing
//! window

//! Task-4:
// var hero = {
//   _name: "John Doe",
//   getSecretIdentity: () => {
//     return this._name;
//   },
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity()); // hecne qaytarmir // error
// console.log(hero.getSecretIdentity()); // John Doe

//! Task-5:
// var length = 10;
// function fn() {
//   console.log(this.length); //10
// }

// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   },
// };
// console.log(this.arguments);

// obj.method(fn, 4);

//! Task-6:
// let a = 5;
// console.log(this.a);

// let arr = ["true", true, 20, "Nigar", [1, 2, 3]];

// let result = arr.filter((elem) => elem === Boolean(elem));
// console.log(result);
