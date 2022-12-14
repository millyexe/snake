import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";

let lastRenderTime = 0;

function maim(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("render");
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(maim);

function update() {
  updateSnake();
}

function draw() {
  drawSnake();
}
