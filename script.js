const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const imageInsert = document.getElementById('meme-insert');
const imageContainer = document.getElementById('meme-image-container');

const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

const preSelMeme1 = document.getElementById('meme-1');
const preSelMeme2 = document.getElementById('meme-2');
const preSelMeme3 = document.getElementById('meme-3');
const preSelMeme4 = document.getElementById('meme-4');

function setMemeText() {
  if (inputText.value.length > 60) {
    const fullText = inputText.value;
    const tilSixty = fullText.substring(0, 60);
    inputText.value = tilSixty;
  }
  memeText.innerText = inputText.value;
}

function setImage(e) {
  image.src = URL.createObjectURL(e.target.files[0]);
}

function changeFrameColor(e) {
  const element = e.target;
  const newColor = window.getComputedStyle(element).getPropertyValue('background-color');
  const newBorder = window.getComputedStyle(element).getPropertyValue('border');
  imageContainer.style.backgroundColor = `${newColor}`;
  imageContainer.style.border = `${newBorder}`;
}

function setPreSelectedMeme(e) {
  const selImage = e.target.src;
  image.src = selImage;
}

inputText.addEventListener('keyup', setMemeText);
imageInsert.addEventListener('change', setImage);

fireButton.addEventListener('click', changeFrameColor);
waterButton.addEventListener('click', changeFrameColor);
earthButton.addEventListener('click', changeFrameColor);

preSelMeme1.addEventListener('click', setPreSelectedMeme);
preSelMeme2.addEventListener('click', setPreSelectedMeme);
preSelMeme3.addEventListener('click', setPreSelectedMeme);
preSelMeme4.addEventListener('click', setPreSelectedMeme);
