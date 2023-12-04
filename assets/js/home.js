// homepage.js
const foodItemsContainer = document.getElementById("foodItems");

// Retrieve and display food items from storage
const storedFoodItems = JSON.parse(localStorage.getItem("foodItems")) || [];

storedFoodItems.forEach((foodItem) => {
  const foodItemElement = document.getElementById("fresh");
  foodItemElement.classList.add("food-item");
  foodItemElement.innerHTML = `
<img src="${foodItem.image}" alt="${foodItem.title}" id="image" class="menu__img">
<h2 class="menu__name">${foodItem.title}</h2>
<p class="menu__detail">${foodItem.description}</p>
<p class="menu__preci">Price: $${foodItem.price}</p>

<a href="#" class="button menu__button"
><i class="bx bx-cart-alt"></i
></a>

`;
  foodItemsContainer.appendChild(foodItemElement);
});
