// TODO 3.1: Create the food
let food = randomGridPosition();

// TODO 3.2: Create a function to update the food
const updateFood = () => {
  if (onSnake(food)) {
    food = getNewFoodPosition();
    growSnake();
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
