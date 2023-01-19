const mouse = document.getElementById("mouse-scroll");

const mouseAnimation = bodymovin.loadAnimation({
    container: mouse,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/animations/mouse-scroll.json",
});

const arrows = document.getElementById("arrows-scroll");

const arrowsAnimation = bodymovin.loadAnimation({
    container: arrows,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/animations/arrows-scroll.json",
});

const book = document.getElementById("book");

const bookAnimation = bodymovin.loadAnimation({
    container: book,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/animations/book.json",
});

const csAnim = document.getElementById("cs-anim");

const csAnimation = bodymovin.loadAnimation({
    container: csAnim,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/animations/cs-anim.json",
});

const photo = document.querySelector('.photo-LtoR');

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    if (isPartiallyVisible(photo)) {
        leftToRight(photo);
    }
}, false);

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
 
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function leftToRight (photo) {
    const currentScrollPosition = window.scrollY - (window.scrollY - 20);
    photo.style.transform = `translate(${currentScrollPosition}px`;
}