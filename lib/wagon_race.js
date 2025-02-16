// TODO: write your code here
const playerOneRow = document.getElementById('player1-race');
const playerTwoRow = document.getElementById('player2-race');
const arr1 = playerOneRow.children;
const arr2 = playerTwoRow.children;
let counter1 = 0;
let counter2 = 0;
document.addEventListener("keyup", (event) => {
  if (event.key === 'q' && counter1 < arr1.length) {
    if (arr1[counter1 + 1].classList[0] === 'finish') {
      alert('Player 1 wins!!');
    } else {
      const el1 = arr1[counter1];
      el1.classList.remove('active');
      el1.nextElementSibling.classList.add('active');
      counter1 += 1;
    }
  } else if (event.key === 'p' && counter2 < arr2.length) {
    if (arr1[counter2 + 1].classList[0] === 'finish') {
      alert('Player 2 wins!!');
    } else {
      const el2 = arr2[counter2];
      el2.classList.remove('active');
      el2.nextElementSibling.classList.add('active');
      counter2 += 1;
    }
  }
});
