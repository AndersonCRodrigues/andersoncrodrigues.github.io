const loadingIndicator = document.getElementById('loading');
const pokemonDetails = document.getElementById('pokemonDetails');
const errorMessage = document.getElementById('errorMessage');
const prevPokemonButton = document.getElementById('prevPokemon');
const nextPokemonButton = document.getElementById('nextPokemon');
const playCryButton = document.getElementById('playCry');
const pokemonCryAudio = document.getElementById('pokemonCry');

let currentPokemonId = null;

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonId = urlParams.get('id');
  const pokemonName = urlParams.get('name');

  if (pokemonId) {
    await loadPokemonDetails(pokemonId);
  } else if (pokemonName) {
    await loadPokemonDetailsByName(pokemonName);
  } else {
    showError();
  }

  prevPokemonButton.addEventListener('click', goToPreviousPokemon);
  nextPokemonButton.addEventListener('click', goToNextPokemon);
  playCryButton.addEventListener('click', playPokemonCry);
});

async function loadPokemonDetails(id) {
  try {
    showLoading(true);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error('Pokémon não encontrado');
    }

    const pokemon = await response.json();
    currentPokemonId = pokemon.id;

    displayPokemonDetails(pokemon);
    await loadPokemonSpeciesInfo(pokemon.species.url);
    updateNavigationButtons();

    showLoading(false);
  } catch (error) {
    console.error('Erro ao carregar detalhes:', error);
    showError();
  }
}

async function loadPokemonDetailsByName(name) {
  try {
    showLoading(true);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

    if (!response.ok) {
      throw new Error('Pokémon não encontrado');
    }

    const pokemon = await response.json();
    currentPokemonId = pokemon.id;

    displayPokemonDetails(pokemon);
    await loadPokemonSpeciesInfo(pokemon.species.url);
    updateNavigationButtons();

    showLoading(false);
  } catch (error) {
    console.error('Erro ao carregar detalhes:', error);
    showError();
  }
}

async function loadPokemonSpeciesInfo(url) {
  try {
    const response = await fetch(url);
    const speciesData = await response.json();


  } catch (error) {
    console.error('Erro ao carregar informações da espécie:', error);
  }
}

