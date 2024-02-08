let letters = document.getElementById("letters");
let input = document.getElementById("input");

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "←"];
let inputVal = "";

function getRandomXY(max){
    return Math.floor(Math.random()*max/48)*48;
}

function getRandomInt(max, min=0) {
    return Math.random() * (max - min) + min;
}

for (const letter of alphabet){
    const letterBtn = document.createElement("button");
    letterBtn.textContent = letter;
    letterBtn.className = "letter-btn";
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    letterBtn.style.backgroundColor = "#" + randomColor;
    letters.appendChild(letterBtn)

    let x = getRandomXY(window.innerWidth);
    let y = getRandomXY(window.innerHeight)
    let xSpeed = getRandomInt(4, 2);
    let ySpeed = getRandomInt(4, 2);

    function animate() {
        x += xSpeed;
        y += ySpeed;
        if (x + 48 > window.innerWidth || x < 0) {
            xSpeed = -xSpeed;
        }
        if (y + 48 > window.innerHeight || y < 0) {
            ySpeed = -ySpeed;
        }
        letterBtn.style.left = x + "px";
        letterBtn.style.top = y + "px";
        requestAnimationFrame(animate);
    }
    animate();

    letterBtn.addEventListener("click", function(){
        if (letterBtn.textContent === "←") {
            inputVal = inputVal.slice(0, -1);
        }
        else {
            inputVal += letterBtn.textContent;
        }
        input.value = inputVal
    })
}

input.addEventListener("focus", function(){
    letters.classList.remove("hidden")
});

let timerInterval;

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        
        if (timer <= 0){
            display.textContent = "00" + ":" + "00";
            if(confirm("You failed 👎")){
                window.location.reload();  
            }
        }
        else {
            timer--;
        }
        
    }, 1000);
}

window.onload = function () {
    let duration = 60 * 3
    let display = document.getElementById("countdown");
    startTimer(duration, display);
};

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    let name = document.getElementById("name");
    name.innerHTML = inputVal;
    let overlay = document.getElementById("complete");
    overlay.style.display = "flex";
    clearInterval(timerInterval);
})