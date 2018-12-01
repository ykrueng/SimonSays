const buttonA = document.querySelector('.a');
const buttonS = document.querySelector('.s');
const buttonD = document.querySelector('.d');
const buttonW = document.querySelector('.w');

const randomize = () => {
  return Math.floor(Math.random()*4)+1;
}

buttonA.addEventListener('click', () => {
  console.log('clicked');
})

const game = () => {
  const gameSeq = [];
  let gameInSession = true;

  while (gameInSession) {
    gameSeq.push(randomize());

    gameInSession = gameSeq.length < 5 ;

    console.log(gameSeq);
  }

}