const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const quiltSize = 320;
let numRows, numCols, squareSize;

function initializeQuilt() {
  numRows = getRandomNumber(5, 10); // Adjust the range as needed
  numCols = getRandomNumber(5, 10); // Adjust the range as needed
  squareSize = quiltSize / Math.min(numRows, numCols);

  canvas.width = quiltSize;
  canvas.height = quiltSize;

  drawQuilt();
}

function drawQuilt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      drawSquare(row * squareSize, col * squareSize);
    }
  }
}

function drawSquare(x, y) {
  const color = getRandomColor();
  const corner = Math.floor(Math.random() * 4);

  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();

  // Draw the half-white triangle in one of the corners
  switch (corner) {
    case 0:
      ctx.moveTo(x, y);
      ctx.lineTo(x + squareSize, y);
      ctx.lineTo(x, y + squareSize);
      break;
    case 1:
      ctx.moveTo(x + squareSize, y);
      ctx.lineTo(x + squareSize, y + squareSize);
      ctx.lineTo(x, y + squareSize);
      break;
    case 2:
      ctx.moveTo(x + squareSize, y + squareSize);
      ctx.lineTo(x, y + squareSize);
      ctx.lineTo(x + squareSize, y);
      break;
    case 3:
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + squareSize);
      ctx.lineTo(x + squareSize, y + squareSize);
      break;
    default:
      break;
  }

  ctx.fill();

  // Draw the half-random color triangle in the opposite corner
  ctx.fillStyle = color;
  ctx.beginPath();

  switch (corner) {
    case 0:
      ctx.moveTo(x + squareSize, y + squareSize);
      ctx.lineTo(x, y + squareSize);
      ctx.lineTo(x + squareSize, y);
      break;
    case 1:
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + squareSize);
      ctx.lineTo(x + squareSize, y + squareSize);
      break;
    case 2:
      ctx.moveTo(x, y);
      ctx.lineTo(x + squareSize, y);
      ctx.lineTo(x, y + squareSize);
      break;
    case 3:
      ctx.moveTo(x + squareSize, y);
      ctx.lineTo(x + squareSize, y + squareSize);
      ctx.lineTo(x, y + squareSize);
      break;
    default:
      break;
  }

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
