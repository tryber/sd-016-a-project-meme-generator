const inputText = document.querySelector('#text-input');
const inputFile = document.querySelector('#meme-insert');
let textMeme = document.querySelector('#meme-text');
let imageMeme = document.querySelector('#meme-image');

inputText.addEventListener('keyup', textGerador);

function textGerador() {
 textMeme.innerHTML = inputText.value;
}

inputFile.addEventListener('input', imageGerador);

function imageGerador() {
  imageMeme.src = URL.createObjectURL(inputFile.files[0]);
}
