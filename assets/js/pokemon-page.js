const pokemonNumber = sessionStorage.getItem('pokemonNumber')
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`

pokeApi.getPokemonDetails(url)
    .then((pokemon) => console.log(pokemon))
