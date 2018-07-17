const canv = document.querySelector('canvas');

const ctx =  canv.getContext('2d');

canv.width = 1000;
canv.height = 500;

const cw = canv.width;
const ch = canv.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddelHeight = 100;
const paddelWidth = 20;

const playerX = 70;
const aiX = 910;
let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 12;

let ballSpeedX = 2;
let ballSpeedY = 2;

function player() {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
};

function ai() {
  ctx.fillStyle = 'red';
  ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
};

function ball() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY <= 0 || ballY + ballSize >= ch) {
    ballSpeedY = -ballSpeedY;
    speedUp();
  };

  if (ballX <= 0 || ballX + ballSize >= cw) {
    ballSpeedX = -ballSpeedX;
    speedUp();
  };
};

function table() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cw, ch);

  for (let linePosition = 20; linePosition < ch; linePosition += 30) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);
  };
};

topCanvas = canv.offsetTop;

//odleglosc od poczatku okna przegladarki

console.log(topCanvas);

function playerPosition(e) {
  playerY = e.clientY - topCanvas - paddelHeight / 2;

  //gdy rakietka wyjeżdza na dole poza cavas

  if (playerY >= ch - paddelHeight) {
    playerY = ch - paddelHeight;
  };

  //gdy próbuje wyjachać rakietka na górze poza canvas

  if (playerY <= 0) {
    playerY = 0;
  };

  // aiY = playerY;
};

canv.addEventListener('mousemove', playerPosition);

function speedUp() {
  if (ballSpeedX > 0 && ballSpeedX < 16) {
    ballSpeedX += 1;
  }else if (ballSpeedX < 0 && ballSpeedX > -16) {
    ballSpeedX -= 1;
  }

  if (ballSpeedY > 0 && ballSpeedY < 16) {
    ballSpeedY += 1;
  }else if (ballSpeedY < 0 && ballSpeedY > -16) {
    ballSpeedY -= 1;
  }
}

function aiPosition() {
  const middlePaddel = aiY + paddelHeight / 2;
  const middleBall = ballY + ballSize / 2;

  if (ballX > 500) {
    if (middlePaddel - middleBall > 200) {
      aiY -= 24;
    } else if (middlePaddel - middleBall > 50) {
      aiY -= 10;
    } else if (middlePaddel - middleBall < -200) {
      aiY += 24;
    } else if (middlePaddel - middleBall < -50) {
      aiY += 10;
    }
  };

  if (ballX <= 500 && ballX > 100) {
    if (middlePaddel - middleBall > 100) {
      aiY -= 3;
    }

    if (middlePaddel - middleBall < -100) {
      aiY += 3;
    }
  }

  if (aiY >= ch - paddelHeight) {
    aiY = ch - paddelHeight;
  }

  if (aiY <= 0) {
    aiY = 0;
  }
}

function game() {
  table();
  ball();
  player();
  ai();
  aiPosition();
};

setInterval(game, 25);

// setInterval ( game, 1000 / 60 );
