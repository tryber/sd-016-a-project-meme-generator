const getInputValue = document.getElementById('text-input');
const getParagraph = document.getElementById('meme-text');
const getTextArea = document.getElementById('text-area');

getInputValue.addEventListener('input', function () {
    const str = getInputValue.value;
    console.log(str);
    getParagraph.innerText = str;
    
})

const uploadImg = document.getElementById('meme-insert');
const myImg = document.getElementById('meme-image');
uploadImg.onchange = evt => {
    const [file] = uploadImg.files
    if (file) {
      myImg.src = URL.createObjectURL(file)
    }
  }