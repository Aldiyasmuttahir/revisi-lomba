function imgSlider(anything){
    document.querySelector('.productnike').src = anything;
}



function changeCircleColor(color){
    const buynow = document.querySelector('.buynow');
    const search = document.querySelector('.navbar-search-btn');
    const btn = document.querySelector('.btn');
    const btnalt = document.querySelector('.btnalt');
    const spaner = document.querySelector('.spaner');
    const spaner1 = document.querySelector('.spaner1');
    const spaner2 = document.querySelector('.spaner2');
    const spaner3 = document.querySelector('.spaner3');
    const spaner4 = document.querySelector('.spaner4');
    const bingkai = document.querySelector('.gallery');

    buynow.style.background = color ;
    search.style.background = color ;
    btn.style.background = color ; 
    btn.style.borderColor = color ; 
    btnalt.style.borderColor = color ;
    spaner.style.background = color ;
    spaner1.style.background = color ;
    spaner2.style.background = color ;
    spaner3.style.background = color ;
    spaner4.style.background = color ;
    bingkai.style.background = color ;
}