// Contact phone number
function callPhoneNumber() {
    window.location.href = 'tel:9167671869';
}

// Header Phone Wobble
function startWobble() {
    document.querySelector('.phone-icon').style.animationPlayState = 'running';
    setTimeout(function () {
        document.querySelector('.phone-icon').style.animationPlayState = 'paused';
        setTimeout(startWobble, 10000);
    }, 3000);
}

startWobble();

// Alternating Text in Section One
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



// Slideshow

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


// Before and after Slide picker
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


// Hamburger Menu Open/Close

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}



// Redirect Link for the Footer

function redirectToInstagram() {
    window.location.href = "https://www.instagram.com/916.dumpruns";
}

function redirectToTikTok() {
    window.location.href = "https://www.tiktok.com/@916dumpruns";
}

function redirectToFB() {
    window.location.href = "https://www.facebook.com/p/916Dumpruns-61558061439891/";
}



// Locations Of Service

var locations = [
    "Grass Valley, CA",
    "Plumas Lake, CA",
    "Sacramento, CA",
    "El Dorado, CA",
    "Yuba City, CA",
    "Roseville, CA",
    "Elk Grove, CA",
    "Rio Oso, CA",
    "Rocklin, CA",
    "Lincoln, CA",
    "Wilton, CA",
    "Folsom, CA",
    "Davis, CA",
    "Galt, CA",
];


var ul = document.querySelector('.listOf');


locations.forEach(function (location) {
    var li = document.createElement('li');
    li.classList.add('listItems');
    li.innerHTML = '<i class="fa-solid fa-map-pin" style="color: #67BD43;"></i>' + location;
    ul.appendChild(li);
});





// Function to create and inject SVG into the parent elements


function injectSVG(parentClassName) {
    // Create the SVG element
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "custom-svg");
    svg.setAttribute("width", "30");
    svg.setAttribute("height", "30");
    svg.setAttribute("viewBox", "0 0 256 256");

    // Create SVG content (rect, lines, polyline)
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "256");
    rect.setAttribute("height", "256");
    rect.setAttribute("fill", "none");

    var line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttribute("x1", "128");
    line1.setAttribute("y1", "40");
    line1.setAttribute("x2", "128");
    line1.setAttribute("y2", "216");
    line1.setAttribute("fill", "none");
    line1.setAttribute("stroke", "currentColor");
    line1.setAttribute("stroke-linecap", "round");
    line1.setAttribute("stroke-linejoin", "round");
    line1.setAttribute("stroke-width", "16");

    var line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttribute("x1", "96");
    line2.setAttribute("y1", "128");
    line2.setAttribute("x2", "16");
    line2.setAttribute("y2", "128");
    line2.setAttribute("fill", "none");
    line2.setAttribute("stroke", "currentColor");
    line2.setAttribute("stroke-linecap", "round");
    line2.setAttribute("stroke-linejoin", "round");
    line2.setAttribute("stroke-width", "16");

    var polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttribute("points", "48 160 16 128 48 96");
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke", "currentColor");
    polyline.setAttribute("stroke-linecap", "round");
    polyline.setAttribute("stroke-linejoin", "round");
    polyline.setAttribute("stroke-width", "16");

    var line3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line3.setAttribute("x1", "160");
    line3.setAttribute("y1", "128");
    line3.setAttribute("x2", "240");
    line3.setAttribute("y2", "128");
    line3.setAttribute("fill", "none");
    line3.setAttribute("stroke", "currentColor");
    line3.setAttribute("stroke-linecap", "round");
    line3.setAttribute("stroke-linejoin", "round");
    line3.setAttribute("stroke-width", "16");

    var polyline2 = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline2.setAttribute("points", "208 96 240 128 208 160");
    polyline2.setAttribute("fill", "none");
    polyline2.setAttribute("stroke", "currentColor");
    polyline2.setAttribute("stroke-linecap", "round");
    polyline2.setAttribute("stroke-linejoin", "round");
    polyline2.setAttribute("stroke-width", "16");

    // Append SVG content to the SVG element
    svg.appendChild(rect);
    svg.appendChild(line1);
    svg.appendChild(line2);
    svg.appendChild(polyline);
    svg.appendChild(line3);
    svg.appendChild(polyline2);

    // Get all elements with the specified class name
    var parentElements = document.querySelectorAll('.' + parentClassName);

    // Inject the SVG into each parent element
    parentElements.forEach(function (parentElement) {
        parentElement.appendChild(svg.cloneNode(true));
    });
}

// Call the function for each parent element
injectSVG('slider-button');
injectSVG('slider-button1');
injectSVG('slider-button2');
injectSVG('slider-button3');
