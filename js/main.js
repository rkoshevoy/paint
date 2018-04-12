var lineWidthItems = document.getElementsByClassName('line-width'),
    lineWidth = '2',
    colors = document.getElementsByClassName('color'),
    lineColor = '#000',
    clearCanvas = document.getElementById('clear-canvas'),

    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    isMouseDown = false;

// setting size of canvas

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// setting line width

for (i = 0; i < lineWidthItems.length; i++) {
  lineWidthItems[i].addEventListener('click', function() {

    for (i = 0; i < lineWidthItems.length; i++) {
      lineWidthItems[i].classList.remove('line-width-active')
    };

    this.classList.add('line-width-active');

    switch(this.id) {
      case 'line-width-2': {
        lineWidth = '2';
        painting();
        console.log(lineWidth);
        break;
      }
      case 'line-width-4': {
        lineWidth = '4';
        painting();
        console.log(lineWidth);
        break;
      }
      case 'line-width-6': {
        lineWidth = '6';
        painting();
        console.log(lineWidth);
        break;
      }
      case 'line-width-10': {
        lineWidth = '10';
        painting();
        console.log(lineWidth);
        break;
      }
      case 'line-width-20': {
        lineWidth = '20';
        painting();
        console.log(lineWidth);
        break;
      }
      default: {
        lineWidth = '2px';
        painting();
      }
    }
  });
};

// setting color

for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', function() {

    for (i = 0; i < colors.length; i++) {
      colors[i].classList.remove('active-color')
    };

    this.classList.add('active-color');

    switch(this.id) {
      case 'black': {
        lineColor = '#000';
        painting();
        break;
      }
      case 'white': {
        lineColor = '#fff';
        painting();
        break;
      }
      case 'grey': {
        lineColor = '#ccc';
        painting();
        break;
      }
      case 'red': {
        lineColor = '#ff0000';
        painting();
        break;
      }
      case 'green': {
        lineColor = '#008000';
        painting();
        break;
      }
      case 'blue': {
        lineColor = '#0000ff';
        painting();
        break;
      }
      case 'yellow': {
        lineColor = '#ffff00';
        painting();
        break;
      }
      default: {
        lineColor = '#000';
        painting();
      }
    }
  });
};

// clearing canvas

clearCanvas.addEventListener('click', function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', function(e) {
  isMouseDown = true;
});
canvas.addEventListener('mouseup', function() {
  isMouseDown = false;
  ctx.beginPath();
});

// painting

function painting() {
  ctx.fillStyle = lineColor;
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  canvas.addEventListener('mousemove', function(e) {

    if (isMouseDown) {

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, lineWidth / 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  });
};

painting();
