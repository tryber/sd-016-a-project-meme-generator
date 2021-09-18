const textInput = document.querySelector('#text-input');
const imageContainer = document.querySelector('.image-container');

function generatesText() {
  const text = textInput.value;
  imageContainer.innerText = text;
  return 0;
}

textInput.addEventListener('keyup', generatesText);
