document.addEventListener('DOMContentLoaded', () => {
  // ポケモン名を指定（例：ピカチュウ）
  const pokemonName = 'pikachu';

  // ポケモンデータを取得する関数
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

  // 取得したデータを表示する関数
  function displayPokemonData(data) {
      const nameElement = document.getElementById('name');
      const imageElement = document.getElementById('image');
      const typeElement = document.getElementById('type');

      nameElement.textContent = data.name.toUpperCase();
      imageElement.src = data.sprites.front_default;
      typeElement.textContent = 'Type: ' + data.types.map(typeInfo => typeInfo.type.name).join(', ');
  }

  // ポケモンデータの取得を実行
  fetchPokemonData(pokemonName);
});