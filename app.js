const canvas = document.querySelector('#draw');
var pen_color;
var pen_size;
function getValue(){
  pen_color = document.getElementById('pen_color').value;
  pen_size = document.getElementById('pen_size').value;
};



const ctx = canvas.getContext('2d');
//canvas.width = window.innerWidth-100;
//canvas.height = window.innerHeight-100;
ctx.strokeStyle = pen_color //'#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = ` " ${pen_size} "`;
let isDrawing = true;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = false;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = pen_color;  //`hsl(${hue}, 20%, 20%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  //hue++;
//   if (hue >= 360) {
//     hue = 0;
//   }
//   if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
//     direction = !direction;
//   }
//   if(direction) {
//     ctx.lineWidth++;
//   } else {
//     ctx.lineWidth--;
//   }
}


canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseenter', () => isDrawing = false);