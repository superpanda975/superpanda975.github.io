const bracketContainer = document.getElementById('bracket-container');

// =======================================================
// REAL WORLD CUP & LIVE FOOTBALL DATA FETCH ENGINE
// =======================================================
function fetchRealLiveScores() {
    // This is the endpoint address for scheduled global matches
    const url = 'https://api.football-data.org/v4/matches';
    
    // Authenticating your secure request using your brand new API key
    fetch(url, {
        method: 'GET',
        headers: {
            'X-Auth-Token': 'cccf93ef9ced4a7b8cc4ac012fe30dfa'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json(); // Map data to objects
    })
    .then(apiData => {
        // football-data.org packages all match objects inside an array called .matches
        const actualMatches = apiData.matches; 
        
        // Feed the matches array into your UI display engine
        renderBracket(actualMatches);
    })
    .catch(error => {
        console.error("API Fetch Error:", error);
        bracketContainer.innerHTML = `
            <div style="text-align:center; color:#ef4444; padding: 1rem;">
                <p>❌ Failed to fetch live server data.</p>
                <small>Tip: Browser privacy extensions can sometimes block external cross-site API requests on local setups!</small>
            </div>
        `;
    });
}

// =======================================================
// UI RENDERING ENGINE (Bespoke layout mapping for football-data.org v4)
// =======================================================
function renderBracket(matches) {
    bracketContainer.innerHTML = ""; // Wipe loading text

    if (!matches || matches.length === 0) {
        bracketContainer.innerHTML = "<p style='text-align:center; color:#666;'>No matches scheduled for today!</p>";
        return;
    }

    // Limit to the first 8 matches to create a clean display grid
    const displayLimit = matches.slice(0, 8);

    displayLimit.forEach(match => {
        // Map data paths precisely to match football-data.org layout rules
        const homeTeamName = match.homeTeam.name;
        const homeTeamCrest = match.homeTeam.crest;
        const awayTeamName = match.awayTeam.name;
        const awayTeamCrest = match.awayTeam.crest;
        
        // Handle logic for checking scores safely
        const homeScore = match.score.fullTime.home !== null ? match.score.fullTime.home : "-";
        const awayScore = match.score.fullTime.away !== null ? match.score.fullTime.away : "-";
        
        // Detect match statuses (IN_PLAY means live!)
        const isLive = match.status === "IN_PLAY" || match.status === "PAUSED";
        const cardClass = isLive ? "match-card live" : "match-card";
        const badgeClass = isLive ? "match-badge live-badge" : "match-badge";
        const badgeText = isLive ? "🔴 LIVE NOW" : match.status;

        const matchHTML = `
            <div class="${cardClass}">
                <div class="${badgeClass}">${badgeText}</div>
                
                <div class="team-row">
                    <div class="team-name-group">
                        <img src="${homeTeamCrest}" class="team-crest" alt="">
                        <span>${homeTeamName}</span>
                    </div>
                    <span>${homeScore}</span>
                </div>
                
                <div class="vs">vs</div>
                
                <div class="team-row">
                    <div class="team-name-group">
                        <img src="${awayTeamCrest}" class="team-crest" alt="">
                        <span>${awayTeamName}</span>
                    </div>
                    <span>${awayScore}</span>
                </div>
                
                <div class="venue-info">${match.competition.name}</div>
            </div>
        `;
        
        bracketContainer.innerHTML += matchHTML;
    });
}

// Trigger data fetching engine instantly on execution
fetchRealLiveScores();


// ==========================================
// MAGIC MESSAGE ENGINE
// ==========================================
const magicButton = document.getElementById('magic-btn');
const magicMessage = document.getElementById('magic-message');

const messages = [
    "🎉 Awesome job! Your API tracker is live using an authentic server authentication token!",
    "🚀 Fun Fact: Football-data.org aggregates matchups across 12 massive international leagues completely in the background!",
    "🌟 You are officially an API-Driven Full-Stack Web Developer!"
];

magicButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    magicMessage.textContent = messages[randomIndex];
    magicMessage.style.display = 'block';
});
