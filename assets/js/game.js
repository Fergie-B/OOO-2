/**
 * Add Event Listener to document and run the main page with user login
 */
document.addEventListener('DOMContentLoaded', function () {
    runMainPage();
});

/**
 * Setting up Const variables to query the Dom
 */
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");
const answerReason = document.getElementById("question");
// console.log(choices);

let currentQuestion = {};
let score = 0;
acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];


let questions = [];

// Constants
const correctAnswerPoints = 10;
const MAX_QUESTIONS = 8;

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
// let questionTypeTwo = document.getElementById("game-screen-two");
let finishScreen = document.getElementById("end-screen");

/**
 * Function to run the main page with user login
 */
function runMainPage() {
    questionTypeOne.style.display = "none";
    // questionTypeTwo.style.display = "none";
    finishScreen.style.display = "none";
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
        startGame();
    } else {
        errorMessage.style.display = "block";
        document.getElementById("player").focus();
        document.getElementById("player").value = "";
    }
}
checkUserName();

function startGame() {
    questionCounter = 0;
    score = 0;
    questions = imageChoices;
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();
}

// From Youtube Tutorial https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=5
function getNewQuestion() {
     if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
         // show the Finish Screen and hide the Question Screen
         questionTypeOne.style.display = "none";
         finishScreen.style.display = "block";
     }
    questionCounter++;
    document.getElementById("score").style.display = "block";
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    availableQuestions.splice(questionIndex,1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        if (selectedAnswer == currentQuestion.correctAnswer) {
            addToScore(correctAnswerPoints);
            document.getElementById("next-btn").style.display = "none";
            question.innerText = currentQuestion.answerReason;

        }

        const classToApply =
         selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 1000);
    });
});

startGame();

/**
 * Display and update the Users current score
 */
function addToScore(num) {
    score += num;
    scoreText.innerText = score;
}


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
