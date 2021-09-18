function getTextInput() {
  const inputText = document.querySelector('#text-input');
  return inputText.value;
}

function getContainerImage() {
  const containerImg = document.querySelector('#meme-image-container');
  return containerImg;
}

function setTextInputSreen() {
  const spanText = document.querySelector('span');

  spanText.innerHTML = getTextInput();
}

const inputText = document.querySelector('#text-input');
inputText.addEventListener('input', setTextInputSreen);

/*
Código abaixo foi retirado do site  https://web.dev/read-files/ ,
e do site https://glitch.com/edit/#!/read-image-file?path=static%2Findex.html%3A43%3A37
Usei parte do código para realizar o upload da imagem
*/
document.querySelector('#meme-insert').addEventListener('change', (event) => {
  const imgupLoad = document.querySelector('#output');
  imgupLoad.src = '';
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', (e) => {
    const img = e.target.result;
    imgupLoad.src = img;
  });
  reader.readAsDataURL(file);
});

const btnFire = document.querySelector('#fire');
btnFire.addEventListener('click', () => {
  const fireBorder = getContainerImage();
  fireBorder.style.border = '3px dashed rgb(255,0,0)';
});

const btnWater = document.querySelector('#water');
btnWater.addEventListener('click', () => {
  const waterBorder = getContainerImage();
  waterBorder.style.border = '5px double rgb(0, 0, 255)';
});

const btnEarth = document.querySelector('#earth');
btnEarth.addEventListener('click', () => {
  const earthBorder = getContainerImage();
  earthBorder.style.border = '6px groove rgb(0, 128, 0)';
});
