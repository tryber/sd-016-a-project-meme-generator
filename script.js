const getInputValue = document.getElementById('text-input');
const getParagraph = document.getElementById('meme-text');
const getFireButton = document.getElementById('fire');
const getWaterButton = document.getElementById('water');
const getEarthButton = document.getElementById('earth');
const getContainer = document.getElementById('meme-image-container');
const getContainerImage = document.getElementById('meme-image');

function addMemeText() {
  const str = getInputValue.value;
  console.log(str);
  getParagraph.innerText = str;
}

getInputValue.addEventListener('input', addMemeText);

const uploadImg = document.getElementById('meme-insert');
const myImg = document.getElementById('meme-image');

uploadImg.onchange = () => {
  const [file] = uploadImg.files;
  if (file) {
    myImg.src = URL.createObjectURL(file);
  }
};

function setFireOnBorder() {
  getContainer.style.border = '3px dashed red';
}

function setWaterOnBorder() {
  getContainer.style.border = '5px double blue';
}

function setEarthOnBorder() {
  getContainer.style.border = '6px groove green';
}

getFireButton.addEventListener('click', setFireOnBorder);
getWaterButton.addEventListener('click', setWaterOnBorder);
getEarthButton.addEventListener('click', setEarthOnBorder);

function changeImage(evt) {
  const imgURL = evt.target.src;
  getContainerImage.src = imgURL;
}

const getSavedImages = document.querySelectorAll('.picture');

for (let index = 0; index < getSavedImages.length; index += 1) {
  getSavedImages[index].addEventListener('click', changeImage);
}

addMemeText();
changeImage();
setFireOnBorder();
setWaterOnBorder();
setEarthOnBorder();
