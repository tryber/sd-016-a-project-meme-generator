const textInput = document.querySelector('#text-input');
const memeInsert = document.querySelector('#meme-insert');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeImage = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');
const mainBorder = '--main-border';
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

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
    memeImageContainer.style.setProperty(mainBorder, '3px dashed red');
  },
  water() {
    memeImageContainer.style.setProperty(mainBorder, '5px double blue');
  },
  earth() {
    memeImageContainer.style.setProperty(mainBorder, '6px groove green');
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

const memes = {
  meme1() {
    memeImage.src = meme1.src;
    memeImage.style.width = '500px';
    memeImage.style.height = '500px';
    memeImageContainer.appendChild(memeImage);
  },
  meme2() {
    memeImage.src = meme2.src;
    memeImage.style.width = '500px';
    memeImage.style.height = '500px';
    memeImageContainer.appendChild(memeImage);
  },
  meme3() {
    memeImage.src = meme3.src;
    memeImage.style.width = '500px';
    memeImage.style.height = '500px';
    memeImageContainer.appendChild(memeImage);
  },
  meme4() {
    memeImage.src = meme4.src;
    memeImage.style.width = '500px';
    memeImage.style.height = '500px';
    memeImageContainer.appendChild(memeImage);
  },
};

const first = memes.meme1;
const second = memes.meme2;
const third = memes.meme3;
const fourth = memes.meme4;

document.addEventListener('click', (event) => {
  const trigger = event.target.id;
  if (trigger === 'meme-1') {
    first();
  } else if (trigger === 'meme-2') {
    second();
  } else if (trigger === 'meme-3') {
    third();
  } else if (trigger === 'meme-4') {
    fourth();
  } else {
    return 2;
  }
});
