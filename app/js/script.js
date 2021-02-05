const btnhamburger = document.querySelector("#btnhamburger");
const body = document.querySelector('body');
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnhamburger.addEventListener("click", function () {
  console.log("open hamburger");
  if (header.classList.contains("open")) {
    // close hamburger
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
        element.classList.add("fade-out");
        element.classList.remove("fade-in");
    });
  } else {
    //open hamburger
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
