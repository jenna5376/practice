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
    letters.appendChild(letterBtn)

    let x = getRandomXY(window.innerWidth);
    let y = getRandomXY(window.innerHeight)
    let xSpeed = getRandomInt(8, 2);
    let ySpeed = getRandomInt(8, 2);

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