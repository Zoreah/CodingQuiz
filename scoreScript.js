var highScoreList = document.querySelector("#high-score-list");
var clearScoreBtn = document.querySelector("#clear-high-scores");
var goBackBtn = document.querySelector("#go-back");

//get scores 

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

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
    location.reload();
    
});

//Restart button

goBackBtn.addEventListener('click', function() {
    window.location = "index.html";

});
showTopScores();