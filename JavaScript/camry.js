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

const buttons = document.querySelectorAll("[data-slider-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.sliderButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-slider]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
})

const equipmentGroups = document.querySelectorAll('.equipment-group');

equipmentGroups.forEach(equipmentGroup => {
  equipmentGroup.addEventListener('click', () => {
    equipmentGroup.classList.toggle('active');
  })
})

const openPopup = document.querySelector('.testdrive'),
closePopup = document.querySelector('.pop_up-close'),
closePopupBtn = document.querySelector('.pop_up-close-btn'),
popup = document.querySelector('.pop_up');

openPopup.addEventListener('click', function(e){
  e.preventDefault();
  popup.classList.add('active');
})

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
})
closePopupBtn.addEventListener('click', () => {
  popup.classList.remove('active');
})

const btn = document.querySelector('.pop_up-btn'),
submit = document.querySelector('.pop_up-submit'),
popUpBody = document.querySelector('.pop_up-body');

btn.onclick = () => {
  popUpBody.style.display = 'none';
  submit.style.display = 'block';
  closePopupBtn.onclick = () => {
    popUpBody.style.display = 'flex';
    submit.style.display = 'none';
  }
  return false;
}
