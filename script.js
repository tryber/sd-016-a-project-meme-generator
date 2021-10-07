const inputText = document.getElementById('text-input');
const writeText = document.getElementById('meme-text');

inputText.addEventListener('input', () => {
  console.log('oi')
  writeText.innerHTML = inputText.value;
})