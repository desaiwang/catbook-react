// TODO 3.1: Create the food
let food = { x: 2, y: 2 };

// TODO 3.2: Create a function to update the food
const updateFood = () => {
  if (onSnake(food)) {
    food = getNewFoodPosition();
  }
};

// Don't change me!
const drawFood = (gameBoard) => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
};
