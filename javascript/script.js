const bannerImg = document.querySelectorAll('#imgsBanner img');
console.log(bannerImg)

let tempo = 5000;
let imagemAtual = 0;
let maxImgs = bannerImg.length;

function mudaImg() {
    bannerImg[imagemAtual].classList.remove('select');
    imagemAtual++;

    if (imagemAtual >= maxImgs) {
        imagemAtual = 0;
    }
    bannerImg[imagemAtual].classList.add('select');

}

function start() {

    setInterval(() => {
        mudaImg()
    }, tempo)
}

document.addEventListener('load', start());



