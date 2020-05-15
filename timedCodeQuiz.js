// 1. Mulitple choice quiz
// 2. With timer for each questions
// 3. Flows through each question automatically once answered or time is up
// 4. If wrong answer picked deduct 2 seconds
// 5. When all questions are answered the game is over
// 6. Can save my initials and score

//Variables I will need
//What should happen when I start
$(document).ready(function () {
  console.log("ready!");
  var startBtn = $("#start-btn");
  var quizQuestion = $("#questions");
  var questionContainer = $("#question-container");
  var answerBtns = $("#answer-buttons");
  var currentCorrectAns = " ";

  var gameStart = false;
  var gameFinished = false;
  var currentQuestion = 0;
  var score = 0;

  function showQuestion(questionIndex) {
    var choiceA = $("#choiceA");
    var choiceB = $("#choiceB");
    var choiceC = $("#choiceC");
    var choiceD = $("#choiceD");

    var selectedQuestion = questions[currentQuestion];
    questionContainer.text(selectedQuestion.question);
    console.log("showQuestion");

    choiceA.text(selectedQuestion.answers.A.text);
    choiceB.text(selectedQuestion.answers.B.text);
    choiceC.text(selectedQuestion.answers.C.text);
    choiceD.text(selectedQuestion.answers.D.text);

    var answerChoices = ["A", "B", "C", "D"];

    for (var i = 0; i < selectedQuestion.answers.length; i++) {
      if (selectedQuestion.answers[answerChoices[i]].correct) {
        currentCorrectAns = answerChoices[i];
      }
    }
  }

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
    showQuestion(currentQuestion);
  });
});

//selecting an answer function
function checkAnswer(choice) {}

//answer is right
//move to next question

//answer is wrong

//Game is over

//Questions
var questions = [
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    answers: {
      A: { text: "<javascript>", correct: false },
      B: { text: "<scripted>", correct: false },
      C: { text: "<script>", correct: true },
      D: { text: "<js>", correct: false },
    },
  },

  {
    question:
      "Which of the following is the correct syntax to display “CodingIsFun” in an alert box using JavaScript?",
    answers: {
      A: { text: "alertbox(“CodingIsFun”)", correct: false },
      B: { text: "msg(“CodingIsFun”)", correct: false },
      C: { text: "msgbox(“CodingIsFun”)", correct: false },
      D: { text: "alert(“CodingIsFun”)", correct: true },
    },
  },

  {
    question:
      "What is the correct syntax for referring to an external script called “main.js”?",
    answers: {
      A: { text: "<script src=”main.js”>", correct: true },
      B: { text: "<script href=”main.js”>", correct: false },
      C: { text: "<script ref=”main.js”>", correct: false },
      D: { text: "<script name=”main.js”>", correct: false },
    },
  },
];

// var showQuestion = function (questionIndex) {
//   var selectedQuestion = questions[questionIndex];

//   // set html text to show questions
//   $("#-question-box").setText(selectedQuestion.question)
//   $("#A-box").setText(selectedQuestion.answers.A.text)
