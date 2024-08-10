document.addEventListener('DOMContentLoaded', () => {

  const pokemonName = 'pikachu';

  function fetchPokemonData(name) {
      const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              displayPokemonData(data);
          })
          .catch(error => {
              console.error('There has been a problem with your fetch operation:', error);
          });
  }

  function displayPokemonData(data) {
      const nameElement = document.getElementById('name');
      const imageElement = document.getElementById('image');
      const typeElement = document.getElementById('type');

      nameElement.textContent = data.name.toUpperCase();
      imageElement.src = data.sprites.front_default;
      typeElement.textContent = 'Type: ' + data.types.map(typeInfo => typeInfo.type.name).join(', ');
  }

  fetchPokemonData(pokemonName);
});