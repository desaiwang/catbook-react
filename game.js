const SNAKE_SPEED = 5;

const gameBoard = document.getElementById("game-board");

const main = () => {
  update();
  draw();
};

setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
  updateSnake();
  // TODO 3.3: Update the food
  updateFood();
};

const draw = () => {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
};
