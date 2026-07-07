// Wait until the HTML document is fully loaded before running code
document.addEventListener("DOMContentLoaded", () => {
    
    // Selecting the elements we want to interact with
    const magicButton = document.getElementById("magicButton");
    const magicMessage = document.getElementById("magicMessage");

    // Adding a 'click' event listener to our button
    magicButton.addEventListener("click", () => {
        
        // Change the text content of our hidden paragraph
        magicMessage.textContent = "🚀 Boom! You just triggered a JavaScript function. The internet is yours to build!";
        
        // Swap classes to reveal the message with our CSS animation
        magicMessage.className = "revealed";
        
        // Change the button text to show it worked
        magicButton.textContent = "Success!";
        magicButton.style.backgroundColor = "#27ae60";
    });
});
