// TODO 2.1: Create input event listeners for controlling the snake
// Hint: Create a "keydown" event listener
// (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
//
// Hint: Take a look at the object returned from the event to figure out which
// key has been pressed
// (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
// List of key values:
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
window.addEventListener("keydown", (e) => {
  // console.log(e.key);

  if (e.key == "ArrowUp") {
    xDir = 0;
    yDir = -1;
  } else if (e.key == "ArrowDown") {
    xDir = 0;
    yDir = 1;
  } else if (e.key == "ArrowRight") {
    xDir = 1;
    yDir = 0;
  } else if (e.key == "ArrowLeft") {
    xDir = -1;
    yDir = 0;
  }
});
