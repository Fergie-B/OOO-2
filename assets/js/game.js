/**
 * Add Event Listener to document and run the main page with user login
 */
document.addEventListener('DOMContentLoaded', function () {
    runMainPage();
});

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("img-choice"));
console.log(choices);

/**
 * Setting up Quiz variables to show/hide divs
 */
let mainUserPage = document.getElementById("user-login");
let seeGameRules = document.getElementById("rules-screen");
let showGameRules = document.getElementById("game-rules-btn");
let hideGameRules = document.getElementById("close-btn");
let errorMessage = document.getElementById("login-error");
// let chooseGameLevel = document.getElementById("game-level");
let questionTypeOne = document.getElementById("game-screen-one");
let questionTypeTwo = document.getElementById("game-screen-two");
/**
 * Function to run the main page with user login
 */
function runMainPage() {
    questionTypeOne.style.display = "none";
    questionTypeTwo.style.display = "none";
    errorMessage.style.display = "none";
    mainUserPage.style.display = "block";
    seeGameRules.style.display = "none";
//   chooseGameLevel.style.display = "none";
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
 * Code to verify the User Inputs correct username length on log-in screen and load Game Screen Type One
 */
document.getElementById("enter-user").addEventListener("click" , checkUserName);

function checkUserName() {
    let username = document.getElementById("player").value.trim();

    if (username.length >= 1 && username.length <= 20) {
        questionTypeOne.style.display = "block";
        seeGameRules.style.display = "none";
        mainUserPage.style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("bonus-btn").style.display = "none";
    } else {
        errorMessage.style.display = "block";
        document.getElementById("player").focus();
        document.getElementById("player").value = "";
    }
}
checkUserName();

/**
 * Code to Select the Users desired skill level
 */
// function chooseSkillLevel() {
//     document.getElementById("skill-buttons").addEventListener("click", function (event) {
//         if (!event.target.className.includes("skill-button")) return;
//         let button = event.target;
//         let skillLevel = button.getAttribute("data-type");
//         setSkill(skillLevel);
//     });
// }
// chooseSkillLevel();
// console.log(chooseSkillLevel);