function displayPokemonDetails(pokemon) {
  document.title = `PokéExplorer - ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;

  document.getElementById('pokemonName').textContent = pokemon.name.replace('-', ' ');
  document.getElementById('pokemonNumber').textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
  document.getElementById('pokemonHeight').textContent = `${(pokemon.height / 10).toFixed(1)} m`;
  document.getElementById('pokemonWeight').textContent = `${(pokemon.weight / 10).toFixed(1)} kg`;

  const mainImage = pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;
  document.getElementById('pokemonImage').src = mainImage;
  document.getElementById('pokemonImage').alt = pokemon.name;

  const typesContainer = document.getElementById('pokemonTypes');
  typesContainer.innerHTML = '';

  pokemon.types.forEach(typeInfo => {
    const typeElement = document.createElement('span');
    const typeName = typeInfo.type.name;

    let bgColorClass = 'bg-gray-200';
    let textColorClass = 'text-gray-800';

    switch (typeName) {
      case 'fire':
        bgColorClass = 'bg-red-500';
        textColorClass = 'text-white';
        break;
      case 'water':
        bgColorClass = 'bg-blue-500';
        textColorClass = 'text-white';
        break;
      case 'grass':
        bgColorClass = 'bg-green-500';
        textColorClass = 'text-white';
        break;
      case 'electric':
        bgColorClass = 'bg-yellow-400';
        textColorClass = 'text-gray-800';
        break;
      case 'ice':
        bgColorClass = 'bg-blue-200';
        textColorClass = 'text-gray-800';
        break;
      case 'fighting':
        bgColorClass = 'bg-red-700';
        textColorClass = 'text-white';
        break;
      case 'poison':
        bgColorClass = 'bg-purple-500';
        textColorClass = 'text-white';
        break;
      case 'ground':
        bgColorClass = 'bg-yellow-600';
        textColorClass = 'text-white';
        break;
      case 'flying':
        bgColorClass = 'bg-indigo-400';
        textColorClass = 'text-white';
        break;
      case 'psychic':
        bgColorClass = 'bg-pink-500';
        textColorClass = 'text-white';
        break;
      case 'bug':
        bgColorClass = 'bg-green-600';
        textColorClass = 'text-white';
        break;
      case 'rock':
        bgColorClass = 'bg-yellow-800';
        textColorClass = 'text-white';
        break;
      case 'ghost':
        bgColorClass = 'bg-purple-700';
        textColorClass = 'text-white';
        break;
      case 'dragon':
        bgColorClass = 'bg-indigo-600';
        textColorClass = 'text-white';
        break;
      case 'dark':
        bgColorClass = 'bg-gray-800';
        textColorClass = 'text-white';
        break;
      case 'steel':
        bgColorClass = 'bg-gray-400';
        textColorClass = 'text-gray-800';
        break;
      case 'fairy':
        bgColorClass = 'bg-pink-300';
        textColorClass = 'text-gray-800';
        break;
      case 'normal':
        bgColorClass = 'bg-gray-300';
        textColorClass = 'text-gray-800';
        break;
    }

    typeElement.className = `px-4 py-1 rounded-full ${bgColorClass} ${textColorClass} text-sm font-semibold capitalize`;
    typeElement.textContent = typeName;
    typesContainer.appendChild(typeElement);
  });

  const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase().replace('-', '')}.mp3`;
  pokemonCryAudio.src = cryUrl;

  const abilitiesContainer = document.getElementById('pokemonAbilities');
  abilitiesContainer.innerHTML = '';

  pokemon.abilities.forEach(async (abilityInfo) => {
    const abilityCard = document.createElement('div');
    abilityCard.className = 'bg-gray-50 p-4 rounded-lg shadow';

    // Obter os detalhes da habilidade para a descrição
    const abilityResponse = await fetch(abilityInfo.ability.url);
    const abilityData = await abilityResponse.json();

    let description = '';
    const ptBrEntry = abilityData.flavor_text_entries.find(entry => entry.language.name === 'pt-br');
    const enEntry = abilityData.flavor_text_entries.find(entry => entry.language.name === 'en');

    if (ptBrEntry) {
      description = ptBrEntry.flavor_text;
    } else if (enEntry) {
      description = enEntry.flavor_text;
    } else if (abilityData.flavor_text_entries.length > 0) {
      description = abilityData.flavor_text_entries[0].flavor_text;
    }

    const isHidden = abilityInfo.is_hidden;

    abilityCard.innerHTML = `
                <h3 class="font-bold text-lg capitalize">${abilityInfo.ability.name.replace('-', ' ')}</h3>
                ${isHidden ? '<span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">Habilidade Oculta</span>' : ''}
                <p class="mt-2 text-gray-600">${description || 'Descrição não disponível'}</p>
            `;

    abilitiesContainer.appendChild(abilityCard);
  });

  displaySprites(pokemon.sprites);

  const statsContainer = document.getElementById('pokemonStats');
  statsContainer.innerHTML = '';

  const statNames = {
    'hp': 'HP',
    'attack': 'Ataque',
    'defense': 'Defesa',
    'special-attack': 'Ataque Especial',
    'special-defense': 'Defesa Especial',
    'speed': 'Velocidade'
  };

  const statColors = {
    'hp': 'bg-red-500',
    'attack': 'bg-orange-500',
    'defense': 'bg-yellow-500',
    'special-attack': 'bg-blue-500',
    'special-defense': 'bg-green-500',
    'speed': 'bg-pink-500'
  };

  pokemon.stats.forEach(stat => {
    const statElement = document.createElement('div');
    const statName = stat.stat.name;
    const statValue = stat.base_stat;
    const maxStatValue = 255;
    const percentage = Math.min(100, Math.floor((statValue / maxStatValue) * 100));

    statElement.innerHTML = `
                <div class="flex justify-between items-center mb-1">
                    <span class="font-semibold">${statNames[statName] || statName}</span>
                    <span class="font-bold">${statValue}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="${statColors[statName] || 'bg-gray-500'} h-2.5 rounded-full" style="width: ${percentage}%"></div>
                </div>
            `;

    statsContainer.appendChild(statElement);
  });

  pokemonDetails.classList.remove('hidden');
}

