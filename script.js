function displayRandomPoke() {
    const randomPokemonId = Math.floor(Math.random() * 807) + 1; 
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;
    const imageElement = document.getElementById('image');
    imageElement.classList.add('hidden');
    fetch(pokeURL)
    .then(response => response.json())
    .then(data => {
        const idElement = document.getElementById('id');
        const nameElement = document.getElementById('name');
        const typesElement = document.getElementById('types');
        
        idElement.textContent = `ID: ${data.id}`;
        nameElement.textContent = `Name: ${data.name}`;
        const types = data.types.map(type => type.type.name).join(', ');
        typesElement.textContent = `Types: ${types}`;
        
        const imageUrl = data.sprites.front_default;
        imageElement.src = imageUrl;
        imageElement.alt = data.name; 
        imageElement.classList.remove('hidden'); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function displayRandomCat() {
    const catImageElement = document.getElementById('catImage');
    catImageElement.classList.add('hidden');
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        const catImageUrl = data[0].url;
        catImageElement.src = catImageUrl;
        catImageElement.alt = 'Random Cat Image';
        catImageElement.classList.remove('hidden'); 
    })
    .catch(error => {
        console.error('Error fetching cat image:', error);
    });
}

document.getElementById('randomButton').addEventListener('click', displayRandomPoke);
document.getElementById('randomCatButton').addEventListener('click', displayRandomCat);