const selectMemeInsert = document.querySelector('#meme-insert');
const selectImage = document.querySelector('#meme-image');
const selectInputText = document.querySelector('#text-input');
const changeTextInput = document.querySelector('#meme-text p');
const selectContainerImage = document.querySelector('#meme-image-container');

// Função que carrega a imagem e exibe no scr extraida do site...
// Função criada com ajuda do Vitor Faria.
function createImage(event) {
  selectImage.src = URL.createObjectURL(event.target.files[0]);
}

selectMemeInsert.addEventListener('change', createImage);

selectInputText.addEventListener('input', () => {
  changeTextInput.innerText = selectInputText.value;
});

const buttonFire = document.querySelector('#fire');
buttonFire.addEventListener('click', () => {
  selectContainerImage.style.border = '3px dashed rgb(255,0,0)';
});

const buttonWater = document.querySelector('#water');
buttonWater.addEventListener('click', () => {
  selectContainerImage.style.border = '5px double rgb(0, 0, 255)';
});

const buttonEarth = document.querySelector('#earth');
buttonEarth.addEventListener('click', () => {
  selectContainerImage.style.border = '6px groove rgb(0, 128, 0)';
});

function definePreMeme() {
  const imgPreMeme = document.querySelectorAll('.img-memes');

  for (let index = 0; index < imgPreMeme.length; index += 1) {
    imgPreMeme[index].addEventListener('click', () => {
      const imageSrc = imgPreMeme[index].getAttribute('src');
      selectImage.src = imageSrc;
    });
  }
}

definePreMeme();
