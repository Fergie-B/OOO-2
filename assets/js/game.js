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
let showRules = document.getElementById("rules-screen");

/**
 * Function to run the main page with user login
 */
function runMainPage() {
    mainUserPage.style.display = "block";
    showRules.style.display = "none";
}