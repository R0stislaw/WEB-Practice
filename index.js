const fronts = document.querySelectorAll('.front');
const backs = document.querySelectorAll('.back');
const cards = document.querySelectorAll('.photo-dish');

for (let i = 0; i < fronts.length; i++) {
  fronts[i].addEventListener('click', () => {
    cards[i].classList.add('photo-dish-rotate');
    fronts[i].classList.add('front-rotate');
    backs[i].classList.add('back-rotate');
  });

  backs[i].addEventListener('click', () => {
    cards[i].classList.remove('photo-dish-rotate');
    fronts[i].classList.remove('front-rotate');
    backs[i].classList.remove('back-rotate');
  });
}
