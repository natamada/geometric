const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const quiltSize = 320;
const squareSize = quiltSize / 4;

canvas.width = quiltSize;
canvas.height = quiltSize;

function drawQuilt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw border
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#000000"; // Border color is black
  ctx.strokeRect(2, 2, quiltSize - 4, quiltSize - 4);

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      drawSquare(row * squareSize, col * squareSize);
    }
  }
}

function drawSquare(x, y) {
  const color = getRandomColor();
  ctx.fillStyle = "#FFFFFF"; // Square color is white
  ctx.fillRect(x, y, squareSize, squareSize);

  // Draw a half circle in a random corner of the square
  const corner = Math.floor(Math.random() * 4);
  drawHalfCircle(x, y, corner, color);
}

function drawHalfCircle(x, y, corner, color) {
  ctx.beginPath();
  ctx.fillStyle = color;

  switch (corner) {
    case 0:
      ctx.arc(
        x + squareSize / 2,
        y + squareSize / 2,
        squareSize / 2,
        0,
        Math.PI
      );
      break;
    case 1:
      ctx.arc(
        x + squareSize / 2,
        y + squareSize / 2,
        squareSize / 2,
        Math.PI / 2,
        Math.PI * 1.5
      );
      break;
    case 2:
      ctx.arc(
        x + squareSize / 2,
        y + squareSize / 2,
        squareSize / 2,
        -Math.PI / 2,
        Math.PI / 2
      );
      break;
    case 3:
      ctx.arc(
        x + squareSize / 2,
        y + squareSize / 2,
        squareSize / 2,
        Math.PI,
        Math.PI * 2
      );
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

document.addEventListener("DOMContentLoaded", drawQuilt);

canvas.addEventListener("click", drawQuilt);
