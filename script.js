let mainContainer = document.getElementById('main-container');
let textInput = document.getElementById('text-input');
function createImageContainer() {
  let imageContainer = document.createElement('div');
  imageContainer.id = 'meme-image-container';
  
  let memeImage = document.createElement('img');
  memeImage.id = 'meme-image';

  let memeText = document.createElement('p');
  memeText.id ='meme-text';
  
  mainContainer.appendChild(imageContainer);
  imageContainer.appendChild(memeImage);
  imageContainer.appendChild(memeText);  
}
createImageContainer();

let imageContainer = document.getElementById('meme-image-container');
let memeText = document.getElementById('meme-text');
function handleTextContainer() {
  memeText.innerText = textInput.value;
}

let memeInsert = document.getElementById('meme-insert');
let memeImage = document.getElementById('meme-image');
// Método usado para pegar o input da imagem e colocar no container http://y2u.be/BLe27Zukmwo
memeInsert.addEventListener('change', () => {
  let fileReader = new FileReader();

  fileReader.onload = () => {
    memeImage.src = fileReader.result;
  }
})

function createBorderButtons() {
  let borderButtonsContainer = document.createElement('section');
  let fireBorderButton = document.createElement('button');
  let waterBorderButton = document.createElement('button');
  let earthBorderButton = document.createElement('button');

  fireBorderButton.id = 'fire';
  fireBorderButton.innerText = 'Fire';
  fireBorderButton.style.backgroundColor = 'red';
  fireBorderButton.style.border = '3px dashed red';

  waterBorderButton.id = 'water';
  waterBorderButton.innerText = 'Water';
  waterBorderButton.style.backgroundColor = 'blue';
  waterBorderButton.style.border = '5px double blue';

  earthBorderButton.id = 'earth';
  earthBorderButton.innerText = 'earth';
  earthBorderButton.style.backgroundColor = 'green';
  earthBorderButton.style.border = '6px groove green';

  mainContainer.appendChild(borderButtonsContainer);
  borderButtonsContainer.appendChild(fireBorderButton);
  borderButtonsContainer.appendChild(waterBorderButton);
  borderButtonsContainer.appendChild(earthBorderButton);
}

createBorderButtons();

let fireBorderButton = document.getElementById('fire');
let waterBorderButton = document.getElementById('water');
let earthBorderButton = document.getElementById('earth');


function fireBorderStyle() {
  imageContainer.style.border = fireBorderButton.style.border;
}

function waterBorderStyle() {
  imageContainer.style.border = waterBorderButton.style.border;
}

function earthBorderStyle() {
  imageContainer.style.border = earthBorderButton.style.border;
}

fireBorderButton.onclick = fireBorderStyle;
waterBorderButton.onclick = waterBorderStyle;
earthBorderButton.onclick = earthBorderStyle;