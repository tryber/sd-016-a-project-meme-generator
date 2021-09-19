function printText() {
  const text = document.getElementById('text-input').value;
  let printedText = document.getElementById('meme-text')
    printedText.innerText = text;
}
document.getElementById('text-input').addEventListener('keyup', printText);

function previewImage() {
  let file = document.getElementById('meme-insert').files
  if (file.length > 0) {
    let fileReader = new FileReader();

    fileReader.onload = function (event) {
      document.getElementById('meme-image').setAttribute('src', event.target.result)
    }
    fileReader.readAsDataURL(file[0]);
  }
}
document.getElementById('meme-insert').addEventListener('change', previewImage)
