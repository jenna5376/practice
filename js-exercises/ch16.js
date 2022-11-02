//counting clicks
/*
const mainButton = document.getElementById("myButton");
const deactivateButton = document.getElementById("deactivate");

mainButton.addEventListener("click", updateCounter);
deactivateButton.addEventListener("click", deactivateCounter);

function updateCounter(){
    let counter = document.getElementById("clickCount");
    counter.textContent = parseInt(counter.textContent)+1;
}
function deactivateCounter(){
    mainButton.removeEventListener("click", updateCounter);
}
*/

//changing colors
document.addEventListener("keydown", e  => {
    switch (e.key){
        case "R":
            changeColors("red");
            break;
        case "Y":
            changeColors("yellow");
            break;
        case "G":
            changeColors("green");
            break;
        case "B":
            changeColors("blue");
            break;
    }
});

function changeColors(color){
    let divs =  document.querySelectorAll("div");
    for (let i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor = color;
    }
}
changeColors();