function displaySprites(sprites) {
  const standardSpritesContainer = document.getElementById('standardSprites');
  const shinySpritesContainer = document.getElementById('shinySprites');
  const otherArtworkContainer = document.getElementById('otherArtwork');

  standardSpritesContainer.innerHTML = '';
  shinySpritesContainer.innerHTML = '';
  otherArtworkContainer.innerHTML = '';

  const standardSprites = [
    { img: sprites.front_default, label: 'Frente (Padrão)' },
    { img: sprites.back_default, label: 'Costas (Padrão)' },
    { img: sprites.front_female, label: 'Frente (Fêmea)' },
    { img: sprites.back_female, label: 'Costas (Fêmea)' }
  ];

  const shinySprites = [
    { img: sprites.front_shiny, label: 'Frente (Shiny)' },
    { img: sprites.back_shiny, label: 'Costas (Shiny)' },
    { img: sprites.front_shiny_female, label: 'Frente (Shiny Fêmea)' },
    { img: sprites.back_shiny_female, label: 'Costas (Shiny Fêmea)' }
  ];

  standardSprites.forEach(sprite => {
    if (sprite.img) {
      const spriteCard = createSpriteCard(sprite.img, sprite.label);
      standardSpritesContainer.appendChild(spriteCard);
    }
  });

  shinySprites.forEach(sprite => {
    if (sprite.img) {
      const spriteCard = createSpriteCard(sprite.img, sprite.label);
      shinySpritesContainer.appendChild(spriteCard);
    }
  });

  if (sprites.other) {
    if (sprites.other['official-artwork']) {
      if (sprites.other['official-artwork'].front_default) {
        const artCard = createSpriteCard(sprites.other['official-artwork'].front_default, 'Arte Oficial');
        otherArtworkContainer.appendChild(artCard);
      }
      if (sprites.other['official-artwork'].front_shiny) {
        const artCard = createSpriteCard(sprites.other['official-artwork'].front_shiny, 'Arte Oficial (Shiny)');
        otherArtworkContainer.appendChild(artCard);
      }
    }

    if (sprites.other.dream_world && sprites.other.dream_world.front_default) {
      const artCard = createSpriteCard(sprites.other.dream_world.front_default, 'Dream World');
      otherArtworkContainer.appendChild(artCard);
    }

    if (sprites.other.home) {
      if (sprites.other.home.front_default) {
        const artCard = createSpriteCard(sprites.other.home.front_default, 'Home');
        otherArtworkContainer.appendChild(artCard);
      }
      if (sprites.other.home.front_shiny) {
        const artCard = createSpriteCard(sprites.other.home.front_shiny, 'Home (Shiny)');
        otherArtworkContainer.appendChild(artCard);
      }
    }
  }
}

function createSpriteCard(imageUrl, label) {
  const card = document.createElement('div');
  card.className = 'bg-white p-2 rounded-lg shadow-md flex flex-col items-center';

  card.innerHTML = `
            <div class="bg-gray-100 p-2 rounded-lg w-full flex justify-center items-center h-32">
                <img src="${imageUrl}" alt="${label}" class="max-h-full">
            </div>
            <span class="mt-2 text-sm text-center">${label}</span>
        `;

  return card;
}

function playPokemonCry() {
  pokemonCryAudio.play().catch(error => {
    console.error('Erro ao reproduzir som:', error);
    alert('Não foi possível reproduzir o som do Pokémon. O som pode não estar disponível.');
  });
}

function updateNavigationButtons() {
  prevPokemonButton.disabled = currentPokemonId <= 1;
  nextPokemonButton.disabled = currentPokemonId >= 898;
}

function goToPreviousPokemon() {
  if (currentPokemonId > 1) {
    window.location.href = `pokemon-details.html?id=${currentPokemonId - 1}`;
  }
}

function goToNextPokemon() {
  if (currentPokemonId < 898) {
    window.location.href = `pokemon-details.html?id=${currentPokemonId + 1}`;
  }
}

function showLoading(show) {
  loadingIndicator.classList.toggle('hidden', !show);
  pokemonDetails.classList.toggle('hidden', show);
  errorMessage.classList.add('hidden');
}

function showError() {
  loadingIndicator.classList.add('hidden');
  pokemonDetails.classList.add('hidden');
  errorMessage.classList.remove('hidden');
}