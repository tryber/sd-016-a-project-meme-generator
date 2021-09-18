const memeTextField = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');

function updateText() {
  memeTextField.textContent = textInput.value;
}

textInput.addEventListener('keyup', updateText);
