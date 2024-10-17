
function play() {
    let number =  Math.floor(Math.random()*6)+1;
    let number1 = Math.floor(Math.random()*6)+1;

    if (number === number1) {   
        document.querySelector("p").innerHTML = "DRAW";
        document.querySelector(".player1").setAttribute("src", "images/dice"+number+".png");
        document.querySelector(".player2").setAttribute("src", "images/dice"+number1+".png");
    } 
    else if (number > number1) {
        document.querySelector("p").innerHTML = "PLAYER 1 WINS!";
        document.querySelector(".player1").setAttribute("src", "images/dice"+number+".png");
        document.querySelector(".player2").setAttribute("src", "images/dice"+number1+".png");
    }
    else {
        document.querySelector("p").innerHTML = "PLAYER 2 WINS!";
        document.querySelector(".player1").setAttribute("src", "images/dice"+number+".png");
        document.querySelector(".player2").setAttribute("src", "images/dice"+number1+".png");
    }
}