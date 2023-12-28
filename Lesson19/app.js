//! Keyboard Events:
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const input = document.querySelector("#input");

// btn.addEventListener("mousedown", function () {
//   console.log("mousedown ");
// });
// btn.addEventListener("mouseup", function () {
//   console.log("mouseup  ");
// });
// btn.addEventListener("click", function () {
//   console.log("Click");
// });
// btn.addEventListener("dblclick", function () {
//   console.log("Double Click");
// });

// box.addEventListener("mouseover", function () {
//   console.log("Sen bizim erazidesen");
// });
// box.addEventListener("mousemove", function () {
//   console.log("Sen ərazinin içərisində gəzirsən");
// });
// box.addEventListener("mouseenter", function () {
//   console.log("Sen əraziyə daxil oldun");
// });
// box.addEventListener("mouseleave", function () {
//   console.log("Sen ərazidən çıxdın");
// });
// box.addEventListener("click", function (e) {
//   console.log("X oxu üzrə: " + e.clientX);
//   console.log("Y oxu üzrə: " + e.clientY);
// });

// box.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
//   console.log("sag click");
// });

// input.addEventListener("keyup", function (e) {
//   console.log(e.target.value);
// });
// input.addEventListener("keydown", function (e) {
//   //   console.log("Bu düyməni basdınız: " + e.key);
//   //   console.log("Düymənin Kodu: " + e.keyCode);
//   if (e.keyCode == 13) {
//     console.log(e.target.value);
//     input.value = "";
//   }
// });

// window.addEventListener("DOMContentLoaded", function () {
//   box.style.backgroundColor = "yellow";
// });

//! Todo List porject
// const todoInput = document.querySelector(".addTodo");
const form = document.querySelector("form");
const allTodoLists = document.querySelector(".all-todos"); // ul teqi
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // form.addTodo.value => input.value
  createTodo();
});

function createTodo() {
  console.log(form.addTodo.value);
  const li = document.createElement("li");
  li.classList.add("todo");
  li.innerHTML = `
        <input type="checkbox" class="isCompleted" onclick="isCompleted(this)"/>
        <span>${form.addTodo.value}</span>
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
    `;
  allTodoLists.appendChild(li);
  form.addTodo.value = "";
}

function isCompleted(event) {
  //   console.log(event);
  //* 1-ci yol:
  //   const span = event.nextElementSibling;
  //   span.classList.toggle("active");
  //* 2-ci yol:
  const span = event.nextElementSibling;
  if (event.checked) {
    span.style.textDecoration = "line-through";
  } else {
    span.style.textDecoration = "none";
  }
}
