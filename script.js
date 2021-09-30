// const container = document.querySelector('#meme-image-container');
const text = document.querySelector('#meme-text');
const txtInput = document.querySelector('#text-input');

txtInput.addEventListener('input', () => {
  text.innerHTML = txtInput.value;
});
