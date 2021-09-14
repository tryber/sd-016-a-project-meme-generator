const inputText = document.querySelector('#text-input');
const inputFile = document.querySelector('#file-input');
let textMeme = document.querySelector('#meme-text');
let imageMeme = document.querySelector('#frame');
const buttonClick = document.querySelector('button');

inputText.addEventListener('keyup', textGerador);

function textGerador() {
 let valueText = inputText.value;
 textMeme.innerHTML = valueText;
 preview()
}

function preview() {
  imageMeme.src = inputFile.value;
}
