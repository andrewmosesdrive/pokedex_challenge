const pokecontainer = document.getElementById("pokecontainer");
const pokemon_count = 150;

// pokemon color scheme created by @florinpop17
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

// set keys to primary attribute distribution 
const primary_attributes = Object.keys(colors);

// loop through pokemon array
const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

// function to get pokemon by id using api url, then pass json return through new entry function
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    // console.log(pokemon);
    createPokeEntry(pokemon);
};

// call looping function
fetchPokemon();

// dynamically create pokemon entries
function createPokeEntry(pokemon) {
    const pokemonEl = document.createElement("div");
    // add class="pokemon" to all newly created divs
    pokemonEl.classList.add("pokemon");

    // map through attributes to be sorted
    const poke_attributes = pokemon.types.map(element => element.type.name);

    // sort attributes using find method to be called by index on page
    const attributeSort = primary_attributes.find(type => poke_attributes.indexOf(type) > -1);

    // initiate name variable to return with the first letter capitalized
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    // console.log(attributeSort)

    // pull colors created in colors array by sorted attributes above
    const color = colors[attributeSort];
    // change background color of dynamically created card according to pokemon type
    pokemonEl.style.backgroundColor = color;

    // dynamically created card structure; pulls from api for given values
    const pokeInnerHTML = `
          <div class="img-container">
          <img src="${pokemon.sprites.front_default}"</div> 
            <div><span>#${pokemon.id}</span>
            <h5 class="card-title">${name}</h5>   
            <h6>Type: ${attributeSort}</h6>
            </div>
            </div>
        `

    pokemonEl.innerHTML = pokeInnerHTML;

    pokecontainer.appendChild(pokemonEl)
}


