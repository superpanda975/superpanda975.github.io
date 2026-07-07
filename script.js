// Step 1: Find the elements on the page using their unique IDs
const magicButton = document.getElementById('magic-btn');
const magicMessage = document.getElementById('magic-message');

// Step 2: Create an array of fun messages to cycle through (Now updated with World Cup Hype!)
const messages = [
    "🎉 Look at you go! You just ran your first JavaScript function!",
    "🏆 Fun Fact: The 2026 World Cup is the largest ever, with 48 teams competing across 3 host nations!",
    "🔥 Prediction Time: Who do you think is going to win it all this year?",
    "🌟 You are officially a web developer now!"
];

// Step 3: Listen for a 'click' event on the button
magicButton.addEventListener('click', () => {
    // Pick a random message from our array
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Update the text inside the magicMessage paragraph
    magicMessage.textContent = messages[randomIndex];
    
    // Ensure the message paragraph is visible
    magicMessage.style.display = 'block';
});
