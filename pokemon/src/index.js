 let currentPage = 1;
 let pokemonsPerPage = 20;
 let totalPages = 0;
 let currentOffset = 0;
 let allTypes = [];
 let currentTypeFilter = '';

 const pokemonGrid = document.getElementById('pokemonGrid');
 const prevButton = document.getElementById('prevButton');
 const nextButton = document.getElementById('nextButton');
 const pageInfo = document.getElementById('pageInfo');
 const limitSelector = document.getElementById('limitSelector');
 const typeFilter = document.getElementById('typeFilter');
 const searchInput = document.getElementById('searchInput');
 const searchButton = document.getElementById('searchButton');
 const randomButton = document.getElementById('randomButton');
 const loadingIndicator = document.getElementById('loading');

 document.addEventListener('DOMContentLoaded', () => {
   fetchPokemonTypes();
   loadPokemons();

   prevButton.addEventListener('click', goToPreviousPage);
   nextButton.addEventListener('click', goToNextPage);
   limitSelector.addEventListener('change', changeLimit);
   typeFilter.addEventListener('change', filterByType);
   searchButton.addEventListener('click', searchPokemon);
   searchInput.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
       searchPokemon();
     }
   });
   randomButton.addEventListener('click', goToRandomPokemon);
 });

 async function fetchPokemonTypes() {
   try {
     const response = await fetch('https://pokeapi.co/api/v2/type');
     const data = await response.json();

     allTypes = data.results;

     allTypes.forEach(type => {
       const option = document.createElement('option');
       option.value = type.name;
       option.textContent = type.name.charAt(0).toUpperCase() + type.name.slice(1);
       typeFilter.appendChild(option);
     });
   } catch (error) {
     console.error('Erro ao carregar tipos:', error);
   }
 }

 async function loadPokemons() {
   try {
     showLoading(true);

     let url;
     if (currentTypeFilter) {
       url = `https://pokeapi.co/api/v2/type/${currentTypeFilter}`;
       const typeResponse = await fetch(url);
       const typeData = await typeResponse.json();

       const totalPokemon = typeData.pokemon.length;
       totalPages = Math.ceil(totalPokemon / pokemonsPerPage);

       const start = (currentPage - 1) * pokemonsPerPage;
       const end = Math.min(start + pokemonsPerPage, totalPokemon);

       const pokemonSlice = typeData.pokemon.slice(start, end);
       pokemonGrid.innerHTML = '';

       for (const item of pokemonSlice) {
         const pokemonData = await fetchPokemonData(item.pokemon.url);
         createPokemonCard(pokemonData);
       }
     } else {
       url = `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${pokemonsPerPage}`;
       const response = await fetch(url);
       const data = await response.json();

       totalPages = Math.ceil(data.count / pokemonsPerPage);

       pokemonGrid.innerHTML = '';
       for (const pokemon of data.results) {
         const pokemonData = await fetchPokemonData(pokemon.url);
         createPokemonCard(pokemonData);
       }
     }

     updatePaginationState();
   } catch (error) {
     console.error('Erro ao carregar pokémons:', error);
     pokemonGrid.innerHTML = '<p class="col-span-full text-center text-red-500">Erro ao carregar pokémons. Tente novamente mais tarde.</p>';
   } finally {
     showLoading(false);
   }
 }

 async function fetchPokemonData(url) {
   const response = await fetch(url);
   return await response.json();
 }

 function createPokemonCard(pokemon) {
   const card = document.createElement('div');
   card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform';
   card.setAttribute('data-id', pokemon.id);

   let bgColorClass = 'bg-gray-200';
   if (pokemon.types && pokemon.types.length > 0) {
     const primaryType = pokemon.types[0].type.name;
     switch (primaryType) {
       case 'fire': bgColorClass = 'bg-red-100'; break;
       case 'water': bgColorClass = 'bg-blue-100'; break;
       case 'grass': bgColorClass = 'bg-green-100'; break;
       case 'electric': bgColorClass = 'bg-yellow-100'; break;
       case 'ice': bgColorClass = 'bg-blue-50'; break;
       case 'fighting': bgColorClass = 'bg-red-200'; break;
       case 'poison': bgColorClass = 'bg-purple-100'; break;
       case 'ground': bgColorClass = 'bg-yellow-200'; break;
       case 'flying': bgColorClass = 'bg-indigo-100'; break;
       case 'psychic': bgColorClass = 'bg-pink-100'; break;
       case 'bug': bgColorClass = 'bg-green-200'; break;
       case 'rock': bgColorClass = 'bg-yellow-300'; break;
       case 'ghost': bgColorClass = 'bg-purple-200'; break;
       case 'dragon': bgColorClass = 'bg-indigo-200'; break;
       case 'dark': bgColorClass = 'bg-gray-700'; break;
       case 'steel': bgColorClass = 'bg-gray-300'; break;
       case 'fairy': bgColorClass = 'bg-pink-200'; break;
     }
   }

   const textColorClass = bgColorClass === 'bg-gray-700' ? 'text-white' : 'text-gray-800';

   card.innerHTML = `
             <div class="${bgColorClass} p-4 flex items-center justify-center">
                 <img src="${pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}"
                      alt="${pokemon.name}" class="h-32 w-32 object-contain">
             </div>
             <div class="p-4">
                 <div class="flex justify-between items-center mb-2">
                     <h3 class="text-lg font-bold ${textColorClass} capitalize">${pokemon.name.replace('-', ' ')}</h3>
                     <span class="text-gray-500 font-semibold">#${pokemon.id.toString().padStart(3, '0')}</span>
                 </div>
                 <div class="flex flex-wrap gap-1">
                     ${pokemon.types.map(type => `
                         <span class="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-800 capitalize">
                             ${type.type.name}
                         </span>
                     `).join('')}
                 </div>
             </div>
         `;

   card.addEventListener('click', () => {
     window.location.href = `pokemon-details.html?id=${pokemon.id}`;
   });

   pokemonGrid.appendChild(card);
 }

 function goToPreviousPage() {
   if (currentPage > 1) {
     currentPage--;
     currentOffset = (currentPage - 1) * pokemonsPerPage;
     loadPokemons();
   }
 }

 function goToNextPage() {
   if (currentPage < totalPages) {
     currentPage++;
     currentOffset = (currentPage - 1) * pokemonsPerPage;
     loadPokemons();
   }
 }

 function updatePaginationState() {
   pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;
   prevButton.disabled = currentPage <= 1;
   nextButton.disabled = currentPage >= totalPages;
 }

 function changeLimit() {
   pokemonsPerPage = parseInt(limitSelector.value);
   currentPage = 1;
   currentOffset = 0;
   loadPokemons();
 }

 function filterByType() {
   currentTypeFilter = typeFilter.value;
   currentPage = 1;
   currentOffset = 0;
   loadPokemons();
 }

 function searchPokemon() {
   const searchTerm = searchInput.value.trim().toLowerCase();
   if (searchTerm) {
     window.location.href = `pokemon-details.html?name=${searchTerm}`;
   }
 }

 function goToRandomPokemon() {
   const randomId = Math.floor(Math.random() * 898) + 1;
   window.location.href = `pokemon-details.html?id=${randomId}`;
 }

 function showLoading(show) {
   loadingIndicator.classList.toggle('hidden', !show);
   pokemonGrid.classList.toggle('hidden', show);
 }