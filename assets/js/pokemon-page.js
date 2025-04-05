const pokemonNumber = sessionStorage.getItem('pokemonNumber')
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
const pokemonStats = document.getElementById('pokemonStats')

pokeApi.getPokemonDetails(url)
    .then((pokemon) => {
        let pokeHtml = `
            <div class="${pokemon.type}" id="header">
                <a href="#">Voltar</a>
                <h1>${pokemon.name}</h1><span>#${pokemon.number}</span>
                <p>${pokemon.types}</p>
                <div class="pokemon detail">
                    <img src="${pokemon.sprites[2]}" alt="${pokemon.name}">
                </div>
            </div>
            <div id="stats">
                <p>Weight: ${pokemon.weight}kg</p>
                <p>Height: ${pokemon.height}m</p>
                <p>Abilities: ${pokemon.abilities}</p>
            </div>`

        pokemonStats.innerHTML = pokeHtml
        console.log(pokemon)
    })
