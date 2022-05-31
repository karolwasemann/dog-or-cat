// Import stylesheets
import './style.css';

const leftImg = document.querySelector('.left-img');
const rightImg = document.querySelector('.right-img');

const buttons = document.querySelectorAll('a');

const imagesToDisplay = [];
for (let i = 0; i < 1000; i++) {
  imagesToDisplay.push(i);
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const numberOfCat = getRandomNumber();
    const url = `https://cataas.com/cat?${numberOfCat}`;
    if (e.target.closest('.left')) {
      rightImg.src = url;
      document.querySelector('.right h2').textContent = `Cat #${numberOfCat}`;
    } else {
      leftImg.src = url;
      document.querySelector('.left h2').textContent = `Cat #${numberOfCat}`;
    }
  });
});

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * imagesToDisplay.length);
  imagesToDisplay.splice(randomNumber, 1);
  return randomNumber;
};
