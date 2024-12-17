// Function to fetch song suggestions from the API
async function getSuggestions() {
    const searchQuery = document.getElementById('search-input').value.trim();
    const suggestionsContainer = document.getElementById('suggestions-container');
    const errorMessage = document.getElementById('error-message');
    const lyricsContainer = document.getElementById('lyrics-container');
    const lyricsContent = document.getElementById('lyrics-content');

    // Clear previous suggestions and error messages
    suggestionsContainer.innerHTML = '';
    errorMessage.textContent = '';
    lyricsContainer.style.display = 'none';  // Hide lyrics box initially
    lyricsContent.textContent = '';  // Clear any previous lyrics

    if (!searchQuery) {
        errorMessage.textContent = 'Please enter a search term.';
        return;
    }

    try {
        // Fetch song suggestions from the API
        const response = await fetch(`https://api.lyrics.ovh/suggest/${searchQuery}`);
        const data = await response.json();

        if (data.error) {
            throw new Error('No suggestions found.');
        }

        const songs = data.data;

        if (songs.length > 0) {
            // Display suggestions
            suggestionsContainer.style.display = 'block'; // Show suggestions
            songs.forEach(song => {
                const songItem = document.createElement('div');
                songItem.classList.add('suggestion-item');
                songItem.innerHTML = `${song.artist.name} - ${song.title}`;
                
                // Create a button to fetch lyrics for the selected song
                const lyricsButton = document.createElement('button');
                lyricsButton.textContent = 'Get Lyrics';
                lyricsButton.onclick = () => showLyrics(song.artist.name, song.title);
                
                // Append the button to the suggestion item
                songItem.appendChild(lyricsButton);

                // Append the suggestion item to the suggestions container
                suggestionsContainer.appendChild(songItem);
            });
        } else {
            errorMessage.textContent = 'No songs found.';
        }
    } catch (error) {
        errorMessage.textContent = 'Error: ' + error.message;
    }
}

// Function to fetch lyrics for a selected song
async function showLyrics(artist, title) {
    const lyricsContainer = document.getElementById('lyrics-container');
    const lyricsContent = document.getElementById('lyrics-content');
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message or lyrics
    errorMessage.textContent = '';
    lyricsContent.textContent = 'Loading lyrics...';
    lyricsContainer.style.display = 'block';  // Show the lyrics box

    try {
        // Fetch lyrics from the API
        const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
        const data = await response.json();

        if (data.lyrics) {
            // Display artist and song title in bold, followed by the lyrics
            lyricsContent.innerHTML = `
                <div class="song-info">${artist} - ${title}</div>
                <pre>${data.lyrics}</pre>
            `;
        } else {
            errorMessage.textContent = 'Lyrics not found for this song.';
        }
    } catch (error) {
        errorMessage.textContent = 'Error: ' + error.message;
    }
}
