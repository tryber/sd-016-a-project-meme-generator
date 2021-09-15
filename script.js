const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const imageInsert = document.getElementById('meme-insert');

function setMemeText() {
  memeText.innerText = inputText.value;
}

function setImage(e) {
  image.src = URL.createObjectURL(e.target.files[0]);
}

inputText.addEventListener('keyup', setMemeText);
imageInsert.addEventListener('change', setImage);
