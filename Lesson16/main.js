//! DOM ile HTML elementleri hazirlamaq:

// let span = document.createElement("span");
// let input = document.querySelector("input");
//* Elementi sehifeye elave etmek:
// document.body.appendChild(span);
//* Elementin daxiline yazi yazmaq:
// span.innerHTML = "Bu bir <b>span</b> elementidir";

// console.log(span);

//! Duzgun hereket deyil:
// let querySpan = document.querySelector("span");
// console.log(querySpan);

// input.addEventListener("input", (e) => {
//   let inpValue = e.target.value;
//   console.log(inpValue);
//   span.innerHTML = inpValue;
// });
//! Example:
// function createSpan(text) {
//   let span = document.createElement("span");
//   span.innerHTML = text;
//   document.body.appendChild(span);
// }

// createSpan("About us <br>");
// createSpan("Contact <br>");
// createSpan("FAQ <br>");

//! Example:
// let container = document.querySelector(".container");
// let users = [
//   "Afsana",
//   "Eyvaz",
//   "Huseyn",
//   "Umid",
//   "Nihad",
//   "Rashad",
//   "Sona",
//   "Nigar",
//   "Leman",
//   "Ramil",
// ];
// function addUser() {
//   for (let i = 0; i < users.length; i++) {
//     let userName = document.createElement("span");
//     userName.textContent = "Rasif";
//     container.appendChild(userName);
//     container.innerHTML += `<span>${users[i]}</span> <br>`;
//   }
// }
// addUser();

//! textContent vs innerText vs innerHTML
// let blog = document.querySelector("#blog");
// console.log(blog.textContent);
// console.log(blog.innerText);
// console.log(blog.innerHTML);

//! prepend
// let p = document.createElement("p");
// p.innerHTML = "this is paraqraf";
// document.body.prepend(p);

//! replaceChild:
// let blog = document.querySelector("#blog");
// let mark = document.createElement("mark");
// mark.innerHTML = "bu mark-dir :D";
// blog.replaceChild(mark, blog.children[0]);
// blog.removeChild(blog.children[1]);

//! getDataAttribute:

// let box = document.querySelector(".box:nth-child(2)");
// console.log(box.getAttribute("data-box"));
// console.log(box.getAttribute("class"));

// let elem = document.createElement("a");
// elem.textContent = "Linkdir";
// document.body.appendChild(elem);
// elem.setAttribute("href", "https://www.google.com");
// elem.setAttribute("target", "_blank");
// console.log(elem);

//! hasAttribute:
// const btn = document.querySelector("#btnSend");
// if (btn) {
//   btn.removeAttribute("disabled");
// }
