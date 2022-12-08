"use strict";

const cardSection = document.querySelector(".card-section");
const [btnLeft, btnRight] = document.querySelectorAll(".btn");
const containerBox = document.getElementById("rel-box");

cardSection.addEventListener("scroll", function () {
  const posFromLeft = this.scrollLeft;

  if (
    posFromLeft !== 0 &&
    containerBox.contains(btnLeft) &&
    containerBox.contains(btnRight)
  ) {
    console.log(true);
    containerBox.removeChild(btnLeft);
    containerBox.removeChild(btnRight);
  } else if (
    posFromLeft === 0 &&
    !containerBox.contains(btnLeft) &&
    !containerBox.contains(btnRight)
  ) {
    containerBox.appendChild(btnLeft);
    containerBox.appendChild(btnRight);
  }
  console.log("x:", posFromLeft);
});
