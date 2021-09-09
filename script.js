const inputText = document.getElementById('text-input');
const memeText = document.querySelector('#meme-text');
function memeTextUpdate() {
  const text = inputText.value;
  memeText.innerText = text;
}

inputText.addEventListener('keyup', memeTextUpdate);
