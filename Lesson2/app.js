//! Operatorlar:
//? 1. Aritmetik operatorlar
//* + , - , * , / , %, ** , ++, --, -=, +=, *=, /=, %=
//? 2. Mukayise operatorlari
//* < , > , <= , >= , =, == , ===, !=, !==

//! Aritemtik operatorlar:

//! CoffeScript:
/*
    1 olan type-lar var:
    - butun sifirdan ferqli reqemler,
    - "ici dolu string",
    - true (yeni bire beraberdir),
    - ["nese"] yalniz bir element olan massivler,
    0 olan type-lar ise:
     - 0 reqem tipi,
     - "" ici bos string,
     - false,
     - [] bos massiv,
*/
//? Toplama:
//! Note: stringleri number tip ile toplayanda onlari birlesdirir.
// let a = 10;
// let b = "20";
// console.log(a + + b);

//! Note: stringleri istenilen data type ile toplayanda, diger data type-i stringe cevirir ve birlesdiri.
// let name = "Huseyn"
// let surName;
// console.log(name + surName);

// let a = 10.3
// let b = 2.4;
// console.log(a + b);

//! Cixma:
// let a = 10;
// let b = "2";
// console.log(a - b);

// let a = 10;
// let b = "sdfsdf";
// console.log(a - b); // NaN

// let a = 10;
// let b = 2.3
// console.log(a - b); // 7.7

// let a = 5;
// let b = true; // 1
// console.log(b - a);

// let a = 6;
// let b = [1, 2, 3];
// console.log(a - b);

// let a = 10;
// let b = {
//     age: 21
// }
// console.log(a - b); //  NaN

//! Vurma:
// let a = 10;
// let b = "2";
// console.log(a * b);

// let a = 10;
// let b = "sdfsdf";
// console.log(a * b); // NaN

// let a = "sdjsdkjf";
// let b = true;
// console.log(a * b); // NaN

// let a = 20;
// let b = [];
// console.log(a * b); // 20


//! Bolme:
// console.log(10 / 2); // 5
// console.log(10 / "2"); // 5
// console.log("10" / "2");
// console.log(false / 10); // 0
// console.log(-10 / false); // -Infinity
// console.log(10 / [2, 2]); // NaN
// console.log(10 / [2]); // 5
// console.log(10 / []); // Infinity

// let a = 10;
// let b = 4;
// let result = parseInt(a / b);
// console.log(result);

// String olanda noqteden sonra 2sifir yazila biler. Amma number tipi olsa sifirlarin bir onemi
// qalmadigindan noqteden sonra 2sifir yazmaq olmaz(ve ya yazilmir).
// let a = "10";
// let b = "2";
// let result = (a / b).toFixed(2)
// console.log(result);

//! Quvvete yukseltmek:
// console.log(3 ** 5); // 9

//! Module:
// console.log(20 % 3);

//! Incremet:
// let a = 10;
// console.log(a++)

// let b = 20;
// console.log(++b);


//! Decrement:
// let a = 10;
// console.log(a--) // 10
// console.log(a); //9

// let b = 20;
// console.log(--b);

//! Assignment operators:
// let a = 20;
// // a = a + 5;
// a += 5;
// console.log(a);
// let a = 9;
// a *= 4;
// console.log(a);

// let a = 2;
// // a = a ** 5;
// a **= 5;
// console.log(a);

//! Mukayise operatorlari:
// let a = 10; // assignment operator
// coercion
// console.log(10 == "10"); // two equal sign
// console.log(10 === "10"); // three equal sign
// console.log(1 == true); //true
// console.log(1 === true); //false
// console.log("true" == true);
// console.log(NaN === NaN);
// console.log(true != 1);
// console.log(10 !== "10"); //true


//! Ternary operator:
// console.log(5 >= 5);
// console.log("z" > "z");
// console.log("Rasif" > "Rashad");
//! Qayda: stringlerin muqayisesinde ilk olaraq herflerin hansinin elifbada birinci
//! geldiyine baxilir, eger hamisi eyni olarsa o zaman sozun say nisbetine baxilir
// console.log("Rashadi" > "Rashad");
// console.log("foo" > "bar");
console.log("R" > "r");