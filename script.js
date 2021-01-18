//Global Variables Needed
var startBtn = document.querySelector("#start-quiz-btn");
var startContainer = document.querySelector("start-container");
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
var qIndex = 0;
var timeInterval;
var highScore = [];



