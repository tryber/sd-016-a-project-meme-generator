// função que imprime o texto na imagem;
function printText() {
  const text = document.getElementById('text-input').value;
  const printedText = document.getElementById('meme-text');
  printedText.innerText = text;
}
document.getElementById('text-input').addEventListener('keyup', printText);
// função que mostra a imagem do upload;
function previewImage() {
  const file = document.getElementById('meme-insert').files;
  if (file.length > 0) {
    const fileReader = new FileReader();

    fileReader.onload = function load(event) {
      document.getElementById('meme-image').setAttribute('src', event.target.result);
    };
    fileReader.readAsDataURL(file[0]);
  }
}
document.getElementById('meme-insert').addEventListener('change', previewImage);
// função que mostra as 4 imagens do dollynho;
function packDoDollynho(click) {
  const dollynho = click.target;
  const image = document.getElementById('meme-image');

  image.src = dollynho.src;
}

const dolly = document.querySelectorAll('#photo-galery img');
for (let index = 0; index < dolly.length; index += 1) {
  dolly[index].addEventListener('click', packDoDollynho);
}

// Função que deixa o usuário customizar a borda de acordo com os 3 modelos;
function flavourBorder(click) {
  const selectedBorder = click.target;
  const imageContainer = document.querySelector('#meme-image-container');
  const borderStyle = window.getComputedStyle(selectedBorder);

  imageContainer.style.border = borderStyle.getPropertyValue('border');
}

document.getElementById('fire').addEventListener('click', flavourBorder);
document.getElementById('earth').addEventListener('click', flavourBorder);
document.getElementById('water').addEventListener('click', flavourBorder);
