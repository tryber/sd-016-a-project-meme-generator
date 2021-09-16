const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imageInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const styles = document.querySelectorAll('.style>*');
const images = document.querySelectorAll('.images>*');
const container = document.querySelector('#meme-image-container');

inputText.addEventListener('input', () => {
  memeText.innerText = inputText.value;
});

imageInsert.addEventListener('change', () => {
  memeImage.src = URL.createObjectURL(imageInsert.files[0]);
});

styles[0].addEventListener('click', () => {
  container.style.border = '3px dashed red';
});
styles[1].addEventListener('click', () => {
  container.style.border = '5px double blue';
});
styles[2].addEventListener('click', () => {
  container.style.border = '6px groove green';
});

images.forEach((elem) => {
  elem.addEventListener('click', () => {
    memeImage.src = elem.src;
  });
});
