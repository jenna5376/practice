const image = document.getElementById("image");
const char = document.getElementById("name")
const scoreText = document.getElementById("score")
const win = document.getElementById("win")

const alive = document.getElementById("alive")
const dead = document.getElementById("dead")
const unknown = document.getElementById("unknown")

let charStatus = "";
let score = 0;
let randomNum = Math.floor(Math.random() * 826);

function randomChar(){
    fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
    .then(response => response.json())
    .then(response => {
        char.innerHTML = response.name;
        image.src = response.image;
        charStatus = response.status;
    })
    .catch(error => console.log(error));
}

randomChar();

alive.addEventListener("click", (e) => {
    if (charStatus == "Alive"){
        score ++;
        correctAnswer()
    }
    else{
        score --;
        wrongAnswer()
    }
    updateScore(score)
    randomChar();
})

dead.addEventListener("click", (e) => {
    if (charStatus == "Dead"){
        score ++;
        correctAnswer()
    }
    else{
        score --;
        wrongAnswer()
    }
    updateScore(score)
    randomChar();
})

unknown.addEventListener("click", (e) => {
    if (charStatus == "unknown"){
        score ++;
        correctAnswer()
    }
    else{
        score --;
        wrongAnswer()
    }
    updateScore(score)
    randomChar();
})

function updateScore(score){
    scoreText.innerHTML = score;
    if (score >= 10){
        win.classList.remove("hide")
    }
}

function correctAnswer(){
    document.body.style.backgroundColor = "#B2E797";
}

function wrongAnswer(){
    document.body.style.backgroundColor = "#F98585";
}