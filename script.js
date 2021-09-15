const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const imageInsert = document.getElementById('meme-insert');

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

inputText.addEventListener('keyup', setMemeText);
imageInsert.addEventListener('change', setImage);
