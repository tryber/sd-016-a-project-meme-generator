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

