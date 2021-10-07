const inputText = document.getElementById('text-input');
const writeText = document.getElementById('meme-text');
const imgSelect = document.getElementById('meme-insert');
const imgUppada = document.getElementById('meme-image');

inputText.addEventListener('input', () => {
  writeText.innerHTML = inputText.value;
})

imgSelect.addEventListener('change', (event) => {
    imgUppada.src = URL.createObjectURL(event.target.files[0]); // Flavio code-review + https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
})


