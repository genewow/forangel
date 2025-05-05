const yesBtn = document.querySelector('.btn--yes');
const noBtn = document.querySelector('.btn--no');
const title = document.querySelector('.title');
const catImg = document.querySelector('.cat-img');

const catImages = [
  'img/cat-0.jpg',
  'img/cat-1.jpg',
  'img/cat-2.jpg',
  'img/cat-3.jpg',
  'img/cat-4.jpg'
];

const noMessages = [
  'Are you sure? 😿',
  'Think again... 🥺',
  'Pretty please? 🐾',
  'Don’t break my heart 💔',
  'I’ll keep asking! 💘'
];

let noClickCount = 0;

noBtn.addEventListener('click', () => {
  noClickCount++;
  const imgIndex = noClickCount % catImages.length;
  const msgIndex = noClickCount % noMessages.length;

  catImg.src = catImages[imgIndex];
  title.textContent = noMessages[msgIndex];
});

yesBtn.addEventListener('click', () => {
  title.textContent = 'Yay!! You made my heart purr! 💖';
  catImg.src = 'img/cat-happy.jpg'; // Add this image to your img folder!
});