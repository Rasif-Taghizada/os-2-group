//! API:

//! Reqeust Methods: GET(getirmek),POST(gondermek),PUT(deyisdirmek)-PATCH, DELETE

/**
 *  CRUD =>
 *  C-> create = POST
 *  R-> read   = GET
 *  U-> update = PUT,PATCH
 *  D-> delete = DELETE
 *  */

//* json => xml(format)

// let url = "./users.txt";
// fetch(url, {
//   method: "GET",
// })
//   .then((data) => data.text())
//   .then((res) => {
//     let arr = res.split(",");
//     console.log(arr);
//     arr.forEach((user) => {
//       document.write(user);
//     });
//   });

//! getting data from fake api:
// const output = document.querySelector(".output");
// const form = document.querySelector("form");
// const url = "https://jsonplaceholder.typicode.com/users";
// function get() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       getUser(data);
//     });
// }
// get();
// function getUser(users) {
//   users.forEach((user) => {
//     output.innerHTML += `
//           <div class="user-card">
//               <div class="user-card__avatar">
//                   <img src="" alt="" />
//               </div>
//               <div class="user-card__info">
//                   <h2 class="user-card__name">${user.name}</h2>
//                   <p class="user-card__email">${user.email}</p>
//               </div>
//           </div>
//         `;
//   });
// }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let userData = {
//     id: 11,
//     username: form.username.value,
//     email: form.email.value,
//   };

//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify(userData),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       //   console.log(data);
//       output.innerHTML += `
//           <div class="user-card">
//               <div class="user-card__avatar">
//                   <img src="" alt="" />
//               </div>
//               <div class="user-card__info">
//                   <h2 class="user-card__name">${data.username}</h2>
//                   <p class="user-card__email">${data.email}</p>
//               </div>
//           </div>
//         `;
//     })
//     .catch((err) => console.error(err));
// });

//! Fake store api:
//* constants:
const filterContainer = document.querySelector(".filters");
const productsContainer = document.querySelector(".products");

function filterCategory() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((categories) => {
      categories.forEach((category) => {
        filterContainer.innerHTML += `
                <button class="filter-btn" onclick="getCategory(this)">
                    <span>${category}</span>
                </button>
            `;
      });
    });
}
filterCategory();

function getProduct() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => {
      forData(products);
    });
}
getProduct();

function getCategory(categoryItem) {
  let categoryText = categoryItem.textContent.trim();
  if (categoryText === "All") {
    categoryText = "/";
  } else {
    categoryText = `category/${categoryText}`;
  }
  fetch(`https://fakestoreapi.com/products/${categoryText}`)
    .then((res) => res.json())
    .then((data) => {
      productsContainer.innerHTML = "";
      forData(data);
    });
}

function forData(data) {
  data.forEach((item) => {
    const { price, image, title } = item;
    productsContainer.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${image}" alt="product" />
                </div>
                <div class="product-info">
                    <h5>${title.slice(0, 30).concat("...")}</h5>
                    <h6>$${price}</h6>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
  });
}
