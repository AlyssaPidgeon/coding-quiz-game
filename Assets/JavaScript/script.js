const startButton = document.querySelector(".button");
// const userScore = document.querySelector("#view-high-score");

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

let score = 0;
let index = -1;
let answerbuttons = document.querySelectorAll(".answer-button");
//add click function
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  nextQuestion();

  //}
});

function nextQuestion() {
  index++;

  document.querySelector("#question").textContent = questions[index].prompt;
  document.querySelector("#ans-btn-one").textContent = questions[index].option1;
  document.querySelector("#ans-btn-two").textContent = questions[index].option2;
  document.querySelector("#ans-btn-three").textContent =
    questions[index].option3;
  document.querySelector("#ans-btn-four").textContent =
    questions[index].option4;

  console.log(this.textContent);
  console.log(questions[index - 1].answer);
}

for (let i = 0; i < answerbuttons.length; i++) {
  answerbuttons[i].addEventListener("click", nextQuestion);
}

// WHEN I answer a question incorrectly THEN time is subtracted from the clock

let timeLeft = math.floor(secondsLeft);
console.log(timeLeft);

function getScore() {
  if (timeLeft >0 //and last question)[
    // =userhighscore
  
    // WHEN the game is over THEN I can save my initials and score
// use ?window.prompt? to submit high score:
  // congratulations you final score is : ___time remaining. Enter your initials: . Submit button.

  ]
}



//method: ?save button on prompt? 

saveButton.addEventListener("click", funtion(event) {
  event.preventDefault();

  let userScore = {
    initials: initialsInput.value(), 
    score: timeLeft
  }

  //how to incorporate the time (score)
  localStorage.setItem("initials", JSON.stringify(initials));
  renderMessage();

});

//?two javsacripts per HTML - JS code to render message of user inital input?





//?seperate HTML for Highscores page?
userScore.addEventListener("click", funtion() {
  //use window.location.href to reference second HTML to display local data high score results?
  window.location.href = #

})



//time - start timer when game starts - needs to count down and display count down. games ends when timer =0 secons
let timeE1 = document.querySelector("#time");

function countdown() {
  let secondsLeft = 60;
  //setinterval method to call function to be executed by 1000ms
  var timeInterval = setInterval(function () {
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
