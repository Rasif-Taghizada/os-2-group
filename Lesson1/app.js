//! Window object;
// console.log(window.document.body);
// DOM = Document Object Model
// BOM = Browser Object Model


//! Data Types:
/*
    1. Primitive Data Types:
    number,string,boolean(true,false),NaN(not a number),undefined,symbol,null(js sehvi), bigInt(the same long long int in C++)
    2. Reference Data Types(Non-Primitive Data Types):
    array(massiv), object(OOP), function
*/

/*
    2015-ci ile qeder(ES6) yalniz ve yalniz "var" acar sozunden istifade edirdiler;
    deyisenlerin teyin olunmasi ucun 3acar soz var: var, let , const
    ! hoist(qaldirmaq) olunur -> Hoisting mentiqi => var acar sozunde , function declaration
*/

//! Number type:
// let age = -0.5;
// console.log(typeof age);

//! String type:
// let userName = '"MasterCode Academy"-in dersleri';
// console.log(userName);

// backtik `` -> template literal
// let err = "menim errorum"
// let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in
//       alias voluptates, aspernatur blanditiis, unde sapiente dolorem doloremque
//       iusto numquam accusantium provident illo? Quasi ${err} dolor unde eos amet
//       quibusdam.`
// console.log(lorem);

//! Boolean type:
// let isMarried = false;
// console.log(isMarried);

//! NaN type:
// reqem olmayan bir value uzerinde, reqem emeliyyati aparmaq isteyende NaN alinir;
// console.log(typeof ("rasif" - 10));

//! Null type:
//* null-un ozunu biz teyin edirik;
// var name = null; // string, number, boolean
// console.log(typeof null); // object

//! Undefined type:
//* undefined deyiseni teyin etmeden istifade etmek isteyende alinir;
// let user;
// console.log(user);

//! BigInt type:
// let num = 9007199254740991n;
// console.log(num);

//! Symbol type:
// let smb = Symbol("abc"); // unique
// console.log(smb);


//? NOTE: JavaScript ile biz istifadeciden deyer ala bilmerik;
// let userName = prompt("Adinizi daxil edin: ");
// let userIsMarried = confirm("Evlisen bala?")
// let userError = alert("Big error");
// console.log(userError);
// canvas


//! Reference Data Types:
//? Array type:
// let arr = [11, 2, 13, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr);


//? Object type:
// let user = {
//     name: "Rashad",
//     age: "19",
//     isMarried: true
// }

// console.log(user);


//! Function type:
// function sayHello() {
//     return "Hello World"
// }
// console.log(typeof sayHello)
