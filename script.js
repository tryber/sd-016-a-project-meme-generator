const inputText = document.getElementById('text-input');
const writeText = document.getElementById('meme-text');
const imgSelect = document.getElementById('meme-insert');
const imgUppada = document.getElementById('meme-image');

inputText.addEventListener('input', () => {
  writeText.innerHTML = inputText.value;
})

imgSelect.addEventListener('change', (event) => {
    imgUppada.src = URL.createObjectURL(event.target.files[0]); // Flavio code-review + https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
    // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
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

const btn1 = document.getElementById('meme-1');
const btn2 = document.getElementById('meme-2');
const btn3 = document.getElementById('meme-3');
const btn4 = document.getElementById('meme-4');

btn1.addEventListener('click', () => {
  imgUppada.src = btn1.src;
})

btn2.addEventListener('click', () => {
  imgUppada.src = btn2.src;
})

btn3.addEventListener('click', () => {
  imgUppada.src = btn3.src;
})

btn4.addEventListener('click', () => {
  imgUppada.src = btn4.src;
})