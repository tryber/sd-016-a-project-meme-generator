

const getInputValue = document.getElementById('text-input');
const getParagraph = document.getElementById('meme-text');
const getFireButton = document.getElementById('fire');
const getWaterButton = document.getElementById('water');
const getEarthButton = document.getElementById('earth');
const getContainer = document.getElementById('meme-image-container');
const getContainerImage = document.getElementById('meme-image');


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

  getFireButton.addEventListener('click', function () {
    document.getElementById('meme-image-container').style.border = '3px dashed red';
  });

  getWaterButton.addEventListener('click', function () {
    document.getElementById('meme-image-container').style.border = '5px double blue';
  });

  getEarthButton.addEventListener('click', function () {
    document.getElementById('meme-image-container').style.border = '6px groove green';
  });

 
  const getSavedImages = document.querySelectorAll('.picture');
  function changeImage () {    
      for (let index = 0; index < getSavedImages.length; index +=1) {
      getSavedImages[index].addEventListener('click', function (evt) {
      const imgURL = evt.target.src;
      console.log(imgURL);
      getContainerImage.src = imgURL;
      })
    }
  }
  changeImage();
  
