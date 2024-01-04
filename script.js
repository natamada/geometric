const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const quiltSize = 320;
let numSquares, squareSize;

function initializeQuilt() {
  numSquares = getRandomNumber(2, 6);
  squareSize = quiltSize / numSquares;

  canvas.width = quiltSize;
  canvas.height = quiltSize;

  drawQuilt();
}

function drawQuilt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < numSquares; row++) {
    for (let col = 0; col < numSquares; col++) {
      drawSquare(row * squareSize, col * squareSize);
    }
  }
}

function drawSquare(x, y) {
  const color1 = getRandomColor();
  const color2 = getRandomColor();

  // Draw diagonal triangles within the square
  ctx.fillStyle = color1;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + squareSize, y);
  ctx.lineTo(x, y + squareSize);
  ctx.fill();

  ctx.fillStyle = color2;
  ctx.beginPath();
  ctx.moveTo(x + squareSize, y);
  ctx.lineTo(x + squareSize, y + squareSize);
  ctx.lineTo(x, y + squareSize);
  ctx.fill();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", initializeQuilt);

canvas.addEventListener("click", initializeQuilt);
