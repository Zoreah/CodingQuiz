var highScoreList = document.querySelector("#high-score-list");
var clearScoreBtn = document.querySelector("#clear-high-scores");
var goBackBtn = document.querySelector("#go-back");

//get high score 

var highScoresArray = JSON.parse(localStorage.getItem("scores"));

function showTopScores() {
    for (var i = 0; i < 5; i++) {
        var highScore = document.createElement("li");
        highScore.textContent= "Initials: " + highScoresArray[i].initials + " --- Score: " + highScoresArray[i].score;
        highScoresArray.setAttribute("class", list-group-item");
        highScoreList.appendChild(highScore);


    };
}

//Clear button

clearScoreBtn.addEventListener('click', function() {
    localStorage.clear();
    
});

//Restart button

goBackBtn.addEventListener('click', function() {
    window.location = "index.html";

});
showTopScores();