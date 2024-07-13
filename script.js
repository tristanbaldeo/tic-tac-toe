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
    board: ['','','','','','','','',''],
    display: function() {
        console.log(`${this.board[0]}   | ${this.board[1]} |   ${this.board[2]}`)
        console.log(`----------`)
        console.log(`${this.board[3]}   | ${this.board[4]} |   ${this.board[5]}`)
        console.log(`----------`)
        console.log(`${this.board[6]}   | ${this.board[7]} |   ${this.board[8]}`)
    },
    reset: function() {
        this.board = ['','','','','','','','',''];
    }
};

// Render game board in terminal
gameBoard.display();

// Function that receives player input and switches between players after each move
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function startGame() {
    if (!gameOver) {
        readline.question(`${currentPlayer.name}, enter your move (0-8): `, (move) => {
            playerMove(parseInt(move));
        });
    }
}

// Function that checks for when game is over
function checkGameOver() {
    return checkWins() || checkTies();
}

// Function that checks for all winning 3-in-a-rows and tied games
function checkWins() {
    const wins = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    for (patterns in wins) {
        const [a,b,c] = patterns;
        if (gameBoard.board[a] && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[a] === gameBoard.board[c]) {
            console.log(`${currentPlayer.name} wins!`)
            return true;
        }
    }
    return false;
}

function checkTies() {
    if (!gameBoard.board.includes('')) {
        console.log("It's a tie!");
        return true;
    }
    return false;
}