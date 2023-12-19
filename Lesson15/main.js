//! DOM => Document Object Model
//! Elementleri secmek yollari:
//* 1). GetElement sozu ile secmek -> hemise bize HTMLCollection qaytarir
//* adina gore secmek:
// const headingOne = document.getElementsByTagName("h1");
// forEach()
// headingOne.forEach(function (elem) {
//   console.log(elem);
// });

//* className-e gore secmek:
// const boxes = document.getElementsByClassName("box");
// console.log(boxes);

//*  ID-sine gore cagirmaq:
// const firstText = document.getElementById("birinci");
// firstText.style.color = "blue";
// console.log(firstText);

/*
 * HTMLCollection -> massiv-e oxsayan bir obyektdir. Ve bunun uzerinde
 * massivin hec bir methodunu isletmek olmur!
 * NodeList -> bizde bir massiv tipindedir ve digerinin eksine bunun uzerinde
 * massivin methodlarini isletmek olar!
 */

//! QuerySelector: -> bu bize nodeList qaytarir(hemise)

//* tek bir elementi cagirmaq istesen querySelector, bir necesini cagirmaq istesen
//* querySelectorAll istifade et!

// const oneBoxTitle = document.querySelector(".container>h1:nth-child(2) ");
// console.log(oneBoxTitle);

//* ID-e gore secmek
// const pass = document.querySelector("#password");

//* Class-a gore secmek
// const formGroups = document.querySelector(".form-elem");
// console.log(formGroups);

//* type-a gore secmek(inputlari)
// const passInput = document.querySelector("input[type='password']");
// const checkbox = document.querySelector("input[type='checkbox']");

//* querySelectorAll
// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((elem) => {
//   console.log(elem);
// });

//! Elementsibling,elementParent,ELementChilds
// const container = document.querySelector(".container");
// console.log(container);
//children: elementin daxilindeki elementler tag kimi dusur
//childNodes: elementin daxilindeki diger elementlerin hamisi hem tag kimi hemde onlarin daxilindeki textler de ayrica dusur
// console.log(container.children);
// console.log(container.childNodes);
// console.log(container.children[4].children[1].textContent.trim(""));
// console.log(container.childElementCount);
//* Ilk elemente catmaq istesek:
// console.log(container.firstElementChild.textContent);

//!  ElementSibling
// console.log(container.children);
// const boxTwo = document.querySelector(".box2");
// console.log(boxTwo.previousElementSibling);

//! parentElement or parentNode
// const boxTwo = document.querySelector(".box2");
// console.log(boxTwo.parentElement.parentElement);
// console.log(boxTwo.parentNode.parentNode);
