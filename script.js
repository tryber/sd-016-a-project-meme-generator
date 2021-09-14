const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

inputText.addEventListener('input', () => {
    memeText.innerText = inputText.value;
});
