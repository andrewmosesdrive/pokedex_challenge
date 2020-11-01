const pokecontainer = document.getElementById("pokecontainer");
const pokemon_count = 150;

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokeEntry(pokemon);
};

fetchPokemon();

function createPokeEntry(pokemon) {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const pokeInnerHTML = `${pokemon.id}`

    pokemonEl.innerHTML = pokeInnerHTML;

    pokecontainer.appendChild(pokemonEl)
}


