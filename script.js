const container = document.querySelector('#meme-image-container');
const txtInput = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const btnRed = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');

txtInput.addEventListener('input', () => {
  text.innerHTML = txtInput.value;
});

imageInput.addEventListener('change', (event) => {
  if (event.target.files.length > 0) {
    image.src = URL.createObjectURL(event.target.files[0]);
  }
});

btnRed.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});

btnWater.addEventListener('click', () => {
  container.style.border = '5px double blue';
});

btnEarth.addEventListener('click', () => {
  container.style.border = '6px groove green';
});
