const pokecontainer = document.getElementById("pokecontainer");
const pokemon_count = 150;

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count.length; i++) {
        await getPokemon;
    }
}

const getPokemon = async id => {
    const url = `https:/pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(url);
    const pokemon = await result.json();
    console.log(pokemon);
};
console.log(1)
const
