const game = document.querySelector('#game');
const chara = document.querySelector('#player');
const obstacle = document.querySelector('#obstacle');
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
  obstacle.classList.add('obstacle');
  game.classList.add('background');

  if (startBtn.innerText === 'Surrender') {
    reset();

    alert(`WHYY!!!`);
  } else {
    startBtn.innerText = `Surrender`;
    startBtn.classList.add('surrender');
  }
});

game.addEventListener('click', () => {
  if (obstacle.classList == 'obstacle') {
    if (chara.classList != 'jump') {
      chara.classList.add('jump');
    }

    setTimeout(() => {
      chara.classList.remove('jump');
    }, 500);
  } else {
    console.log(`YOU'RE NOT START YET.!!!`);
  }
});

const checkDead = setInterval(() => {
  const charaBottom = parseInt(window.getComputedStyle(chara).getPropertyValue('bottom'));
  const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

  if (obstacleRight > 942 && obstacleRight < 977 && charaBottom < 31) {
    reset();
    alert(`YOU LOSE!!!`);
  }
}, 10);

const reset = () => {
  obstacle.classList.remove('obstacle');
  game.classList.remove('background');
  startBtn.innerText = `Start`;
  startBtn.classList.remove('surrender');
};

const alert = (text) => {
  const alert = document.createElement('div');
  alert.classList.add('alert-container');
  alert.innerHTML = `
    <div class="alert-content">
      <h1>${text}</h1>
    </div>
  `;
  document.body.appendChild(alert);

  window.addEventListener('click', (e) => {
    if (e.target === alert) {
      document.body.removeChild(alert);
    }
  });
};

const score = new Date().getSeconds();
console.log(score);
