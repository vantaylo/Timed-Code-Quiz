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

  var startBtn = $("#start-btn");
  var quizQuestion = $("#questions");
  var questionContainer = $("#question-container");
  var answerBtns = $("#answer-buttons");
  var currentCorrectAns = " ";

  var gameStart = false;
  var gameFinished = false;
  var currentQuestion = 0;
  var currentSecs;
  var score = 0;
  var allowedSeconds = 10;

  var choiceA = $("#choiceA");
  var choiceB = $("#choiceB");
  var choiceC = $("#choiceC");
  var choiceD = $("#choiceD");

  choiceA.click(function () {
    checkAnswer("A");
  });
  choiceB.click(function () {
    checkAnswer("B");
  });
  choiceC.click(function () {
    checkAnswer("C");
  });
  choiceD.click(function () {
    checkAnswer("D");
  });

  function showQuestion(questionIndex) {
    var selectedQuestion = questions[currentQuestion];
    questionContainer.text(selectedQuestion.question);
    console.log("showQuestion");

    choiceA.text(selectedQuestion.answers.A.text);
    choiceB.text(selectedQuestion.answers.B.text);
    choiceC.text(selectedQuestion.answers.C.text);
    choiceD.text(selectedQuestion.answers.D.text);

    for (var i in selectedQuestion.answers) {
      console.log(i);
      console.log(selectedQuestion.answers[i]);

      if (selectedQuestion.answers[i].correct === true) {
        currentCorrectAns = i;
        console.log("correct answer found");
      }
    }
  }

  function startTimer(startSecs) {
    currentSecs = startSecs;

    var timerCountdown = setInterval(function () {
      $("#timer").text(currentSecs);
      currentSecs--;
      console.log(currentSecs);

      if (currentSecs === -1) {
        // if last question/gameover
        if (currentQuestion === questions.length - 1) {
          clearInterval(timerCountdown);
          console.log("gameover");
        } else {
          clearInterval(timerCountdown);
          startTimer(allowedSeconds);
          showQuestion(currentQuestion++);
        }
      }
    }, 1000);
  }

  function checkAnswer(choice) {
    console.log("click");
    console.log(choice);
    console.log(currentCorrectAns);

    //answer is right
    if (choice === currentCorrectAns) {
      //last answer
      if (currentQuestion === questions.length - 1) {
        console.log("score");
      } else {
        //move to next question
        currentQuestion++;
        showQuestion(currentQuestion);
      }
    } else {
      //answer is wrong
      console.log("wrong!");

      //deduct 2 seconds
      currentSecs -= 2;
    }
  }

  $("#start-btn").click(function () {
    console.log("btn");
    //flip game to started to be true
    gameStart = true;

    //start the timer
    startTimer(allowedSeconds);

    //render questions
    showQuestion(currentQuestion);
  });
});

//Game is over
//every sec you dont use = 1pts
