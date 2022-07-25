var highScoreFormEl = document.querySelector('#high-score-form');
var highScoreEl = document.querySelector('high-scores');
var clearButton = document.querySelector('#clear-btn');
var highScore;

function displayHighScores() {
    highScore = JSON.parse(localStorage.getItem('highScore'));
    if (highScore) {
        console.log (highScore)

        for (var i=0; i < highScore.length; i++) {

            var listItemEl = document.createElement('li');

            listItemEl.textContent = `${highScore[i].initials } - ${highScore[i].score}`;

            highScoreEl.appendChild(listItemEl);

        }

    } 
        else {
            highScoreFormEl.innerHTML = "<h2>No High Scores Saved </h2>";

        }
}

clearButton.addEventListener('click', function(){
    localStorage.removeItem('highScore');

    displayHighScores();
});

displayHighScores();