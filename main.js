const changeColorFirstCard = document.querySelector('.card');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-card');
const changeColorFirstCardGreen = '#008000'

changeColorFirstCardBtn.addEventListener('click', () => {
  changeColorFirstCard.style.backgroundColor =  changeColorFirstCardGreen
});


const changeColorCards = document.querySelectorAll('.card');
const changeColorCardsBtn = document.querySelector('#change-color-cards');
const changeColorCardsTomato = '#ff6347';

changeColorCardsBtn.addEventListener('click', () => {
  changeColorCards.forEach((card) => card.style.backgroundColor =  changeColorCardsTomato)
});


const openGoogleBtn = document.querySelector('#open-google');
openGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
   const answer = confirm('Вы действительно хотите открыть Google?');

   if (answer === true) {
    window.open('https://www.google.com')
   } else {
     return;
   }
}


const outputConsoleLogBtn = document.querySelector('#output-console-log');
outputConsoleLogBtn.addEventListener('click', () => outputConsolelog('дз №6'))

function outputConsolelog(message) {
  alert(message)
  console.log(message)
}


const title = document.querySelector('.title');

title.addEventListener('mouseover', () => {
  console.log(title.textContent);
});


const colorChangingButton = document.querySelector('#color-changing-button');

colorChangingButton.addEventListener('click', () => {
  colorChangingButton.classList.toggle('colorYellow');
});