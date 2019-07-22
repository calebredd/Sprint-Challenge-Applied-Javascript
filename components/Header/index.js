// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
var headerContainer= document.querySelector(".header-container");
var header=document.createElement("div");
header.classList.add("header");
headerContainer.appendChild(header);
var date=document.createElement("span");
date.classList.add("date");
date.textContent="March 28, 2019";
header.appendChild(date);
var title=document.createElement("h1");
title.textContent="Lambda Times";
header.appendChild(title);
var temp=document.createElement("span");
temp.classList.add("temp");
temp.textContent ="98°";
header.appendChild(temp);
}
Header();
