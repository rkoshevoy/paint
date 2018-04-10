var colors = document.getElementsByClassName('color'),
    blackColor = document.getElementById('black'),
    whiteColor = document.getElementById('white'),
    greyColor = document.getElementById('grey'),
    redColor = document.getElementById('red'),
    greenColor = document.getElementById('green'),
    blueColor = document.getElementById('blue'),
    yellowColor = document.getElementById('yellow'),
    lineColor = '#000';

for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', function() {

    for (i = 0; i < colors.length; i++) {
      colors[i].classList.remove('active-color')
    };

    this.classList.add('active-color');

    if (this.classList.contains('black')) {
      lineColor = '#000';
      painting();
    } else if (this.classList.contains('white')) {
      lineColor = '#fff';
      painting();
    } else if (this.classList.contains('grey')) {
      lineColor = '#ccc';
      painting();
    } else if (this.classList.contains('red')) {
      lineColor = '#ff0000';
      painting();
    } else if (this.classList.contains('green')) {
      lineColor = '#008000';
      painting();
    } else if (this.classList.contains('blue')) {
      lineColor = '#0000ff';
      painting();
    } else if (this.classList.contains('yellow')) {
      lineColor = '#ffff00';
      painting();
    }
  });
}

var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  isMouseDown = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousedown', function(e) {
  isMouseDown = true;
});

canvas.addEventListener('mouseup', function() {
  isMouseDown = false;
  ctx.beginPath();
});

function painting() {
  ctx.fillStyle = lineColor;
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 10;
  canvas.addEventListener('mousemove', function(e) {

    if (isMouseDown) {

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  });
};

painting();
