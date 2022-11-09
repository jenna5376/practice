button = document.getElementById("random-dog");
button.addEventListener("click", (e) => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(response => {
            document.getElementById('dog-image').src = response.message;
        })
        .catch(error => console.log(error));
})