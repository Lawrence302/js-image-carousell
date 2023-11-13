// Select all slides
const slides = document.querySelectorAll('.slide');

// select next slide button
const nextSlide = document.querySelector('.btn-next');
// select prev slide button
const prevSlide = document.querySelector('.btn-prev');

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;

// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and next slide functionality
nextSlide.addEventListener('click', function () {
  //   curSlide++;
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// add event listener and prevSlide slide functionality
prevSlide.addEventListener('click', function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
