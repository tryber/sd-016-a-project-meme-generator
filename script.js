function getTextInput() {
  const inputText = document.querySelector('#text-input');
  return inputText.value;
}

function setTextInputSreen() {
  const spanText = document.querySelector('span');

  spanText.innerHTML = getTextInput();
}

const inputText = document.querySelector('#text-input');
inputText.addEventListener('input', setTextInputSreen);
