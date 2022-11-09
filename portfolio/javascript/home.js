const wave = document.getElementById("wave");

//make hand emoji wave on reload
window.addEventListener('load', (event) => {
    wave.classList.add("wave-animation");
});