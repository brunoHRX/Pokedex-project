const pokemonListSelection = document.querySelectorAll('.pokemon')
const pokemonsCards = document.querySelectorAll('.pokemon-card')

pokemonListSelection.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    // remove a classe aberto de todos os cards dos pokemons
    pokemonsCards.forEach(pokemonCard => pokemonCard.classList.remove('open'))

    // pegar o id do pokemon Selecionado que foi clicado pelo usuário
    const selectionedPokemonId = pokemon.attributes.id.value

    // ao clicar em um pokemonSelecionado da lista pegamos o id desse pokemonSelecionado pra saber qual card de pokemonSelecionado abrir
    const pokemonCardIdForOpen = selectionedPokemonId + '-card'

    const pokemonCardForOpen = document.getElementById(pokemonCardIdForOpen)

    pokemonCardForOpen.classList.add('open')

    // remover a classe ativa que marca o pokemon selecionado
    pokemonListSelection.forEach(pokemonSelecionado =>
      pokemonSelecionado.classList.remove('active')
    )

    // adicianr a classe no pokemon selecionado
    const SlectionedPokemon = document.getElementById(selectionedPokemonId)
    SlectionedPokemon.classList.add('active')
  })
})
