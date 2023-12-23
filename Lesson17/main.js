//* Created Tags:
const containerDiv = document.createElement("div");
const loginSection = document.createElement("div");
const footer = document.createElement("footer");
const haveAccount = document.createElement("p");
const craftedBy = document.createElement("p");
const anchor = document.createElement("a");
anchor.href = "#";
const button = document.createElement("button");

function createFormGroup(labelFor, spanText, inputType, InputID, placeholder) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  label.htmlFor = labelFor;
  span.innerText = spanText;
  input.type = inputType;
  input.id = InputID;
  input.autocomplete = "off";
  input.placeholder = placeholder;

  if (inputType === "checkbox") {
    console.log("bu checkboxdur");
    label.prepend(input);
    label.appendChild(span);
  } else {
    label.prepend(span);
    label.appendChild(input);
  }

  loginSection.appendChild(label);
}
createFormGroup("username", "Username: ", "text", "username", "Enter username");
createFormGroup(
  "password",
  "Password: ",
  "password",
  "password",
  "Enter password"
);
createFormGroup("rememberme", "Remember me: ", "checkbox", "rememberme", null);

//* classList add:
containerDiv.classList.add("container");
loginSection.classList.add("login-section");
button.classList.add("login");

//* add text to element
haveAccount.innerText = "Don’t have an account ?";
craftedBy.innerHTML = "&copy; 2020 Crafted and designed by 10ursabanoglu. 🎉";
anchor.innerText = "Signup now";
button.innerText = "Log In";

//* child append to parent element
document.body.appendChild(containerDiv);
containerDiv.prepend(loginSection);
loginSection.appendChild(button);
containerDiv.appendChild(footer);
footer.prepend(haveAccount);
footer.appendChild(craftedBy);
haveAccount.appendChild(anchor);

//! style and getComputedStyle()
//* Note: style -> inlie style nezerde tutulur
// let heading = document.querySelector("h1");
// let style = getComputedStyle(heading, ":hover");
// console.log(heading.style);

// console.log(heading.classList.replace(classList[1], "rasif"));
// console.log(heading.className);
// heading.className = "head rasif";
// console.log(heading.className);

// heading.classList.add("rasif");
// console.log(heading.classList);
// heading.classList.remove("title");
// console.log(heading.classList);
// heading.classList.replace("rasif", "rashad");

// console.log(heading.classList);
// if (heading.classList.contains("head")) {
//   heading.classList.replace("head", "basliq");
//   console.log(heading.classList);
// } else {
//   console.log("bele bir class yoxdur!");
// }
