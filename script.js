// INPUT TEXT
const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');

textInput.addEventListener('keyup', function () {
  const textInputValue = textInput.value;
  textOutput.innerText = textInputValue;
});

// UPLOAD IMAGE
const imageInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

imageInput.addEventListener('change', function () {
  const selectedImage = imageInput.files[0];
  const newImage = window.URL.createObjectURL(selectedImage);
  memeImage.src = newImage;
});

// SELECT BORDER
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

const imageContainer = document.querySelector('#meme-image-container');

function clearClass(element) {
  element.removeAttribute('class');
}

buttonFire.addEventListener('click', function () {
  clearClass(imageContainer);
  imageContainer.classList.add('fire');
});

buttonWater.addEventListener('click', function () {
  clearClass(imageContainer);
  imageContainer.classList.add('water');
});

buttonEarth.addEventListener('click', function () {
  clearClass(imageContainer);
  imageContainer.classList.add('earth');
});

// DEFAULT MEME IMAGES
const firstMeme = document.querySelector('#meme-1');
const secondMeme = document.querySelector('#meme-2');
const thirdMeme = document.querySelector('#meme-3');
const fourthMeme = document.querySelector('#meme-4');

function setMemeImage(event) {
  const newMemeImage = event.target.getAttribute('src');
  memeImage.src = newMemeImage;
}

firstMeme.addEventListener('click', setMemeImage);
secondMeme.addEventListener('click', setMemeImage);
thirdMeme.addEventListener('click', setMemeImage);
fourthMeme.addEventListener('click', setMemeImage);
