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

/**
 * Setting up variables for the questions
 */
let currentQuestion = {};
let score = 0;
acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];
let userName = document.getElementById("player");

let questions = [];

// Constants to set the number of points for a correct answer and the max number of questions
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
let questionTypeOne = document.getElementById("game-screen-one");
let playGameAgain = document.getElementById("play-again");
let finishScreen = document.getElementById("end-screen");
let endMessage = document.getElementById("final-score");

/**
 * Function to run the main page with user login
 */
function runMainPage() {
    questionTypeOne.style.display = "none";
    finishScreen.style.display = "none";
    errorMessage.style.display = "none";
    mainUserPage.style.display = "block";
    seeGameRules.style.display = "none";
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
 * Code to verify the User Inputs correct username length on log-in screen and load Game Screen One
 */
document.getElementById("enter-user").addEventListener("click" , checkUserName);

function checkUserName() {
    let userName = document.getElementById("player").value.trim();

    if (userName.length >= 1 && userName.length <= 20) {
        questionTypeOne.style.display = "block";
        seeGameRules.style.display = "none";
        mainUserPage.style.display = "none";
        document.getElementById("username").innerText = "Username: " + `${userName}`;
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
         document.getElementById("final-score").innerText = "Congratulations you scored " + `${score}` + " points";
         playGameAgain.addEventListener("click", runMainPage);
     }
    questionCounter++;
    document.getElementById("username").style.display = "inline-block";
    document.getElementById("score").style.display = "inline-block";
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
        // If Else Statement to add points on a correct answer and to display the answer reason
        if (selectedAnswer == currentQuestion.correctAnswer) {
            addToScore(correctAnswerPoints);
            question.innerText = "Correct! "  + `${currentQuestion.answerReason}`;
        } else {
            question.innerText = "Incorrect! "  + `${currentQuestion.answerReason}`;
        }

        const classToApply =
         selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        selectedChoice.parentElement.classList.add(classToApply);
        // Set the timeout between questions
        setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 3000);
    });
});

startGame();

/**
 * Display and update the Users current score with a Template Literal String
 */
function addToScore(num) {
    score += num;
    scoreText.innerText = "Score: " + `${score}`;
}

