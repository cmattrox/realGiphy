
var gameArr = ["Rainbow 6 Siege", "Overwatch", "Battlefield", "Fortnite", "PUBG", "Skyrim", "Halo"];

function renderButtons() {
    //empties the div so we dont repeat buttons
    $("#button-view").empty();

    for (i=0; i < gameArr.length; i++) {
        //creates a button and adds a class an attribute and text to the button
        var gameButton = $("<button>").addClass("game-btn btn-primary").attr("data-name", gameArr[i]).text(gameArr[i]);
        //appends the button we made to our html
        $("#button-view").append(gameButton);
        // console.log(gameArr[i])
    };
}

renderButtons();

$("#game-submit").on("click", function(event) {
    event.preventDefault();
    var newGame = $("#game-input").val().trim()
    gameArr.push(newGame);
    renderButtons();
    // console.log(gameArr);
});

function displayGameGif() {
    var game = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Hvo2dYK6IhZqGQAGcUitru4GTRR6x5XI&q=" + game + "&limit=10&lang=en"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.data)
        var gameDump = $("#game-dump")

        for (i=0; i<response.data.length; i++) {
            var gifUrlStill = response.data[i].images.original_still.url;
            var gifUrlAnimated = response.data[i].images.original.url;
            var gif = $("<img>").attr("src", gifUrlStill).attr("data-still", gifUrlStill).attr("data-animate", gifUrlAnimated).attr("data-state", "still").addClass("gif")
            gameDump.append(gif);

            var rating = response.data[i].rating
            var rate = $("<p>").text("Rating: " + rating);
            gameDump.append(rate); 
        }
        
       
    })
}

$(document).on("click", ".game-btn", displayGameGif);

$("#game-dump").on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    console.log("click works")
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})

