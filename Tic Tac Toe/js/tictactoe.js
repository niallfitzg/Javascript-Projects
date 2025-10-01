// who goes first, X starts
let activePlayer = 'X';
// keep track of all the moves so we can check wins later
let selectedSquares = [];

// function to put an X or O on the board
function placeXOrO(squareNumber) {
    // only let me click a square if it hasn’t been used yet
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // get the square that was clicked
        let select = document.getElementById(squareNumber);
        // check whose turn it is
        if (activePlayer === 'X') {
            // if it’s X’s turn show an X
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            // otherwise show an O
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // save this move into the list
        selectedSquares.push(squareNumber + activePlayer);
        // check if someone has won
        checkWinConditions();
        // switch turn
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        // play the click sound
        audio('./media/place.mp3');
        // if it’s the computer’s go
        if (activePlayer === 'O') {
            // stop the player clicking for a bit
            disableClick();
            // wait 1 second then let the computer move
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // needed so the computer move can work
        return true;
    }
}

// computer picks a random square
function computersTurn() {
    // keep trying until it works
    let success = false;
    // number for the square
    let pickASquare;
    while (!success) {
        // pick a random square 0–8
        pickASquare = String(Math.floor(Math.random() * 9));
        // if the square is free, put something there
        if (placeXOrO(pickASquare)) {
            // actually place the move
            placeXOrO(pickASquare);
            // done now
            success = true;
        };
    }
}

// check if someone has 3 in a row
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 510, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    // if board is full and no one won, it’s a tie
    else if (selectedSquares.length >= 9) {
        // play tie sound
        audio('./media/tie.mp3');
        // restart after half a second
        setTimeout(function () { resetGame(); }, 500);
    }
}

// helper to see if 3 squares match
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // if all 3 are true, then yes, someone won
    if (a === true && b === true && c === true) { return true; }
}

// stop clicking for a moment
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// play sounds
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// draw a line across the winner
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    // don’t let clicks during the win
    disableClick();
    // play win sound
    audio('./media/winGame.mp3');
    // draw the line
    animateLineDrawing();
    // wait then reset the game
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

// restart game when done
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}
