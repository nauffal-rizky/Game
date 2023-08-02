const chara = document.querySelector('#player');
const obstacle = document.querySelector('#obstacle');
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
  obstacle.classList.add('obstacle');
});
window.addEventListener('click', () => {
  if (obstacle.classList == 'obstacle') {
    if (chara.classList != 'jump') {
      chara.classList.add('jump');
    }
    setTimeout(() => {
      chara.classList.remove('jump');
    }, 500);

    console.log(`You did it!!!`);
  }
});

const checkDead = setInterval(() => {
  const charaBottom = parseInt(window.getComputedStyle(chara).getPropertyValue('bottom'));
  const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

  if (obstacleRight > 942 && charaBottom < 40) {
    obstacle.classList.remove('obstacle');
    alert(`YOU LOSE!!!`);
  }
}, 10);
