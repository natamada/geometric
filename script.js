const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const quiltSize = 320;

canvas.width = quiltSize;
canvas.height = quiltSize;

function drawQuilt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let x = 0; x < quiltSize; x += 80) {
    for (let y = 0; y < quiltSize; y += 80) {
      drawSquare(x, y);
    }
  }
}

function drawSquare(x, y) {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(x, y, 80, 80);

  const corner = Math.floor(Math.random() * 4);
  drawHalfCircle(x, y, corner);
}

function drawHalfCircle(x, y, corner) {
  ctx.beginPath();
  const color = getRandomColor();
  ctx.fillStyle = color;

  switch (corner) {
    case 0:
      ctx.arc(x + 80, y + 80, 40, 0, Math.PI);
      break;
    case 1:
      ctx.arc(x, y + 80, 40, Math.PI / 2, Math.PI * 1.5);
      break;
    case 2:
      ctx.arc(x + 80, y, 40, -Math.PI / 2, Math.PI / 2);
      break;
    case 3:
      ctx.arc(x, y, 40, Math.PI, Math.PI * 2);
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
