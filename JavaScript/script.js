const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
        
var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');
        btns.forEach((btn) => {
        btn.classList.remove('active');
        });
    });
        
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

let currentSlide = 1;
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});
        
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;
        
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
        
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
        
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();