const pokemonNumber = sessionStorage.getItem('pokemonNumber')
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
const pokemonStats = document.getElementById('pokemonStats')

pokeApi.getPokemonDetails(url)
    .then((pokemon) => {
        let pokeHtml = `
            <div class="${pokemon.type}" id="header">
                <div id="back"><a href="javascript:history.back()">Voltar</a></div>
                <span id="name">${pokemon.name}</span>
                <span id="number">#${pokemon.number}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                            .map((type) => `<li class="type ${type}">${type}</li>`)
                            .join('')}
                    </ol>
                    <img src="${pokemon.sprites[2]}" alt="${pokemon.name}">
                </div>
            </div>
            <div id="stats">
                <p>Weight: ${pokemon.weight}kg</p>
                <p>Height: ${pokemon.height}m</p>
                <div>
                    Abilities:
                    <ol>
                        ${pokemon.abilities
                            .map((ability) => `<li>${ability}</li>`)
                            .join('')}
                    </ol>
                </div>
            </div>`

        pokemonStats.innerHTML = pokeHtml
        console.log(pokemon)
    })
