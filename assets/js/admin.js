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

// Event listener for form submission
document.getElementById("foodForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form input values
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const image = URL.createObjectURL(document.getElementById("image").files[0]);

  // Create a food object
  const foodItem = {
    title,
    price,
    description,
    image,
  };

  // Store the food item in localStorage
  const foodItems = JSON.parse(localStorage.getItem("foodItems")) || [];
  foodItems.push(foodItem);
  localStorage.setItem("foodItems", JSON.stringify(foodItems));

  // Render the updated food items on the homepage
  renderFoodItems();

  // Clear the form inputs
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("description").value = "";
  document.getElementById("image").value = "";
});

// Initial rendering of food items on page load
renderFoodItems();
