$(document).ready(function () {
  console.log("ready!");
});

var questions = [
  {
    question:
      "1. What is the HTML tag under which one can write the JavaScript code?",
    answers: [
      { A: "<javascript>", correct: false },
      { B: "<scripted>", correct: false },
      { C: "<script>", correct: true },
      { D: "<js>", correct: false },
    ],

    question:
      "2. Which of the following is the correct syntax to display “CodingIsFun” in an alert box using JavaScript?",
    answers: [
      { A: "alertbox(“CodingIsFun”);", correct: false },
      { B: "msg(“CodingIsFun”);", correct: false },
      { C: "msgbox(“CodingIsFun”);", correct: false },
      { D: "alert(“CodingIsFun”);", correct: true },
    ],

    question:
      "3. What is the correct syntax for referring to an external script called “main.js”?",
    answers: [
      { A: "<script src=”main.js”>", correct: true },
      { B: "<script href=”main.js”>", correct: false },
      { C: "<script ref=”main.js”>", correct: false },
      { D: "<script name=”main.js”>", correct: false },
    ],
  },
];
