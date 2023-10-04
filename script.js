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