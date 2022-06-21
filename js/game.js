// Declaring all elements 

var start = document.getElementById('start');
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');


// DECLARE 'countdown' number
// var coundown = 
// DECLARE 'questions'
// var questionPosition = 0;
var questions = [
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

// var currentQuestion = questions[questionPosition];

// DECLARE a 'timerInterval'
//  var timerInterval = 
// var currentQuestion = questions[questionPosition]; 

// DECLARE the 'timeEl'
// var timeEl = document.querySelector('#timer');

// Function 'startGame'

    // Hide the start screen

    // Set the question position to 0

    // Display the first question (Display the current question)
    
    // displayCurrentQuestion();

    // Set the starting value of 'countdown'

    // Start the timer 'startTimer'

        // IF 'countdown' === 0 THEN 'endGame()

// Function 'answerQuestion'

    // var currentQuestion = questions[questionPosition]; 

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


// Function 'displayCurrentQuestion'

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
