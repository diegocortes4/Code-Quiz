var starContainer = document.getElementsByClassName("Container")[0]
var starButtom = document.getElementById("Start")
var startQuestion = document.getElementsByClassName("Questions")[0] 
var HighScore = document.getElementsByClassName("HighScore")[0]

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