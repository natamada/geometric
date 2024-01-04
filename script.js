const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const quiltSize = 320;

canvas.width = quiltSize;
canvas.height = quiltSize;

function drawQuilt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw border
  ctx.strokeStyle = "#000000";
  ctx.strokeRect(0, 0, quiltSize, quiltSize);

  for (let x = 0; x < quiltSize; x += 80) {
    for (let y = 0; y < quiltSize; y += 80) {
      drawSquare(x, y);
    }
  }
}

function drawSquare(x, y) {
  const color = getRandomColor();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 80, 80);

  // Draw a circle in the center of the square
  const centerX = x + 40;
  const centerY = y + 40;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
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
