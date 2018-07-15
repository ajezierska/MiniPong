const canv = document.querySelector('canvas');

const ctx =  canv.getContext('2d');

canv.width = 1000;
canv.height = 500;

const cw = canv.width;
const ch = canv.height;

function table() {
  ctx.fillStyle;
  ctx.fillRect(0, 0, cw, ch);

  ctx.fillStyle = 'white';
  ctx.fillRect(10, 50, 100, 100);
}

table();
