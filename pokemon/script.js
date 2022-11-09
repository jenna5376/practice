const button = document.getElementById("random-pokemon");
const form = document.getElementById("pokemon-search");

const randomPokemon = {
    initialize: () => {
        randomPokemon.fetchPokemon();
    },
    fetchPokemon: () => {
      fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(response => {
            randomPokemonNum = Math.floor(Math.random() * response.count);
            fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonNum)
                .then(response => response.json())
                .then(data => {
                    console.log("Getting data about " + data.species.name);
                    console.log(data);
                    randomPokemon.randomImage(data.sprites.front_default);
                });
            })
        .catch(error => console.log(error));
    },
    randomImage: sprite => {
        document.getElementById('pokemon-image').src = sprite;
    }
}

function searchPokemon(){
    pokemonName = form.pokemon.value.trim()
    form.reset();
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then(response => response.json())
        .then(response => {
            console.log("Getting data about " + pokemonName);
            console.log(response)
            document.getElementById('pokemon-image').src = response.sprites.front_default;
        })
    .catch(error => console.log(error));
}

button.addEventListener("click", randomPokemon.initialize);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchPokemon();
});