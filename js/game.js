// Declaring all elements 

var startContainer = document.querySelector('#start-container');
var startButton = document.querySelector('#start-button');

var questionContainer = document.querySelector('#question-container');
var questionOptions = document.querySelector('#question-options');

var answerContainer = document.querySelector('#answer-container');

var highscoreForm = document.querySelector('#highscore-form');




const questions = [
    {
        question: "How many hearts does an octopus have?",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correctAnswer: "3",
    },
    {
        question: "What color blood does an octopus have?",
        choiceA: "red",
        choiceB: "blue",
        choiceC: "black",
        choiceD: "green",
        correctAnswer: "blue"
    }, 
    {
        question: "How many arms does an octopus have?",
        choiceA: "2",
        choiceB: "4",
        choiceC: "6",
        choiceD: "8",
        correctAnswer: "8"

    }, 
    {
        question: "Which is NOT a species of Octopus?",
        choiceA: "Mosaic Octopus",
        choiceB: "Butter Octopus",
        choiceC: "Dumbo Octopus",
        choiceD: "Blanket Octopus",
        correctAnswer: "Butter Octopus"

    },
];
console.log(questions);


var coundown; 
var currentQuestion; 
var timerInterval;

var questionPosition = 0;
var currentQuestion = questions[questionPosition]; 

// DECLARE the 'timeEl'
var timeEl = document.querySelector('#timer');

document.querySelector("#start-button").addEventListener("click",startGame);
// Function 'startGame'
function startGame() {
    // Hide the start screen
    startContainer.setAttribute("hidden", true);
    // Set the question position to 0
    currentQuestion = 0;
    // Display the first question (Display the current question)
    displayCurrentQuestion();

    time = 75;
    timerInterval = setInterval(countdown,1000);
        
    displayTime();

}
    // Set the starting value of 'countdown'
function countdown() {
    time--;
    displayTime();
    if (coundown === 0) {
        endGame();
    }}

 
// stop countdow at zero


    // Start the timer 'startTimer'
const showTimer = document.querySelector('#timer');
function displayTime () {
    showTimer.textContent = time;
}
        // IF 'countdown' === 0 THEN 'endGame()

    

// Function 'displayCurrentQuestion'
function displayCurrentQuestion() {
    currentQuestion = questions[questionPosition]; 


}

    

    // Check if the selected answer is correct

        // IF the answer is wrong

            // THEN we need to subtract from 'coundown'

    // Increasing the question position by 1

        // questionPosition++


    // IF I've passed the last question 
    
        // THEN 'endGame()

    // Else

        // Display the current question
            // displayCurrentQuestion();



// Function 'answerQuestion'

// function displayCurrentQuestion = {}

        // questions[questionPosition];
       

// Function 'endGame'

    // Hide the questions area

    // Show the record high score

    // Clear the timer interval to stop it from running


// Function 'recordTheHighscore'
    





// var questionContainer = document.querySelector('#question');

        // questionContainer.addEventListener("click", function(event) {

        //     var clickElement = event.target;

        //     if( !clickElement.matches('button')) return;

        //     clickElement.dataset
        // });
