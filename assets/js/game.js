/**
 * Add Event Listener to document and run the main page with user login
 */
document.addEventListener('DOMContentLoaded', function () {
    runMainPage();
});

/**
 * Setting up Quiz variables to show/hide divs
 */
let mainUserPage = document.getElementById("user-login");
let seeGameRules = document.getElementById("rules-screen");
let showGameRules = document.getElementById("game-rules-btn");

/**
 * Function to run the main page with user login
 */
function runMainPage() {
    mainUserPage.style.display = "block";
    seeGameRules.style.display = "none";
}

/**
 * Show Rules Screen and go back to main screen
 */
showGameRules.addEventListener("click", viewGameRules);

function viewGameRules() {
    mainUserPage.style.display = "none";
    seeGameRules.style.display = "block";
    
}