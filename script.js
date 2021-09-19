const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');

textInput.addEventListener('keyup', function () {
  const textInputValue = textInput.value;
  textOutput.innerText = textInputValue;
});

const imageInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

imageInput.addEventListener('change', function () {
  const selectedImage = imageInput.files[0];
  const newImage = window.URL.createObjectURL(selectedImage);
  memeImage.src = newImage;
});
