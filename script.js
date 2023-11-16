"use strict";
const allButtons = document.querySelectorAll(".all-buttons");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");

//close button
const endButton = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//open button
const openButton = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", openButton);
}

closeBtn.addEventListener("click", endButton);

overlay.addEventListener("click", endButton);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    endButton();
  }
});
