class Carousel {
  constructor(image) {
    this.image = image;
    this.order = this.image.dataset.order;
  }
}
document
  .querySelector(".left-button")
  .addEventListener("click", function left() {
    let e = carousel.querySelector(".show").dataset.order;
    //console.log(e);
    carouselImages.forEach(image => image.classList.remove("show"));
    let select = e - 1;
    if (select < 1) {
      select = i;
    } else if (select > i) {
      select = 1;
    }
    carousel.querySelector(`img[data-order="${select}"]`).classList.add("show");
  });
document
  .querySelector(".right-button")
  .addEventListener("click", function right() {
    let e = Number(carousel.querySelector(".show").dataset.order);
    carouselImages.forEach(image => image.classList.remove("show"));
    let select = e+1;
    if (select < 1) {
      select = i;
    } else if (select > i) {
      select = 1;
    }
    carousel.querySelector(`img[data-order="${select}"]`).classList.add("show");
  });

let carousel = document.querySelector(".carousel");
let carouselImages = carousel.querySelectorAll("img");
let i = carouselImages.length;
carouselImages.forEach(image => {
  new Carousel(image);
});
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
