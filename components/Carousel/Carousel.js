var carouselDiv = document.createElement("div");
let carousel = document.querySelector(".carousel-container");
carouselDiv.classList.add("carousel");
carousel.appendChild(carouselDiv);
var left = document.createElement("div");
left.classList.add("left-button");
carouselDiv.appendChild(left);
left.textContent="<";

var img1 = document.createElement("img");
img1.classList.add("show");
img1.dataset["order"] = 1;
img1.src = "/assets/carousel/mountains.jpeg";
carouselDiv.appendChild(img1);

var img2 = document.createElement("img");
img2.dataset["order"] = 2;
img2.src = "/assets/carousel/computer.jpeg";
carouselDiv.appendChild(img2);

var img3 = document.createElement("img");
img3.dataset["order"] = 3;
img3.src = "/assets/carousel/trees.jpeg";
carouselDiv.appendChild(img3);

var img4 = document.createElement("img");
img4.dataset["order"] = 4;
img4.src = "/assets/carousel/turntable.jpeg";
carouselDiv.appendChild(img4);

var right = document.createElement("div");
right.classList.add("right-button");
carouselDiv.appendChild(right);
right.textContent=">";


class Carousel {
  constructor(image) {
    this.image = image;
    this.order = this.image.dataset.order;
  }
}
document.querySelector(".left-button").addEventListener("click", () => {
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
document.querySelector(".right-button").addEventListener("click", () => {
  let e = Number(carousel.querySelector(".show").dataset.order);
  carouselImages.forEach(image => image.classList.remove("show"));
  let select = e + 1;
  if (select < 1) {
    select = i;
  } else if (select > i) {
    select = 1;
  }
  carousel.querySelector(`img[data-order="${select}"]`).classList.add("show");
});

let carouselImages = carousel.querySelectorAll("img");
let i = carouselImages.length;
carouselImages.forEach(image => {
  image.style.width = "50vw";
  new Carousel(image);
});
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
  <div class="left-button"> < </div>
  <img src="./assets/carousel/mountains.jpeg" />
  <img src="./assets/carousel/computer.jpeg" />
  <img src="./assets/carousel/trees.jpeg" />
  <img src="./assets/carousel/turntable.jpeg" />
  <div class="right-button"> > </div>
  </div>
  */
