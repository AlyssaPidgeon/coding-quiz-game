const startButton = document.querySelector(".button");

const buttons = document.getElementById("buttons");
const submitScore = document.querySelector(".user-score");
var timeInterval = null;
var initials = document.querySelector("#initials");

let questions = [
  {
    prompt: "Commonly used data types do NOT include:",
    answer: "Alerts",
    option1: "stings",
    option2: "Boolean",
    option3: "Alerts",
    option4: "numbers",
  },
  {
    prompt: "The condition in an if/else statement is enclosed with...? ",
    answer: "paranthesis",
    option1: "Quotes",
    option2: "curly brackets",
    option3: "paranthesis",
    option4: "square brackets",
  },
];

var index = -1;
var answerbuttons = document.querySelectorAll(".answer-button");

//click to start game:
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  event.target.style.display = "none";
  submitScore.style.visibility = "hidden";
  nextQuestion();
  console.log(index);
});

function nextQuestion() {
  if (questions.length - 1 == index) {
    endGame();
  } else {
    index++;
    console.log(index);
    document.querySelector("#question").textContent = questions[index].prompt;
    document.querySelector("#ans-btn-one").textContent =
      questions[index].option1;
    document.querySelector("#ans-btn-two").textContent =
      questions[index].option2;
    document.querySelector("#ans-btn-three").textContent =
      questions[index].option3;
    document.querySelector("#ans-btn-four").textContent =
      questions[index].option4;

    console.log(this.textContent);
    console.log(questions[index - 1].answer);
  }
}

function checkAnswer(event) {
  var userAnswer = event.target;
  console.log(userAnswer.textContent);
  if (!userAnswer.matches(".answer-button")) {
    return;
  }
  if (userAnswer.textContent === questions[index].answer) {
    alert("Your answer is correct!");
  } else {
    alert("Your answer is incorrect!");
    secondsLeft -= 10;
  }
  nextQuestion();
}
buttons.addEventListener("click", checkAnswer);

// WHEN the game is over THEN I can save my initials and score

function endGame(event) {
  if (secondsLeft > 0) {
    alert("Congratulations you final score is :" + secondsLeft);
  }
  clearInterval(timeInterval);
  submitScore.style.visibility = "visible";
  buttons.style.visibility = "hidden";
}

submitScore.addEventListener("click", function (event) {
  event.preventDefault();
  const userScore = secondsLeft;
  const userInitials = initials.value;
  console.log(userInitials);
  localStorage.setItem("initials", userInitials);
  localStorage.setItem("score", userScore);
  // window.location.href = "./userscore.html";
});

//time - start timer when game starts - needs to count down and display count down. games ends when timer =0 secons
let timeE1 = document.querySelector("#time");
let secondsLeft = 60;

function countdown() {
  //setinterval method to call function to be executed by 1000ms
  timeInterval = setInterval(function () {
    if (secondsLeft > 1) {
      //shows remaining seconds on Time element of web page:
      timeE1.textContent = secondsLeft + " seconds remaining";
      //reduce time by 1 second:
      secondsLeft--;
    } else if (secondsLeft === 1) {
      //rename seconds to second
      timeE1.textcontent = secondsLeft + " second remaining";
      secondsLeft--;
    } else {
      //when time =0, timeE1 to empty string
      timeE1.textContent = "";
      //clear interval to stop timer
      clearInterval(timeInterval);
      //call display message (game over -if time =0 before user completes Q's):
      alert("Game Over! You have run out of time");
    }
  }, 1000);
}

//call function
countdown();
