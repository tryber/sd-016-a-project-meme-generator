function printText() {
  const text = document.getElementById('text-input').value;
  let printedText = document.getElementById('meme-text')
  console.log(text.length)
  if (text.length <= 60) {
    printedText.innerText = text;
  }
}
document.getElementById('text-input').addEventListener('keyup', printText);

function printImage() {
  const parentElement = document.getElementById('meme-image-container')
  const uploadedImage = document.getElementById('upload-image').value;
  let printedImage = document.createElement('img');
  console.log(uploadedImage)

  printedImage.src = uploadedImage.src;
  parentElement.appendChild(printedImage);
}
document.getElementById('send-image').addEventListener('click', printImage)



function limitedCharacters() {
  const text = document.getElementById('text-input').value;
  const textLiberated = [];

  for (let index = 0; index <= 60; index += 1) {
    textLiberated.push(text[index]);
  }
  return textLiberated.join(',')
}