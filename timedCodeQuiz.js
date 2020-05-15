// 1. Mulitple choice quiz
// 2. With timer for each questions
// 3. Flows through each question automatically once answered or time is up
// 4. If wrong answer picked deduct 2 seconds
// 5. When all questions are answered the game is over
// 6. Can save my initials and score

//Variables I will need
var startBtn = $("#start-btn");
var quizQuestion = $("#questions");
var questionContainer = $("#question-container");
var answerBtns = $("#answer-buttons");

var gameStart = false;
var gameFinished = false;
var currentQuestion = 0;
var score = 0;

function loadQuestion (questionIndex) {
  var choiceA = $("#choiceA");
  var choiceB = $("#choiceB");
  var choiceC = $("#choiceC");
  var choiceD = $("#choiceD");

  question-container.textContent = (question)
};

//What should happen when I start
$(document).ready(function () {
  console.log("ready!");

  $("#start-btn").click(function () {
    console.log("btn");
    //flip game to started to be true
    gameStart = true;

    //start the timer
    var timerId = setInterval(function () {
      $("#timer").html(i);
      i++;
    }, 1000);

    var sec = 20;
    console.log();

    //render questions
    var firstQuestion = questions[currentQuestion];
    showQuestion(currentQuestion);

  });
});


//selecting an answer function
  //answer is right
    //move to next question
  
  //answer is wrong


//Game is over


//Questions
var questions = [
  {
    question:"What is the HTML tag under which one can write the JavaScript code?",
    answers: {
      A: {text: "<javascript>", correct: false},
      B: {text: "<scripted>", correct: false },
      C: {text: "<script>", correct: true },
      D: {text: "<js>", correct: false },
    },
  }

  {
    question: "Which of the following is the correct syntax to display “CodingIsFun” in an alert box using JavaScript?",
    answers: [
      { text: "alertbox(“CodingIsFun”);", correct: false },
      { text: "msg(“CodingIsFun”);", correct: false },
      { text: "msgbox(“CodingIsFun”);", correct: false },
      { text: "alert(“CodingIsFun”);", correct: true },
    ],
    }
      
    {
    question:"What is the correct syntax for referring to an external script called “main.js”?",
    answers: [
    { text: "<script src=”main.js”>", correct: true },
    { text: "<script href=”main.js”>", correct: false },
    { text: "<script ref=”main.js”>", correct: false },
    { text: "<script name=”main.js”>", correct: false },
    ],
  }
];



// var showQuestion = function (questionIndex) {
//   var selectedQuestion = questions[questionIndex];

//   // set html text to show questions
//   $("#-question-box").setText(selectedQuestion.question)
//   $("#A-box").setText(selectedQuestion.answers.A.text)
