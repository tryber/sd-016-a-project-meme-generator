function Texto() {
  console.log('entrou');
  document.querySelector('#meme-text').innerText = document.querySelector('#text-input').value;
}
function definirConst() {
  const variavel = document.querySelector('#meme-image-container');
  return variavel;
}
function Definirimage(event) {
  console.log('entrou');
  const variavel = definirConst();
  variavel.removeChild(document.querySelector('#meme-image'));
  const image = document.createElement('img');
  image.id = 'meme-image';

  // codigo retirado da pagina https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
  image.src = URL.createObjectURL(event.target.files[0]);
  variavel.appendChild(image);
}
function ApplyImage(origin) {
  const variavel = definirConst();
  variavel.removeChild(document.querySelector('#meme-image'));
  const image = document.createElement('img');
  image.id = 'meme-image';
  image.src = origin.target.src;
  variavel.appendChild(image);
}
function AddEventList() {
  document.querySelector('#text-input').addEventListener('input', Texto);
  document.querySelector('#meme-insert').addEventListener('change', Definirimage);
  const butons = document.querySelectorAll('.images');
  for (let i = 0; i < butons.length; i += 1) {
    butons[i].addEventListener('click', ApplyImage);
  }
}
function ChangeBordaEarth() {
  const variavel = definirConst();
  variavel.style.border = '6px groove green';
}
function ChangeBordaFire() {
  const variavel = definirConst();
  variavel.style.border = '3px dashed red';
}
function ChangeBordaWater() {
  const variavel = definirConst();
  variavel.style.border = '5px double blue';
}
window.onload = function none() {
  const butao = document.querySelector('#none');
  butao.addEventListener('click', ChangeBordaEarth);
  butao.addEventListener('click', ChangeBordaFire);
  butao.addEventListener('click', ChangeBordaWater);
  butao.style.display = 'none';
};
AddEventList();
