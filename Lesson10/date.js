// JavaScript Date-Time Methods:

//! Create a date:
// const currentDate = new Date();
// console.log(currentDate);

// const rashadDate = new Date(2004, 1, 10); // 102:29=
// const date = rashadDate.getDate();
// console.log(date);
// const day = rashadDate.getDay();
// const hour = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();
// const ms = currentDate.getMilliseconds();

// console.log(rashadDate.getFullYear()); //2004
// rashadDate.setFullYear(2003);
// console.log(rashadDate.getFullYear()); //2003

// console.log(rashadDate.toDateString());
// console.log(
//   currentDate.toLocaleString("default", {
//     weekday: "narrow",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   })
// );
// console.log(rashadDate.getUTCMonth());
// console.log(rashadDate.getMonth());

//! Task:
// const currentDate = new Date(); // indiki vaxt
// const newYear = new Date(2024, 0);
// let second = 1000; // saniye icinde min milli saniye var
// let minute = 60 * second;
// let hour = 60 * minute;
// let day = 24 * hour;

// let differenceTime = newYear - currentDate;
// console.log(currentDate.getTime()); // bugunku tarixe qeder olan milli saniyeler
// console.log(newYear.getTime()); // yeni ile qeder olan milli saniyelerin sayi

//* which is the best?
// console.log(newYear.getTime() - currentDate.getTime());
// console.log(newYear - currentDate);

// let diffDay = differenceTime / day;
// console.log(parseInt(diffDay)); // milli saniye

//? bir prosses nece saniyeye yerine yetirilib?
// setInterval(() => {
//   console.log(performance.now());
// }, 2000);

// let startTime = new Date(); // hazirki vaxt

// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let endTime = new Date(); // hazirki vaxtdan biraz sonra

// console.log(endTime - startTime);

//! getTime() vs differenceTime;
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
// function diffTime(date1, date2) {
//   return date2 - date1;
// }
// function bench(f) {
//   let tarix1 = new Date(0);
//   let tarix2 = new Date();

//   let start = new Date();
//   for (let i = 0; i < 1000000; i++) {
//     f(tarix1, tarix2);
//   }
//   let end = new Date();
//   return end - start;
// }
// console.log(`bu ferq adi cixma ferqidir ` + bench(diffTime) + " ms");
// console.log(`bu ferq timeMethod cixma ferqidir ` + bench(diffGetTime) + " ms");

// let crrDate = new Date();
// console.log(crrDate);
// console.log(crrDate.setMinutes(crrDate.getMinutes() + 1));

//! Task:
// 5 Dec => C.A
let tarix = new Date(2023, 11, 7); // 3-cu gun, Çərşənbə
let hefteninGunleri = [
  "Bazar ertəsi",
  "çərşənbə axşamı",
  "Çərşənbə",
  "Cümə axşamı",
  "Cümə",
  "Şənbə",
  "Bazar",
];
let hefteninGunu = tarix.getDay();
console.log(hefteninGunu);
console.log(hefteninGunleri[hefteninGunu - 1]);
