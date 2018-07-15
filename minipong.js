const canv = document.querySelector('canvas');

const ctx =  canv.getContext('2d');

canv.width = 1000;
canv.height = 500;

const cw = canv.width;
const ch = canv.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

// polozenie pilki od 490 do 510px, uzylismy let bo te wartosci beda sie zmieniac w trakcie gry

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910;

//początkowy X paletek, playerX - nasza, aiX - komputera

let playerY = 200;
let aiY = 200;

//początkowy Y paletek, będzie się zmienial dlatego let

const lineWidth = 6;
const lineHeight = 12;

let ballSpeedX = 1;
let ballSpeedY = 1;

function player() {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
};

//aktualna pozycja naszej rakietki

function ai() {
  ctx.fillStyle = 'red';
  ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
};

//aktualna pozycja rakietki

function ball() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

  ballX += ballSpeedX;
  ballY += ballSpeedY;
};

//aktualna pozycja pilki

function table() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cw, ch);

  for (let linePosition = 20; linePosition < ch; linePosition += 30) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);
  };
};

//rysowanie stolu

function game() {
  table();
  ball();
  player();
  ai();
};

// setInterval(game, 25);

//funkcja ma byc wywolywana co 50 milisekund (1 sekunda = 1000 milisekund,
// czyli przy 50, wywola sie 20 razy na sekunde)

setInterval(game, 1000 / 60);

//60 klatek na sekunde
