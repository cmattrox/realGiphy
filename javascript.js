
var gameArr = ["Rainbow 6 Siege", "Overwatch", "Battlefield", "Fortnite", "PUBG", "Skyrim", "Halo"];

function renderButtons() {
    //empties the div so we dont repeat buttons
    $("#button-view").empty();

    for (i=0; i < gameArr.length; i++) {
        var gameButton = $("<button>").addClass("game-btn-primary").attr("data-name", gameArr[i]).text(gameArr[i]);
        $("#button-view").append(gameButton);
        console.log(gameArr[i])
    };
}

renderButtons();

$("#game-submit").on("click", function(event) {
    event.preventDefault();
    var game = $("#game-input").val()
    gamesArr.push(game);
    renderButtons();
    console.log(gameArr);
});

// console.log(gameArr);
