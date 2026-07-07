const bracketContainer = document.getElementById('bracket-container');

// =======================================================
// THE AUTHENTIC EXTERNAL LIVE API FETCH
// =======================================================
function fetchRealLiveScores() {
    // 1. Replace this with your actual endpoint URL from your chosen provider
    const url = 'https://v3.football.api-sports.io/fixtures?league=1&season=2026';
    
    // 2. Put your real API key here after signing up for a free developer account
    const mySecretApiKey = 'YOUR_FREE_API_KEY_HERE';

    // 3. Make the fetch request passing your credentials in the headers
    fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': mySecretApiKey,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not connect to the live sports database.");
        }
        return response.json(); // Convert response text to clean JS arrays
    })
    .then(apiData => {
        // 4. Extract the exact array from the API response structure 
        // (Real APIs wrap data inside properties like .response or .results)
        const liveMatchesArray = apiData.response; 
        
        // 5. Run your renderer engine to instantly draw the live data onto the web!
        renderBracket(liveMatchesArray);
    })
    .catch(error => {
        console.error("API Error:", error);
        bracketContainer.innerHTML = "<p style='text-align:center; color:red;'>❌ Failed to load live match stream.</p>";
    });
}

function renderBracket(matches) {
    bracketContainer.innerHTML = ""; // Clear loader text
    
    // Check if data came back empty
    if(!matches || matches.length === 0) {
        bracketContainer.innerHTML = "<p>No matches found for this stage.</p>";
        return;
    }

    matches.forEach(match => {
        // NOTE: Real API structures look slightly different than our custom ones.
        // They nest info inside objects like match.teams.home and match.goals.home!
        const team1Name = match.teams.home.name;
        const team2Name = match.teams.away.name;
        const score1 = match.goals.home ?? 0;
        const score2 = match.goals.away ?? 0;
        const isLive = match.fixture.status.short === "1H" || match.fixture.status.short === "2H" ? "live" : "";
        const badgeText = isLive ? "🔴 LIVE NOW" : "Knockout Stage";

        const matchHTML = `
            <div class="match-card ${isLive}">
                <div class="match-badge ${isLive ? 'live-badge' : ''}">${badgeText}</div>
                <div class="team-row">
                    <span>${team1Name}</span> <span>${score1}</span>
                </div>
                <div class="vs">vs</div>
                <div class="team-row">
                    <span>${team2Name}</span> <span>${score2}</span>
                </div>
                <div class="venue-info">${match.fixture.venue.name}</div>
            </div>
        `;
        bracketContainer.innerHTML += matchHTML;
    });
}

// Fire up the live tracker feed
fetchRealLiveScores();
