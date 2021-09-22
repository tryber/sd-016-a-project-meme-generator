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

  fileReader.readAsDataURL(memeInsert.files[0]);
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

function createDefaultMemes() {
  let meme1 = document.createElement('img');
  let meme2 = document.createElement('img');
  let meme3 = document.createElement('img');
  let meme4 = document.createElement('img');

  meme1.src = './imgs/meme1.png';
  meme1.id = 'meme-1';
  meme1.className = 'default-memes';

  meme2.src = './imgs/meme2.png';
  meme2.id = 'meme-2';
  meme2.className = 'default-memes';

  meme3.src = './imgs/meme3.png';
  meme3.id = 'meme-3';
  meme3.className = 'default-memes';

  meme4.src = './imgs/meme4.png';
  meme4.id = 'meme-4';
  meme4.className = 'default-memes';

  mainContainer.appendChild(meme1);
  mainContainer.appendChild(meme2);
  mainContainer.appendChild(meme3);
  mainContainer.appendChild(meme4);
}

createDefaultMemes();

let meme1 = document.getElementById('meme-1');
let meme2 = document.getElementById('meme-2');
let meme3 = document.getElementById('meme-3');
let meme4 = document.getElementById('meme-4');
function handleMeme1() {
  memeImage.src = meme1.src;
}

function handleMeme2() {
  memeImage.src = meme2.src;
}

function handleMeme3() {
  memeImage.src = meme3.src;
}

function handleMeme4() {
  memeImage.src = meme4.src;
}

meme1.onclick = handleMeme1;
meme2.onclick = handleMeme2;
meme3.onclick = handleMeme3;
meme4.onclick = handleMeme4;
