const snakeBody = [
  { x: 11, y: 11 },
  { x: 11, y: 10 },
  { x: 11, y: 9 },
];

let xDir = 0;
let yDir = 1;

const updateSnake = (x, y) => {
  // Remove tail segment
  snakeBody.pop();

  // Add new head segment
  const newHead = { ...snakeBody[0] };

  // TODO 2.2: Set the new head's position using the user's inputs
  newHead.x += xDir;
  newHead.y += yDir;

  snakeBody.unshift(newHead);
};

// Don't change this function!
const drawSnake = (gameBoard) => {
  for (let i = 0; i < snakeBody.length; i++) {
    const segment = snakeBody[i];
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  }
};
