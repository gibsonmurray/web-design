const box = document.getElementById("box-animation");

const boxAnimation = bodymovin.loadAnimation({
    container: box,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../assets/animations/box-open-new.json",
});

const box_container = document.getElementById("box-container");

box_container.classList.add("box-pop")

setTimeout(() => {
    box_container.classList.remove("box-pop");
    console.log("removed");
}, 700);

const cardGroup = document.getElementById("card-group");
const cards = document.getElementsByClassName("card");

let flag = false;
let trans = false;

box.addEventListener("click", function () {
    cardGroup.style.setProperty("opacity", "1");
    box.classList.add("openning-anim");
    setTimeout(() => boxAnimation.play(), 170);
    cardGroup.dataset.status = "open";
    setTimeout(() => removeDelay(cards), 1000);
    setTimeout(() => allowHover(), 700);
    setTimeout(() => allowTrans(), 800);
});

function allowHover() {
    flag = true;
}

function allowTrans() {
    trans = true;
}

function removeDelay(cards) {
    for (c of cards) {
        c.style.setProperty("transition-delay", "0ms");
    }
    cardGroup.classList.add("floating");
}

const bigCard1 = document.querySelector(`[data-index="${0}"]`);
const bigCard2 = document.querySelector(`[data-index="${1}"]`);
const bigCard3 = document.querySelector(`[data-index="${2}"]`);
const bigCard4 = document.querySelector(`[data-index="${3}"]`);
const smallCard1 = document.querySelector(`[data-index="${4}"]`);
const smallCard2 = document.querySelector(`[data-index="${5}"]`);
const smallCard3 = document.querySelector(`[data-index="${6}"]`);
const smallCard4 = document.querySelector(`[data-index="${7}"]`);

bigCard1.addEventListener("mouseover", function () {
    if (flag) {
        bigCard1.style.setProperty("z-index", 4);
        bigCard2.style.setProperty("z-index", 3);
        bigCard3.style.setProperty("z-index", 2);
        bigCard4.style.setProperty("z-index", 1);
    }
});

bigCard2.addEventListener("mouseover", function () {
    if (flag) {
        bigCard1.style.setProperty("z-index", 2);
        bigCard2.style.setProperty("z-index", 3);
        bigCard3.style.setProperty("z-index", 2);
        bigCard4.style.setProperty("z-index", 1);
    }
});

bigCard3.addEventListener("mouseover", function () {
    if (flag) {
        bigCard1.style.setProperty("z-index", 1);
        bigCard2.style.setProperty("z-index", 2);
        bigCard3.style.setProperty("z-index", 3);
        bigCard4.style.setProperty("z-index", 2);
    }
});

bigCard4.addEventListener("mouseover", function () {
    if (flag) {
        bigCard1.style.setProperty("z-index", 1);
        bigCard2.style.setProperty("z-index", 2);
        bigCard3.style.setProperty("z-index", 3);
        bigCard4.style.setProperty("z-index", 4);
    }
});

smallCard1.addEventListener("mouseover", function () {
    if (flag) {
        smallCard1.style.setProperty("z-index", 5);
    }
});

smallCard2.addEventListener("mouseover", function () {
    if (flag) {
        smallCard2.style.setProperty("z-index", 5);
    }
});

smallCard3.addEventListener("mouseover", function () {
    if (flag) {
        smallCard3.style.setProperty("z-index", 5);
        bigCard1.style.setProperty("z-index", 2);
        bigCard2.style.setProperty("z-index", 3);
        bigCard3.style.setProperty("z-index", 2);
        bigCard4.style.setProperty("z-index", 1);
    }
});

smallCard4.addEventListener("mouseover", function () {
    if (flag) {
        smallCard4.style.setProperty("z-index", 5);
        bigCard1.style.setProperty("z-index", 4);
        bigCard2.style.setProperty("z-index", 3);
        bigCard3.style.setProperty("z-index", 2);
        bigCard4.style.setProperty("z-index", 1);
    }
});

cardGroup.addEventListener("mouseout", function () {
    if (flag) {
        bigCard1.style.setProperty("z-index", 1);
        bigCard2.style.setProperty("z-index", 2);
        bigCard3.style.setProperty("z-index", 3);
        bigCard4.style.setProperty("z-index", 4);
        smallCard1.style.setProperty("z-index", 0);
        smallCard2.style.setProperty("z-index", 0);
        smallCard3.style.setProperty("z-index", 0);
        smallCard4.style.setProperty("z-index", 0);
    }
});

const container = document.getElementById("container");

bigCard4.addEventListener("click", function () {
    if (trans) {
        container.style.setProperty("animation", "shrink forwards cubic-bezier(.11,.82,.28,1.02) 0.4s");
        setTimeout(() => (location.href = "about.html"), 600);
    }
});
