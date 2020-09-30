// Var

var starContainer = document.getElementsByClassName("Container")[0]
var starButtom = document.getElementById("Start")
var startQuestion = document.getElementsByClassName("Questions")[0] 
var HighScore = document.getElementsByClassName("HighScore")[0]


// Questions

var Questions = [
{
   Question: "",
   Answer:[],
   CorrectAnswer: ""

} ,{
    Question: "",
    Answer:[],
    CorrectAnswer: ""
 
 } ,{
    Question: "",
    Answer:[],
    CorrectAnswer: ""
 
 } ,{
    Question: "",
    Answer:[],
    CorrectAnswer: ""
 
 } ,{
    Question: "",
    Answer:[],
    CorrectAnswer: ""
 
 } 
]
console.log(HighScore)

function Start (){
   starContainer.setAttribute("class", "hide");

} starButtom.onclick = Start;

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