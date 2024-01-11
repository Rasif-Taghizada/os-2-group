//! Promise nədir:
// let isSucess = true;
// let work = function (res, err) {
//   if (isSucess) {
//     res("Bu is tamamdir");
//   } else {
//     err("Bu is yerine yetirilmedi");
//   }
// };
// function resolve(data) {
//   console.log(data);
// }
// function reject(data) {
//   console.log(data);
// }
// work(resolve, reject);

//! Promise syntax:
// let promise1 = new Promise((resolve, reject) => {
//   // .. isler yerine yetirilir
//   //   resolve("data geldi");
//   reject("url sehvdir");
// });
// console.log(promise1);
// promise1
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     // console.error();
//     // throw new Error(err);
//   })
//   .finally(() => {
//     console.log("is bitti");
//   });

//! Birden cox promise:
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("First!");
//   }, 1000);
// });
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Second!");
//   }, 2000);
// });

// Promise.race([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Promise.all([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// console.log("birinci");
// console.log(Promise.resolve("ikinci"));
// setTimeout(function () {
//   console.log("ucuncu");
// }, 0);
// console.log("dorduncu");

//! Request url:
function getData(url) {
  return new Promise((resolve, reject) => {
    // XMLHttpRequest => xhr
    let req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function () {
      if (req.status == 200) {
        // resolve(JSON.parse(req.response));
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.send();
  });
}

getData("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//! Fetch API:
fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
//   .then((data) => console.log(data));
