function imgSlider(anything){
    document.querySelector('.nike').src = anything;
}

function changeCircleColor(color){
    const searchbar = document.querySelector('.searchbar');
    const btn = document.querySelector('.btn')
    const btnalt = document.querySelector('.btnalt')
    const buynow = document.querySelector('.buynow');
    const insta = document.querySelector('.insta');
    const face = document.querySelector('.face');
    const oneline = document.querySelector('.oneline');
    const polygon = document.querySelector('.triangle');
    searchbar.style.background = color ;
    btn.style.background = color;
    insta.style.background = color;
    face.style.background = color;
    oneline.style.background = color;
    btn.style.borderColor = color;
    btnalt.style.borderColor = color;
    buynow.style.background = color ;
    polygon.style.background = color;
}

const carousel = document.querySelector('.carousel');

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);

firstImg = document.querySelectorAll("img")[0]
arrowIcons = document.querySelectorAll(".wrapper i")

let firstImgWidth = firstImg.clientWidth + 60;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "right" ? -firstImgWidth : firstImgWidth
        })
})

