let color_list = []
let clicked_list = []

function randomNum() {
    //this function takes a random number between 0-3 then uses that number as an index to get a color from the "colors"
    //it then pushes it on the color_list
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let rand_num = Math.floor(Math.random() * (max - min + 1)) + min;
    let colors = ["green", "red", "yellow", "blue"]
    color_list.push(colors[rand_num])
    clicked_list = []
    $("h1").text("Level " + color_list.length)
}

function animateLastButton() {
    $("#" + color_list[(color_list.length - 1)]).addClass("pressed");
        setTimeout(function () {
            $(".btn").removeClass("pressed");
        }, 150)
}

function checkAnswer(i) {
    if (color_list[i] === clicked_list[i]) {
        if (color_list.length === clicked_list.length) {
            randomNum()
            animateLastButton()
        }
    } else {
        color_list = []
        $("h1").text("You lose");
        $("body").css("background-color", "red");
        setTimeout(function () {
            $("body").css("background-color", "#011F3F")
        }, 1000)
        start()
    }
}

function start(event) {
    if (event.key === "a") {
        randomNum()
        animateLastButton()
    }
}


$(document).on("keypress", function(event){
    if (event.key === "a") {
        randomNum()
        animateLastButton()
    }
})


$(".btn").on("click", function (event) {
    let clicked_button = event.target.id;
    clicked_list.push(clicked_button);
    console.log("Color list", color_list)
    console.log("Clicked", clicked_list)
    checkAnswer(clicked_list.length - 1)
})


//the code below adds the animation of the class "pressed" on the clicked button
$(".btn").on("click", function(event){
    let x = event.target.id;
    $("#"+x).addClass("pressed");
    setTimeout(function(){
        $(".btn").removeClass("pressed");
    }, 150)
})