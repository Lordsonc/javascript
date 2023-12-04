// Function to render food items on the homepage
function renderFoodItems() {
  const foodItemsContainer = document.getElementById("foodItemsContainer");

  // Retrieve food items from localStorage
  const foodItems = JSON.parse(localStorage.getItem("foodItems")) || [];

  // Clear existing content in the container
  foodItemsContainer.innerHTML = "";

  // Loop through each food item and create HTML elements
  foodItems.forEach((foodItem) => {
    const foodCard = document.createElement("div");
    foodCard.classList.add("food-card");

    // Create HTML elements for each property of the food item
    const titleElement = document.createElement("h2");
    titleElement.textContent = foodItem.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: ${foodItem.price}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = foodItem.description;

    const imageElement = document.createElement("img");
    imageElement.src = foodItem.image;
    imageElement.alt = foodItem.title;

    // Append the elements to the food card
    foodCard.appendChild(titleElement);
    foodCard.appendChild(priceElement);
    foodCard.appendChild(descriptionElement);
    foodCard.appendChild(imageElement);

    // Append the food card to the container
    foodItemsContainer.appendChild(foodCard);
  });
}

// Initial rendering of food items on page load
renderFoodItems();
