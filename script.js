// Initialize game state and current player
let GameOver = false;
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

// Function that checks for when game is over

// Function that checks for all winning 3-in-a-rows and tied games