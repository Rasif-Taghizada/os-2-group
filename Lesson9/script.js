//! JS String Methods:
// let name = 'Rasif, "MasterCode Academy" muellimi'
// console.log(name);
// let str = `
//     Lorem ipsum dolor sit
//     amet consectetur adipisicing elit.
//     Velit, quia odio quos et quisquam
//     sint distinctio, in cumque sapiente eaque,
//     sunt magnam porro at eum. Est aut ipsum rem dicta.
// `;

// console.log(str);
//* 1. length
// let text = "Hello World!";
// console.log(text.length);
// console.log(text[text.length - 1]);

//* 2. replace
// let text = "Hello World!";
// let result = text.replace("!", "?");
// console.log(result);
// tel pattern: [0-9]{3}-[0-9]{3}-[0-9]{4}

// checkCleanPhone("123-456-7890");
// checkCleanPhone("(077)-307-80-42"); //1234567890
//* first method:
// function checkCleanPhone(phone) {
//   let numbers = "1234567890";
//   let char = "";
//   for (let i = 0; i < phone.length; i++) {
//     if(numbers.includes(phone[i])){
//         char += phone[i];
//     }
//   }
//   console.log(char);
// }

//* second method:
// checkCleanPhone("(077)-307-80-42"); //1234567890
// function checkCleanPhone(phone) {
//   let regex = /\D/g;
//   let result = phone.replace(regex, "");
//   console.log(result);
// }

//* indexOf()
// let text = "JavaScript is not Java";
// console.log(text.indexOf("avaJ"));

//* startWith()
// let text = "JavaScript is not Java";
// console.log(text.endsWith("Ja"));

//* toUpperCase()
// let text = "JavaScript";
// let str = "";
// for (let i = 0; i < text.length; i++) {
//   if (text[i] === text[i].toUpperCase()) {
//     str += text[i].toLowerCase();
//   } else {
//     str += text[i].toUpperCase();
//   }
// }
// console.log(str);

//* repeat()
// let text = "JavaScript";
// console.log(text.repeat(3));

//* substring()
// let text = "JavaScript";
// let result = text.substring(10, 4);
// let result2 = text.slice(10, 4);
// console.log(result);
// console.log(result2);

//* split()
// let text = "JavaScript,HTML,CSS,React,NodeJS,ExpressJS";
// let result = text.split(",", 4);
// console.log(result);

//* Task: isAnagram()

// function isAnagram(str) {}

// isAnagram("elbow", "below"); // true
// isAnagram("listen", "silent"); // true

// function isPalindrome(str) {
//     let ters = str.split("").reverse().join("");

//   if(ters === str){
//       console.log(true);
//   }
//   else{
//       console.log(false);
//   }
// }

// isPalindrome("ənənə"); // true
// isPalindrome("madam"); // true
// isPalindrome("rasif"); // false

//* Task2:
// function dictionary(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (Object.keys(obj).includes(str[i])) {
//       obj[str[i]] += 1;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }

//   console.log(obj);
// }
// dictionary("adsfhdfhdsshdfsksdfsdfsdf");

/*
    {
        "a":1
        "d": 7
    }
*/

//! replaceAll - netice uygun tapdigi hamisini deyisdirir
// let text = "Rasif dsksdfjkfff sdjksdfjkdsf";
// let replaceAll = text.replaceAll("f", "m");
// let replace = text.replace("f", "m");
// console.log(replaceAll);
// console.log(replace);

//! concat()
// let text = "Rashad";
// let str2 = " yaxsi";
// let str3 = " oxuyur";
// let result = text.concat(str2, str3);
// console.log(result);

//! trim()
// let inputValue = "   userName    ";
// console.log(inputValue);
// console.log(inputValue.trim());

//! charCodeAt()
// const greeting = "Good morning!";
// let codeAt = greeting.charCodeAt(2);
// console.log(codeAt);

//* Tasks:

//! Task1:
// let text =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni voluptatum optio suscipit itaque aliquid distinctio nesciunt quod cupiditate officiis! Eum quae labore blanditiis ducimus fugiat iste suscipit quibusdam perferendis eius.";
// let sliceText = text.slice(0, 50).concat("...");
// document.write(sliceText);

//! Task2:
// function removeCharacters(text, arr) {
//   const textToArray = text.split("");
//   for (let i = 0; i < textToArray.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (textToArray[i] === arr[j]) {
//         textToArray.splice(i, 1);
//       }
//     }
//   }
//   console.log(textToArray.join(""));
// }
// console.log(removeCharacters("I am an example string", ["a", "x"]));

// Rashad methods:
// function removeCharacters(text, arr) {
//   for (let i = 0; i < text.length; i++) {
//     if (arr.includes(text[i])) {
//       console.log(text[i]);
//       text = text.replaceAll(text[i], "");
//     }
//   }
//   console.log(text);
// }
// removeCharacters("I am an example string", ["a", "x"]);

// let input = document.querySelector("input");
// let text = document.querySelector("p");
// let btn = document.querySelector("button");

// input.addEventListener("keyup", (e) => {
//   let inputValue = e.target.value;
//   text.innerHTML = inputValue;
// });

//! E-olymps tasks:
// input
// let num = 22345; // 33355
// let strNum = String(num); // "22345"
// let result = "";
// for (let i = 0; i < strNum.length; i++) {
//   if (strNum[i] % 2 == 0) {
//     console.log(typeof strNum[i]);

//   }
//   result += strNum[i];
// }
// console.log(result);

// while loop
// let num = 1234584625; // 1335595735
// let result = ""; //537
// while (num > 0) {
//   let sonuncu = num % 10; // 5,4,3,2,1
//   console.log(sonuncu);
//   if (sonuncu % 2 == 0) {
//     sonuncu++;
//   }
//   result += sonuncu;
//   num = parseInt(num / 10); //0
// }
// console.log(+result.split("").reverse().join(""));

let n = 100; //9,90,900,9000
let result = Math.pow(10, n - 1);
console.log(9 * result);
