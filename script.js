const textInput = document.querySelector('#text-input');
const file = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const img = document.querySelector('#meme-image');
const minis = document.querySelectorAll('.mini');

function newImage() {
  // codigo retirado da pagina https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
  img.src = URL.createObjectURL(file.files[0]);
  memeContainer.appendChild(img);
}

function changeText() {
  memeText.innerText = textInput.value;
}

for (let i = 0; i < minis.length; i += 1) {
  minis[i].addEventListener('click', () => {
    img.src = minis[i].src;
  });
}

file.addEventListener('change', newImage);
textInput.addEventListener('keyup', changeText);
fire.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed red';
});
water.addEventListener('click', () => {
  memeContainer.style.border = '5px double blue';
});
earth.addEventListener('click', () => {
  memeContainer.style.border = '6px groove green';
});
