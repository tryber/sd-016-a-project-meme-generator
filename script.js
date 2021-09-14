const text = document.getElementById('meme-text');
const input = document.getElementById('text-input');

input.addEventListener('input', () => {
  text.innerHTML = input.value;
});

const insert = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');

const reader = new FileReader();

insert.addEventListener('change', (event) => {
  const { files } = event.target;
  const file = files[0];
  reader.readAsDataURL(file);

  reader.addEventListener('load', (event) => {
    image.src = event.target.result;
    image.alt = file.name;
  });
});

// https://blog.greenroots.info/10-useful-html-file-upload-tips-for-web-developers

const border = document.getElementById('meme-image-container');

//fire button
const fireButton = document.getElementById('fire');

function fireBorder(){
    border.style.border = '3px dashed red';
}

fireButton.addEventListener('click', fireBorder);
fireButton.style.backgroundColor = 'rgb(255, 0, 0)';

//water button 

const waterButton = document.getElementById('water');

function waterBorder(){
    border.style.border = '5px double blue';
}

waterButton.addEventListener('click', waterBorder);
waterButton.style.backgroundColor = 'rgb(0, 0, 255)';

//earth

const earthButton = document.getElementById('earth');

function earthBorder(){
    border.style.border = '6px groove green';
}

earthButton.addEventListener('click', earthBorder);
earthButton.style.backgroundColor = 'rgb(0, 128, 0)';

const memeOne = document.getElementById('firstMeme');

memeOne.addEventListener('click', () => {
    image.src = memeOne.firstElementChild.src;
})

const memeTwo = document.getElementById('secondMeme');

memeTwo.addEventListener('click', () => {
    image.src = memeTwo.firstElementChild.src;
})

const memeTree = document.getElementById('thirdMeme');

memeTree.addEventListener('click', () => {
    image.src = memeTree.firstElementChild.src;
})

const memeFour = document.getElementById('fourthMeme');

memeFour.addEventListener('click', () => {
    image.src = memeFour.firstElementChild.src;
})