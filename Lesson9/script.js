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
