//! Events:
// const btn = document.querySelector(".btn");
// const box = document.querySelector(".box");

//* 1-ci usul:
// function changeBoxColor() {
//   box.classList.toggle("active");
// }

// btn.addEventListener("click", changeBoxColor);

//* 2-ci usul:
// btn.addEventListener("click", () => {
//   box.classList.toggle("active");
// });

//* 3-cu usul: (Jquery sintaksis)
// btn.onclick = function () {
//   box.classList.toggle("active");
// };

//* 4-cu usul:
// function changeBoxColor() {
//   box.classList.toggle("active");
// }

//! Event nece isleyir? -> event bubling, event capturing(evde oxumaga)
// const btn = document.querySelector(".btn");
// const input = document.querySelector("input[type='text']");
// const checkbox = document.querySelector("input[type='checkbox']");
// const box = document.querySelector(".box");

// input.addEventListener("input", function (event) {
//   //   console.log(input.value);
//   btn.textContent = input.value;
//   console.log(event);
// });

// btn.addEventListener("click", function () {
//   box.classList.toggle("active");
// });

//! this => event.target
// function eventListen(inputText) {
//   btn.textContent = input.value;
//   console.log(inputText);
// }

//! PreventDefault:

// document.querySelector("a").addEventListener("click", function (e) {
//     e.preventDefault()
//   console.log("click olundu");
// });

//! preventDefault for Form element:
// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(form.userName.value);
//   console.log(form.password.value);
//   form.userName.value = "";
//   form.password.value = "";
// });

//! removeEventListener:
// let rand = document.querySelector("#result");
// let btn = document.querySelector(".removeEvent");
// let text = document.querySelector("#text");

// function randomWrite() {
//   rand.innerHTML = Math.random();
// }
// text.addEventListener("mousemove", randomWrite);

// btn.addEventListener("click", function () {
//   text.removeEventListener("mousemove", randomWrite);
// });

//! Inoput events:
// let input = document.querySelector("input");

// input.addEventListener("copy", function () {
//   console.log("kopyaladin");
// });
// input.addEventListener("select", function () {
//   console.log("secdin");
// });
// input.addEventListener("cut", function () {
//   console.log("kesdin");
// });
// input.addEventListener("paste", function () {
//   console.log("yapisdirdin");
// });
// input.addEventListener("contextmenu", function () {
//   console.log("kontekst menyunu acdin");
// });

// const box = document.querySelector(".box");
// document.body.addEventListener("contextmenu", function (e) {
//   console.log("X " + e.clientX);
//   console.log("Y " + e.clientY);
//   box.classList.add("active");
//   box.style.marginLeft = e.clientX;
//   box.style.marginTop = e.clientY;
// });

//! Todo List:
const form = document.querySelector("form");
const input = document.querySelector("#todo");
const btn = document.querySelector("#submitBtn");
const lists = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  createTodo();
});

function createTodo() {
  const li = document.createElement("li");
  li.textContent = input.value.trim("");
  input.value = "";

  lists.appendChild(li);
}
