const text = document.getElementById('meme-text');
const input = document.getElementById('text-input');

input.addEventListener('input', (event) => {
    text.innerHTML = input.value;
});
