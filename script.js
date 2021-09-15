const getInputValue = document.getElementById('text-input');
const getParagraph = document.getElementById('meme-text');
const uploadImg = document.getElementById('meme-insert');
const getFireButton = document.getElementById('fire');
const getWaterButton = document.getElementById('water');
const getEarthButton = document.getElementById('earth');
const getContainer = document.getElementById('meme-image-container');
const getContainerImage = document.getElementById('meme-image');
const getSavedImagesContainer = document.querySelector('#saved-memes');

function addMemeText() {
  const str = getInputValue.value;
  console.log(str);
  getParagraph.innerText = str;
}

getInputValue.addEventListener('input', addMemeText);

uploadImg.addEventListener('change', () => {
  getContainerImage.src = URL.createObjectURL(uploadImg.files[0]);
});

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

function changeImage() {
  const memes = getSavedImagesContainer.children;
  for (let i = 0; i < memes.length; i += 1) {
    memes[i].addEventListener('click', (evt) => {
      getContainerImage.src = evt.target.src;
    });
  }
}

changeImage();
