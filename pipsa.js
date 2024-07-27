const ball = document.getElementById('ball');
const gameArea = document.getElementById('gameArea');
let ballX = gameArea.clientWidth / 2 - 15;
let ballY = gameArea.clientHeight / 2 - 15;

function moveBall(dx, dy) {
    ballX += dx;
    ballY += dy;

    // Estetään pallon meneminen pelialueen ulkopuolelle
    if (ballX < 0) ballX = 0;
    if (ballX > gameArea.clientWidth - 30) ballX = gameArea.clientWidth - 30;
    if (ballY < 0) ballY = 0;
    if (ballY > gameArea.clientHeight - 30) ballY = gameArea.clientHeight - 30;

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moveBall(0, -10);
            break;
        case 'ArrowDown':
            moveBall(0, 10);
            break;
        case 'ArrowLeft':
            moveBall(-10, 0);
            break;
        case 'ArrowRight':
            moveBall(10, 0);
            break;
    }
});
