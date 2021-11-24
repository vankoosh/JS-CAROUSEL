const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
let counter = 1;
let size = carouselImages[counter].clientWidth;
const carouselTimer = 5000;



// Translate x positioning to correct first image
carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px';

// Init Carousel Loop
startCarousel();

carouselSlide.addEventListener('transitionend', ()=>{
  // console.log('fired');
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    size = carouselImages[counter].clientWidth;
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  }

  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    size = carouselImages[counter].clientWidth;
    counter = carouselImages.length -counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
})

function slideLeft() {
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  size = carouselImages[counter].clientWidth;
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
}

function slideRight() {
  if(counter >= carouselImages.length-1) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  size = carouselImages[counter].clientWidth;
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
}

function startCarousel() {
  carouselLoop = setInterval(function(){
    slideRight();
  }, carouselTimer);
}
