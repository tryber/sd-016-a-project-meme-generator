// const container = document.querySelector('#meme-image-container');
const txtInput = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');

txtInput.addEventListener('input', () => {
  text.innerHTML = txtInput.value;
});

imageInput.addEventListener('change', (event) => {
  if (event.target.files.length > 0) {
    image.src = URL.createObjectURL(event.target.files[0]);
  }
});
