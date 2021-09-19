const textInput = document.querySelector('#text-input');
const memeInsert = document.querySelector('#meme-insert');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeImage = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');

function createsText() {
  const text = textInput.value;
  memeText.innerText = text;
  memeImageContainer.appendChild(memeText);
}

textInput.addEventListener('keyup', createsText);

function createsImage() {
  // https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
  memeImage.src = URL.createObjectURL(memeInsert.files[0]);
  memeImage.style.width = '500px';
  memeImage.style.height = '500px';
  memeImageContainer.appendChild(memeImage);
}

memeInsert.addEventListener('change', createsImage);

const buttons = {
  fire() {
    memeImageContainer.style.setProperty('--main-border', '3px dashed red');
  },
  water() {
    memeImageContainer.style.setProperty('--main-border', '5px double blue');
  },
  earth() {
    memeImageContainer.style.setProperty('--main-border', '6px groove green');
  },
};

const fireBtn = buttons.fire;
const waterBtn = buttons.water;
const earthBtn = buttons.earth;

document.addEventListener('click', (event) => {
  const trigger = event.target.id;
  if (trigger === 'fire') {
    fireBtn();
  } else if (trigger === 'water') {
    waterBtn();
  } else if (trigger === 'earth') {
    earthBtn();
  } else {
    return 1;
  }
});
