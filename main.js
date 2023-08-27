"use strict";

// Get the progress bar and circles
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

// Get the previous and next buttons
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

// Initialize current active circle
let currentActive = 1;

// Function to update the progress and circles
const update = () => {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");
    let status = (actives.length - 1) / (circles.length - 1) * 100;
    progress.style.width = status + "%";
};

// Function to enable a button
function btnEnabler(btn) {
    btn.removeAttribute("disabled");
}

// Event listener for the next button
btnNext.addEventListener("click", () => {
    currentActive++;
    btnEnabler(btnPrev);

    if (currentActive > 3) {
        btnNext.setAttribute("disabled", "true");
    }

    update();
});

// Event listener for the previous button
btnPrev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 2) {
        btnPrev.setAttribute("disabled", "true");
    }

    update();
    btnEnabler(btnNext);
});