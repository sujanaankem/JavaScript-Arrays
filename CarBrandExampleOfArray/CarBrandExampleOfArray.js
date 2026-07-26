// Initial array of car brands
let cars = ["Tesla", "BMW", "Audi", "Mercedes", "Toyota"];

// Get elements
let carList = document.getElementById("car-list");
let carInput = document.getElementById("car-input");
let addBtn = document.getElementById("add-btn");

// Function to display the list
function displayCars() {
  carList.innerHTML = ""; // Clear old list
  cars.forEach(function(car) {
    let li = document.createElement("li");
    li.textContent = car;
    carList.appendChild(li);
  });
}

// Add new car brand
addBtn.addEventListener("click", function() {
  let newCar = carInput.value.trim();
  if (newCar !== "") {
    cars.push(newCar); // Add to array
    displayCars();     // Refresh list
    carInput.value = ""; // Clear input
  }
});

// Show initial list
displayCars();
