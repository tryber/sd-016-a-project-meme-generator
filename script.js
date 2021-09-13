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
