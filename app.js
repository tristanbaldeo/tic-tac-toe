// Initialize game state and current player
let gameOver = false;
let currentPlayer = null;

// Create and store players as objects that control game flow
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const player1 = new Player('Player 1', 'X');
const player2 = new Player('Player 2', 'O');
currentPlayer = player1;

// Create gameboard as an array inside of object
const gameBoard = {
    board: [' ',' ',' ',' ',' ',' ',' ',' ','' ],
    display: function() {
        gameDisplay.boardDisplay(this.board)
    },
    update: function(index, marker) {
        if (this.board[index] === ' ') {
            this.board[index] = marker;
            return true;
        }
        return false;
    },
    reset: function() {
        this.board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    }
};

// Object that displays moves in cells
const gameDisplay = {
    cells: document.querySelectorAll('.cell'),
    boardDisplay: function(board) {
        this.cells.forEach((cell, index) => {
            cell.textContent = board[index];
        })
    },
    render: function() {
        this.cells.forEach((cell) => {
            cell.addEventListener('click', cellClicks);
        })
    }
}

// Function that handles cell clicks
function cellClicks(e) {
    if (gameOver) {
        return;
    }
    const index = e.target.getAttribute('data-index');
    if (gameBoard.update(index, currentPlayer.marker)) {
        gameBoard.display();
        if (checkGameOver()) {
            gameOver = true;
        } else {
            switchPlayer();
        }
    } else {
        console.log('Invalid move. Please try again.');
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer == player1 ? player2 : player1
}

// Function that checks for when game is over
function checkGameOver() {
    return checkWins() || checkTies();
}

// Function that checks for all winning 3-in-a-rows and tied games
function checkWins() {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of wins) {
        const [a, b, c] = pattern;
        if (gameBoard.board[a] !== ' ' && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[a] === gameBoard.board[c]) {
            console.log(`${currentPlayer.name} wins!`);
            return true;
        }
    }
    return false;
}

function checkTies() {
    if (!gameBoard.board.includes(' ')) {
        console.log("It's a tie!");
        return true;
    }
    return false;
}

// Button that restarts game upon selection of new game button
const newGame = document.getElementById("new-game-button")
newGame.addEventListener('click', () => {
    gameOver = false;
    gameBoard.reset();
    gameBoard.display();
    gameDisplay.render();
});

gameBoard.reset();
gameBoard.display();
gameDisplay.render();