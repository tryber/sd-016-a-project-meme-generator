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

const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const imgContainer = document.querySelector('#meme-image-container');

btnFire.addEventListener('click', () => {
  imgContainer.style.border = '3px dashed red';
});

btnWater.addEventListener('click', () => {
  imgContainer.style.border = '5px double blue';
});

btnEarth.addEventListener('click', () => {
  imgContainer.style.border = '6px groove green';
});