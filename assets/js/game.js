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
let getRules = document.getElementById("game-rules-btn")

/**
 * Function to run the main page with user login
 */
function runMainPage() {
    mainUserPage.style.display = "block";
    getRules.style.display = "none";
}

/**
 * Show game rules screen
 */
getRules.addEventListener("click", showRules);

function showRules() {
    let screen = document.getElementById("rules-screen")
    screen.classList.add("");
}