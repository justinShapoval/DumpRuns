function callPhoneNumber() {
    window.location.href = 'tel:9167671869';
}

// HEADER PHONE WOBBLE
function startWobble() {
    document.querySelector('.phone-icon').style.animationPlayState = 'running';
    setTimeout(function () {
        document.querySelector('.phone-icon').style.animationPlayState = 'paused';
        setTimeout(startWobble, 10000);
    }, 3000);
}

startWobble();

// TEXT CHANGING HERO PARA
var nIntervId;
var list = ["HOME", "GARAGE", "YARD", "BUSINESS"];

var counter = 0;
var oElem = document.getElementById('my_box');
changeText();
nIntervId = setInterval(changeText, 1000);

function changeText() {
    oElem.innerHTML = list[counter];
    counter++;

    if (counter >= list.length) {
        counter = 0;
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '" style="background-color: #67BD43;"></span>';
        },
    },
});

const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

const container1 = document.querySelector('.container1');
document.querySelector('.slider1').addEventListener('input', (e) => {
    container1.style.setProperty('--position', `${e.target.value}%`);
})

const container2 = document.querySelector('.container2');
document.querySelector('.slider2').addEventListener('input', (e) => {
    container2.style.setProperty('--position', `${e.target.value}%`);
})

const container3 = document.querySelector('.container3');
document.querySelector('.slider3').addEventListener('input', (e) => {
    container3.style.setProperty('--position', `${e.target.value}%`);
})

function redirectToInstagram() {
    window.location.href = "https://www.instagram.com/916.dumpruns";
}

function redirectToTikTok() {
    window.location.href = "https://www.tiktok.com/@916dumpruns";
}




