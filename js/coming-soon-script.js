const comingSoon = document.getElementById("coming-soon");

const csAnimation = bodymovin.loadAnimation({
    container: comingSoon,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "../assets/animations/coming-soon.json",
});

const loading = document.getElementById("loading");

const loadAnimation = bodymovin.loadAnimation({
    container: loading,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/animations/loading.json",
});