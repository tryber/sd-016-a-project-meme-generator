const textInput = document.querySelector('#text-input');
const imageContainer = document.querySelector('.image-container');
const parag = document.querySelector('.meme-description');
const memeInsert = document.querySelector('.meme-insert');
const memeImage = document.querySelector('.meme-image');

function generatesText() {
  const text = textInput.value;
  parag.innerText = text;
}

textInput.addEventListener('keyup', generatesText);

function generatesImage() {
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  memeImage.style.width = `${476}px`;
  memeImage.style.height = `${500}px`;
  imageContainer.appendChild(memeImage);
}

memeInsert.addEventListener('change', generatesImage);
