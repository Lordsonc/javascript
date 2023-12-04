let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector("#foodItems");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "1.PNG",
    price: 120000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "2.PNG",
    price: 20000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "3.PNG",
    price: 220000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "4.PNG",
    price: 123000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "5.PNG",
    price: 320000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "6.PNG",
    price: 120000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "5.PNG",
    price: 320000,
  },
  {
    id: 1,
    name: "PRODUCT NAME 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "1.PNG",
    price: 120000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "2.PNG",
    price: 20000,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("menu__content");
    newDiv.innerHTML = `
            <img src="image/${value.image}" class="menu__img">
            <h2 class="menu__name" class="title">${value.name}</h2>
            <p class="menu__detail">${value.description}</p>
            <p class="menu__preci">${value.price.toLocaleString()}</p>
            <button style="border:none" class="button menu__button" onclick="addToCard(${key})"><i class="bx bx-cart-alt"></i
            ></button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
