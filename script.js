// criando novas imagens:
// usar o change event no event listerner -- quando ha alteração ao valor do elemento pelo usuario
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
// usar criar variaveis para receber a imagem
//https://glitch.com/edit/#!/read-image-file?path=static%2Findex.html%3A27%3A73
// https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/
//https://blog.greenroots.info/10-useful-html-file-upload-tips-for-web-developers
// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications


// o código a seguir foi feito com base no apresentado nos links acima
// criar variavel para a imagem
let imageInput = document.querySelector("#meme-insert");
// usando o código do https://glitch.com/edit/#!/read-image-file?path=static%2Findex.html%3A27%3A73
imageInput.addEventListener('change', (event) => {
    let memeImage = document.querySelector("#meme-image");
    memeImage.src = "";
    // a propriedade files retorna um filelist
    // https://stackoverflow.com/questions/41557711/what-does-files0-represent-in-javascript-jquery/41557908
    const imageFile = event.target.files[0];
    // referencia sobre o new filereader https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
    //// do link acima: Next, we establish the FileReader to handle asynchronously loading the image and attaching it to the img element.
    const reader = new FileReader();
    // a imagem vai abrir a partir do evento de load
    reader.addEventListener('load', (event) => {
        // entender de onde vem esse RESULT - do file reader? pq a variavel nem é usada, mas esta atrelada ao event
        // https://www.ti-enxame.com/pt/typescript/novo-erro-de-compilacao-do-typescript-1.8.4-build-property-result-nao-existe-no-tipo-eventtarget./824035250/
        let image = event.target.result;
        memeImage.src = image;
    });
    reader.readAsDataURL(imageFile);
});

function loadImage() {

}
