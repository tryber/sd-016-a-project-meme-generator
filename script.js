// Localiza input
const textInput = document.querySelector('#text-input');

// Localiza texto do meme
const memeText = document.querySelector('#meme-text');

// Funções
// Texto do input muda o texto
function inputTextToDiv() {
    memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keydown', inputTextToDiv);
