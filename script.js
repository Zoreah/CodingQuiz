//Global Variables Needed
var startBtn = document.querySelector("#start-quiz-btn");
var startContainer = document.querySelector("#start-container");
var quizContainer = document.querySelector("#quiz-container");
var askQuestion = document.querySelector("#question");
var quizOverContainer = document.querySelector("#quiz-over-container");
var optionOne = document.querySelector("#lil");
var optionTwo = document.querySelector("#li2");
var optionThree = document.querySelector("#li3");
var optionFour = document.querySelector("#li4");
var userName = document.querySelector("#name");
var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var userSubmitBtn = document.querySelector("#submit");
var optionList = document.querySelector("#option-list");
var finalScore = document.querySelector("#final-score");

var userAnswer;
var correctAnswer;
var highScore = [];
var qIndex = 0;
var timeInterval;


//String & Arrays for questions, options, & answers

function getStoredScores() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
        highScore = storedScores;
    }
}

var quizQuestions = [
    {
        question: "The set of markup symbols or codes placed in a file that is intended for display on a web page ____",
        options: ["Css", "Script", "Html", "Email"],
        answer: "Html",

    },
    {
        question: "A data structure that contains a group of elements ____",
        options: ["Quotes", "Javascript", "Alerts", "Array"],
        answer: "Array",
    },
    {

        question: "A block of organized, reusable code that is used to perfrom a single, related action ____",
        options: ["Function", "Source", "Programming", "Style"],
        answer: "Function",
    },
{
        question: "What does DNS stand for?",
        options: ["Do not send", "Domain name system", "Domain name server", "Down network system"],
        answer: "Domain name system",
    }
],

//Time alotted to answer question

var secondsLeft = quizQuestions.length * 15;

function quizOver() {
    quizContainer.classList.add("d-none");
    timer.classList.add("d-none");
    finalScore.textContent = "Final Score: " + secondsLeft;
}

