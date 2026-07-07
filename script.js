// Find the empty bracket container in our HTML where the match cards will be drawn
const bracketContainer = document.getElementById('bracket-container');

// =======================================================
// 1. DYNAMIC FETCH ENGINE (Reads from your custom JSON)
// =======================================================
function fetchRealLiveScores() {
    // We are fetching your standalone data file from your repository.
    // This bypasses CORS entirely and behaves exactly like a private backend API!
    const url = 'wc-data.json'; 
    
    fetch(url)
    .then(response => {
        // If you forgot to create the file or misspelled the name, this error catches it
        if (!response.ok) {
            throw new Error("Could not find your wc-data.json file.");
        }
        return response.json(); // Translate the JSON text into a live JavaScript array
    })
    .then(actualMatches => {
        // Feed the array directly into your UI renderer engine below
        renderBracket(actualMatches);
    })
    .catch(error => {
        console.error("API Fetch Error:", error);
        bracketContainer.innerHTML = `
            <div style="text-align:center; color:#ef4444; padding: 1rem;">
                <p>❌ Failed to load match data feed.</p>
                <small>Make sure you have created your <strong>wc-data.json</strong> file in the exact same folder!</small>
            </div>
        `;
    });
}

// =======================================================
// 2. UI RENDERING ENGINE (Draws the cards onto the screen)
// =======================================================
function renderBracket(matches) {
    bracketContainer.innerHTML = ""; // Wipe out the loading placeholder text

    // Safety check: if the file is completely empty, let the visitor know
    if (!matches || matches.length === 0) {
        bracketContainer.innerHTML = "<p style='text-align:center; color:#666;'>No matches found in your database!</p>";
        return;
    }

    // Loop through your matches array and dynamically build the HTML cards
    matches.forEach(match => {
        // Read properties cleanly from your custom JSON layout
        const homeTeamName = match.team1;
        const awayTeamName = match.team2;
        
        // Show actual scores if the match is live or finished; otherwise show a placeholder dash (-)
        const homeScore = match.status !== "Upcoming" ? match.team1Score : "-";
        const awayScore = match.status !== "Upcoming" ? match.team2Score : "-";
        
        // Dynamic UI Enhancements: Check if a match is actively live right now
        const isLive = match.status === "Live";
        const cardClass = isLive ? "match-card live" : "match-card";
        const badgeClass = isLive ? "match-badge live-badge" : "match-badge";
        const badgeText = isLive ? "🔴 LIVE NOW" : match.status;

        // Apply custom green highlights to text if a winner is specified (1 for home, 2 for away)
        const winner1Class = match.winner === 1 ? "winner" : "";
        const winner2Class = match.winner === 2 ? "winner" : "";

        // Assemble the HTML template string
        const matchHTML = `
            <div class="${cardClass}">
                <div class="${badgeClass}">${badgeText}</div>
                
                <div class="team-row ${winner1Class}">
                    <span>${homeTeamName}</span>
                    <span>${homeScore}</span>
                </div>
                
                <div class="vs">vs</div>
                
                <div class="team-row ${winner2Class}">
                    <span>${awayTeamName}</span>
                    <span>${awayScore}</span>
                </div>
                
                <div class="venue-info">${match.stage} • ${match.venue}</div>
            </div>
        `;
        
        // Inject the newly generated card straight into the live page container
        bracketContainer.innerHTML += matchHTML;
    });
}

// Kick off the script immediately when the browser loads the page!
fetchRealLiveScores();


// ==========================================
// 3. INTERACTIVE MAGIC MESSAGE ENGINE
// ==========================================
const magicButton = document.getElementById('magic-btn');
const magicMessage = document.getElementById('magic-message');

const messages = [
    "🎉 Brilliant choice! Your site is now powered by a stable, clean custom JSON database architecture.",
    "🚀 Fun Fact: By separating your data from your display logic, you are practicing true modern software architecture patterns!",
    "🌟 You are officially an architecture-driven web developer!"
];

magicButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    magicMessage.textContent = messages[randomIndex];
    magicMessage.style.display = 'block';
});
