// const selectInputText = document.querySelector('#text-input');
const selectMemeInsert = document.querySelector('#meme-insert');
const selectImage = document.querySelector('#meme-image');
const selectInputText = document.querySelector('#text-input');
const changeTextInput = document.querySelector('#meme-text p');
const selectContainerImage = document.querySelector('#meme-image-container');

// Função que carrega a imagem e exibe no scr extraida do site...
/** https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
 * O que acontece aqui é: temos um mapeamento de evento change, no input de arquivos.
 * Ao ocorrer uma mudança (enviar imagem), a função readImage é acionada.
 * Esta função tem como principal objetivo ler o arquivo enviado e mudar o atributo de image para o src da imagem
 * Fazendo com que a imagem seja exibida na div abaixo do input.
 * E assim conseguimos mostrar a imagem carregada em input file */
function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.addEventListener('load', (event) => {
      selectImage.src = event.target.result;
    });
    file.readAsDataURL(this.files[0]);
  }
}

selectMemeInsert.addEventListener('change', readImage, false);

selectInputText.addEventListener('input', () => {
  changeTextInput.innerHTML = selectInputText.value;
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
      const urlImg = imgPreMeme[index].getAttribute('src');
      selectImage.src = urlImg;
    });
  }
}

definePreMeme();
