//select elements variables
var start = $("#start-btn");
var quiz = $("#questions");
var nextBtn = $("#next-btn");

var gameStart = false;
var gameFinished = false;
var currentQuestion = 0;


$(document).ready(function () {
  console.log("ready!");

  

  $("#start-btn").click(function () {
    console.log("btn");
    //flip game to started to be true
    gameStart = true;

    //start the timer
    // repeat with the interval of 20 seconds
    var timerId = setInterval(function () {
      console.log("timer");
    }, 1000);

    var sec = 20;
    console.log();

    //render questions
    // var firstQuestion = questions[currentQuestion];
    showQuestion(currentQuestion);
  });
});




var showQuestion = function (questionIndex) {
  var selectedQuestion = questions[questionIndex];

  // set html text to show questions
  $("#-question-box").setText(selectedQuestion.question)
  $("#A-box").setText(selectedQuestion.answers.A.text)

}

//Questions
var questions = [
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    answers: {
      A: {text: "<javascript>", correct: false},
      B: {text: "<scripted>", correct: false },
      C: {text: "<script>", correct: true },
      D: {text: "<js>", correct: false },
    },
  }
  {
  question:
    "Which of the following is the correct syntax to display “CodingIsFun” in an alert box using JavaScript?",
  answers: [
    { A: "alertbox(“CodingIsFun”);", correct: false },
    { B: "msg(“CodingIsFun”);", correct: false },
    { C: "msgbox(“CodingIsFun”);", correct: false },
    { D: "alert(“CodingIsFun”);", correct: true },
  ],}
    
{
  question:
  "What is the correct syntax for referring to an external script called “main.js”?",
answers: [
  { A: "<script src=”main.js”>", correct: true },
  { B: "<script href=”main.js”>", correct: false },
  { C: "<script ref=”main.js”>", correct: false },
  { D: "<script name=”main.js”>", correct: false },
],}

];

// create some elements

//render a question
$( "div.demo-container" ).html(function askQuestions(question) {
  

});

//start quiz

//counter rendering

//check answer

//answer is correct

//answer is wrong

// score rendered
// calculate percent answered correctly
// keep highscores

// after 1 min stop
// setTimeout(() => {
//   clearInterval(timerId);
//   alert("stop");
// }, 1000 * 60 * 60);
