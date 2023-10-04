# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Live Site URL: [](https://developer-ashutosh.github.io/Interactive-Rating-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive
- SEO ranking 


### What I learned

```JS

const ratingState = document.querySelector(".rating-state");
const thankState = document.querySelector(".thank-state");
const invalidState = document.querySelector(".invalid-state");
const submitBtn = document.querySelector("#submitBtn");
const rateBtn = document.querySelector("#rateBtn");
const invalidBtn = document.querySelector("#invalidBtn");
const ratings = document.querySelectorAll(".ratings");
const rateValue = document.getElementById("rateValue");

const changeState = function () {
    submitBtn.addEventListener("click", function () {
        if (rateValue.innerText == "") {
            invalidState.style.display = "block";
            ratingState.style.display = "none";
        }
        else {
            ratingState.style.display = "none";
            thankState.style.display = "block";
        }
    })
    rateBtn.addEventListener("click", function () {
        ratingState.style.display = "block";
        thankState.style.display = "none";
        resetRateStyle();
    })
    invalidBtn.addEventListener("click", function () {
        invalidState.style.display = "none";
        ratingState.style.display = "block";
    })
}

const updateRate = function () {
    ratings.forEach(e => {
        e.addEventListener("click", function () {
            resetRateStyle();
            e.style.backgroundColor = "var(--Orange)";
            e.style.color = "var(--White)";
            rateValue.innerText = e.innerText;
        })
    });
}

const resetRateStyle = function () {
    ratings.forEach(e => {
        e.style.backgroundColor = "hsla(0, 0%, 100%, 0.1)";
        e.style.color = "var(--Medium-Grey)";
        rateValue.innerText = "";
    });
}

changeState();
updateRate();

```

## Author

- Frontend Mentor - [@Developer-Ashutosh](https://www.frontendmentor.io/profile/Developer-Ashutosh)
- GitHub - [Developer-Ashutosh](https://github.com/Developer-Ashutosh)
