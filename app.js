// Var
console.log("Quiz")
var starContainer = document.getElementsByClassName("Container")[0]
var starButtom = document.getElementById("Start")
var startQuestion = document.getElementsByClassName("Questions")[0] 
var HighScore = document.getElementsByClassName("HighScore")[0]


// Questions

var Questions = [
{
   Question: "Commonly used data types DO NOT Include:",
   Answer:["Strings","Booleans","Alerts","Numbers"],
   CorrectAnswer: "Alerts"

} ,{
    Question: "The condition in a n if / else statement is enclosed within ____.",
    Answer:["quotes","curly brackets", "parentheses","square brackets"],
    CorrectAnswer: "parentheses"
 
 } ,{
    Question: "Arrays in JavaScript can be used to store ____.",
    Answer:["Numbers and strings", "other Arreys", "booleans", "all of the above"],
    CorrectAnswer: "all of the above"
 
 } ,{
    Question: "String values must be enclosed within____ when being assigned to variables",
    Answer:["commas","curly brackets", "quotes", "parentheses"],
    CorrectAnswer: "quotes"
 
 } ,{
    Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    Answer:["JavaScript", "terminal / bash", "for loops", "console log"],
    CorrectAnswer: "console log"
 
 } 
]
console.log(HighScore)

function Start (){
   starContainer.setAttribute("class", "hide");

} starButtom.onclick = Start;

// Start Quiz

// startQuiz.addEventListener("click", function (){
//    homepageContainer.style.display = "none";
//    questionContainer.append(quiz[0.question]);
//    answersContainer.append(quiz[0.answers])
// }

// Timer
var secondsEl = document.querySelector("#seconds");
var secondsLeft = 200;

function counter(){


    var timeLeft = 75;
    var countDownTimer = setInterval(function () {
        secondsLeft--;
        
       secondsLeft.textContent = "Time" + secondsLeft;
        timeLeft -= 1;
        if (timeLeft === 0) {
            clearInterval(countDownTimer);
            alert("Your Score is 0")
        }
    }, 1000);
}