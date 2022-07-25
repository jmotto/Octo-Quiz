// Declaring all elements 

var startContainer = document.querySelector('#start-container');
var startButton = document.querySelector('#start-button');

var questionContainer = document.querySelector('#question-container');
var questionOptions = document.querySelector('#question-options');

var answerContainer = document.querySelector('#answer-container');
var answerText = document.querySelector('#answer-text');

var highscoreForm = document.querySelector('#highscore-form');




const questions = [
    {
        questionText: "How many hearts does an octopus have?",
        options: [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4",
        ],
        answerText: "C. 3",
    },
    {
        questionText: "What color blood does an octopus have?",
        options: [
            "A. red",
            "B. blue",
            "C. black",
            "D. green",
        ],
        answerText: "B. blue",
    }, 
    {
        questionOptions: "How many arms does an octopus have?",
        options: [ 
            "A. 2",
            "B. 4",
            "C. 6",
            "D. 8",
        ],
        answerText: "D. 8",

    }, 
    {
        questionOptions: "Which is NOT a species of Octopus?",
        options: [
        "A. Mosaic Octopus",
        "B. Butter Octopus",
        "C. Dumbo Octopus",
        "D. Blanket Octopus",
        ],
        answerText: "B. Butter Octopus",

    },
];
console.log(questions);


var coundown; 
var currentQuestion; 
var timerInterval;

var questionPosition = 0;
var currentQuestion = questions[questionPosition]; 

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


    // Start the timer 'startTimer'
const showTimer = document.querySelector('#timer');
function displayTime () {
    showTimer.textContent = time;
}
        // IF 'countdown' === 0 THEN 'endGame()

    

// Function 'displayCurrentQuestion'
function displayCurrentQuestion() {
    let options = questions.options;

    var questionText = document.querySelector("#question-text");
    questionText.textContent = questions.questionText;

    for (i = 0; i < options; i++) {
        var option = options[i];
        var optionButton = document.querySelector("#option" + i );
        optionButton.textContent = option;
    }
}

document.querySelector("#question-options").addEventListener("click", checkAnswer);

function correctAnswer(optionButton) {
    return optionButton.textContent === questions[currentQuestion].answerText;
}

function hideResultText() {
    answerContainer.getElementsByClassName.display = "none";
}

function checkAnswer(event) {
    var optionButton = event.target;
    if(correctAnswer(optionButton)) {
        answerText.textContent = "Correct!";
        setTimeout(hideResultText, 1000);
    } else {
        answerText.textContent = "Wrong!";
        setTimeout(hideResultText, 1000);
        if (time >=10) {
            time = time - 10;
            displayTime();
        } else {
            time = 0;
            displayTime();
            endGame();
        }
    }

currentQuestion++;
if (currentQuestion < questions.length) {
    displayCurrentQuestion();
} else {
    endGame();
}
}

console.log(currentQuestion);


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
function endGame() {

    // Hide the questions area

    // Show the record high score

    // Clear the timer interval to stop it from running
    clearInterval(timerInterval);
}
// Function 'recordTheHighscore'
    



// stop countdow at zero


// var questionContainer = document.querySelector('#question');

        // questionContainer.addEventListener("click", function(event) {

        //     var clickElement = event.target;

        //     if( !clickElement.matches('button')) return;

        //     clickElement.dataset
        // });
