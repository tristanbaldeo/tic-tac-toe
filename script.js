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

// Render game board in terminal

// Function that receives player input and switches between players after each move

// Function that checks for when game is over

// Function that checks for all winning 3-in-a-rows and tied games