const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const divEnd = document.querySelector('.end-game');
const defatsContent = document.querySelector('.defeats');

let defeats = 0;

start();

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

function looper() {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px` ;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';


        divEnd.classList.add('active');

        clearInterval(loop);

    }
}

function start() {

    pipe.style.animation = '';
    pipe.style.left = '';

    clouds.style.animation = '';
    clouds.style.right = '';

    mario.style.animation = '';
    mario.style.bottom = '';

    mario.src = './assets/imgs/mario.gif';
    mario.style.width = '';
    mario.style.marginLeft = '';

    defeats++;
    defatsContent.innerHTML = `Defeats: ${defeats}`;

    divEnd.classList.remove('active');

    setInterval(looper, 10);

}

const loop = setInterval(looper, 10);

document.addEventListener('keydown', jump);
document.addEventListener('click', start);