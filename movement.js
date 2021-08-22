let border = document.getElementById("border_div");
let squareShape = document.getElementById("box");

let border_height = border.offsetHeight;
let border_width = border.offsetWidth;

let moveUp = 0;

function moveMotion() {

    let xAxisCoord = squareShape.offsetLeft;
    let yAxisCoord = squareShape.offsetTop;


    if ((yAxisCoord + 100) >= border_height) {
        moveUp = 1;
        border.className="border_touched";

    }
    if (squareShape.offsetLeft == 0) {
        moveUp = 0;
        border.className="border";

    }

    if (moveUp) {
        xAxisCoord = xAxisCoord - 10;
        yAxisCoord = yAxisCoord - 10;
    }
    else {
        xAxisCoord = xAxisCoord + 10;
        yAxisCoord = yAxisCoord + 10;

    }

    squareShape.style.left = xAxisCoord + "px";
    squareShape.style.top = yAxisCoord + "px";

    setTimeout(function () { moveMotion() }, 100); //use 0.1s interval instead of 1s for quicker demonstration
}

//Call the game


moveMotion();

