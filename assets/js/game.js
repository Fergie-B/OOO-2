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
let hideGameRules = document.getElementById("close-btn");
let chooseGameLevel = document.getElementById("game-level");
/**
 * Function to run the main page with user login
 */
function runMainPage() {
    mainUserPage.style.display = "block";
    seeGameRules.style.display = "none";
    chooseGameLevel.style.display = "none";
}

/**
 * Show Rules Screen and go back to main screen Functions
 */
showGameRules.addEventListener("click", viewGameRules);

function viewGameRules() {
    mainUserPage.style.display = "none";
    seeGameRules.style.display = "block";   
}

hideGameRules.addEventListener("click", closeGameRules);

function closeGameRules() {
    mainUserPage.style.display = "block";
    seeGameRules.style.display = "none";
}

/**
 * Code to verify the User Inputs correct username length on log-in screen
 */
document.getElementById("enter-user").addEventListener("click" , checkUserName);

function checkUserName() {
    let username = document.getElementById("player").value.trim();

    if (username.length >= 1 && username.length <= 20) {
        chooseGameLevel.style.display = "block";
        mainUserPage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        document.getElementById("player").focus();
        document.getElementById("player").value = "";
    }
}
checkUserName();