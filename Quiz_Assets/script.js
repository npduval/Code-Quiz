const TimeEl = document.querySelector("#time");
const StartQuiz = document.querySelector("#start")
const HeaderEl = document.querySelector("#header")
const ParaEl = document.querySelector("#para")
const QuizQuestions = [
"HTML: What tag is used to define a hyperlink, or link to another page?",
"Javascript: What is the name of the object that allows you to perform mathematical tasks with the interpreter?",
"CSS: What is the CSS property that is used to specify the edges of a table?",
"HTML: What tag is used to define an unordered list that is bulleted?",
]
const QuizOptions1 = [ "em","td","a href","button"]
const QuizOptions2 = ["Count","Math","Number", "Solve"]
const QuizOptions3 = ["Borders","Margins","Boxes","Fill"]
const QuizOptions4 = ["ul","u","s","li"]


 



StartQuiz.addEventListener("click", function(){
  let secondsLeft = 75;
  let timerInterval = setInterval(function timer(){
        secondsLeft--;
        TimeEl.textContent = "Time Remaining: "+ secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz ();
        }
    }, 1000);

  HeaderEl.innerHTML = QuizQuestions[0];
  ParaEl.innerHTML = ""// for loop to create button for each array index
  StartQuiz.style.visibility = "hidden";
 
}
)
