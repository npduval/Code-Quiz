const TimeEl = document.querySelector("#time");
const startQuiz = document.querySelector("#start");
const QHeaderEl = document.querySelector("#question");
const OptionEl1 = document.querySelector("#option1");
const OptionEl2 = document.querySelector("#option2");
const OptionEl3 = document.querySelector("#option3");
const OptionEl4 = document.querySelector("#option4");
const scoreEl = document.querySelector("#score");
const initialsEl = document.querySelector("#initials")
const SubmitEl = document.querySelector("#submitBtn")
const Page1 = document.querySelector(".startPage");
const Page2 = document.querySelector(".questionPage");
const Page3 = document.querySelector(".endOfGame");
let correctAwnsers = 0; 
let secondsLeft = 75;


let questionIndx = 0;
const questions = [
    {
        question: "HTML: What tag is used to define a hyperlink, or link to another page?",
        answers:  ["em","td","a href","button"],
        correctAnsIndx: 2
    },
    {
        question: "Javascript: What is the name of the object that allows you to perform mathematical tasks with the interpreter?",
        answers: ["Count","Math","Number", "Solve"],
        correctAnsIndx: 1
    },
    {
        question:"CSS: What is the CSS property that is used to specify the edges of a table?",
        answers:["Borders","Margins","Boxes","Fill"],
        correctAnsIndx: 0
    },
    {
        question: "HTML: What tag is used to define an unordered list that is bulleted?",
        answers: ["ul","u","s","li"],
        correctAnsIndx: 0  
    }
];

//Start - Timer starts - welcome page hidden; questions page displays; 
startQuiz.addEventListener("click", function(){
  let timerInterval = setInterval(function timer(){
        secondsLeft--;
        TimeEl.textContent = "Time Remaining: "+ secondsLeft;

        if (secondsLeft === 0 || questionIndx === questions.length) {
            clearInterval(timerInterval);
            endQuiz ();
        }
    }, 1000);
  Page1.style.display = 'none';
  Page2.style.display = 'block';
  renderQuestion();

});

// renders new question 
function renderQuestion() {
    QHeaderEl.textContent = questions[questionIndx].question;
    OptionEl1.textContent = questions[questionIndx].answers[0];
    OptionEl2.textContent = questions[questionIndx].answers[1];
    OptionEl3.textContent = questions[questionIndx].answers[2];
    OptionEl4.textContent = questions[questionIndx].answers[3];
    
};

//handle user selection, saves a correct awnser to score in local storage/ wrong awnser subtract 10 seconds

function evaluateValue(event){
    if (event.target.getAttribute("data-index") == questions[questionIndx].correctAnsIndx) {
        correctAwnsers++;
        localStorage.setItem("score", correctAwnsers);
    } else {
        secondsLeft -= 10;
        
    }
    questionIndx++;
    if (questionIndx === questions.length){
        endQuiz();
    } else {
        renderQuestion();
    } 
};

// end of quiz page, clock stops, shows saved score
function endQuiz(){
  TimeEl.textContent = "Times up!";
  Page2.style.display = 'none';
  Page3.style.display = 'block';
  let score = localStorage.getItem("score");

  if (!score){
      score = 0;
  } 
  scoreEl.textContent = "Your score is: " + score;

};


//submit button at end of game saves initials and score
SubmitEl.addEventListener("click", function(event) {
    window.location.assign("https://npduval.github.io/Code-Quiz/HighScore/highscores.html") 
    let score = localStorage.getItem("score");
    if (!score){
        score = 0;
    }
    let scoreRecord = {
        student: initialsEl.value.trim(),
        grade: score
    }

localStorage.setItem("scoreRecord", JSON.stringify(scoreRecord));

}
);


OptionEl1.addEventListener("click", evaluateValue);
OptionEl2.addEventListener("click", evaluateValue);
OptionEl3.addEventListener("click", evaluateValue);
OptionEl4.addEventListener("click", evaluateValue);