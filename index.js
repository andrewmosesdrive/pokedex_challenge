const pokecontainer = document.getElementById("pokecontainer");
const pokemon_count = 150;

// $(".img-container").on("click", function(){
//     $(this).css({
//         width: function( index, value ) {
//               return parseFloat( value ) * 2;
//               },
//               height: function( index, value ) {
//                   return parseFloat( value ) * 2;
//               }
//     });
// });

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

const primary_attributes = Object.keys(colors);

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    // console.log(pokemon);
    createPokeEntry(pokemon);
};

fetchPokemon();

function createPokeEntry(pokemon) {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const poke_attributes = pokemon.types.map(element => element.type.name);

    const attributeSort = primary_attributes.find(type => poke_attributes.indexOf(type) > -1);

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    console.log(attributeSort)
    const color = colors[attributeSort];
    pokemonEl.style.backgroundColor = color;


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


