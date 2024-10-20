document.getElementById('searchButton').addEventListener('click', function() {
    const username = document.getElementById('userInput').value;
    const apiKey = 'YOUR_API_KEY'; // Reemplaza con tu clave de API
    const apiToken = 'YOUR_API_TOKEN'; // Reemplaza con el token de sesión del usuario
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=${encodeURIComponent(username)}&api_key=${apiKey}&api_sig=${generateApiSig(apiToken)}&format=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.topartists && data.topartists.artist) {
                displayTopArtists(data.topartists.artist);
            } else {
                document.getElementById('artistList').innerHTML = 'No top artists found or error occurred.';
            }
        })
        .catch(error => {
            console.error('Error fetching top artists:', error);
            document.getElementById('artistList').innerHTML = 'An error occurred.';
        });
});

function displayTopArtists(artists) {
    const artistList = document.getElementById('artistList');
    artistList.innerHTML = ''; // Clear previous results

    artists.forEach(artist => {
        const artistItem = document.createElement('li');
        artistItem.className = 'artist-item';
        artistItem.innerHTML = `
            <img src="${artist.image[2]['#text']}" alt="${artist.name}">
            <h2>${artist.name}</h2>
            <p>Playcount: ${artist.playcount}</p>
        `;
        artistList.appendChild(artistItem);
    });
}

// Function to generate API signature (for OAuth authentication)
function generateApiSig(token) {
    // Generate a signature string based on API documentation
    // This is a simplified example. In a real scenario, you would hash and sign the request parameters
    return ''; // Replace with actual signature logic
}
