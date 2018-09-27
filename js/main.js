
let player = "X";
let move = 1; // counter of clicks
let gameOver = false;


let board = [
  null, null, null,
  null, null, null,
  null, null, null
]; /// It takes the value of each cell to use in if statement

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const nullCells = function() {
  let newBoardArray = [];
  for (var i = 0; i < 9; i++) {
    if (board[i] === null) {
      newBoardArray.push(i);
      // console.log(`${nullCells}`);
    }
  }
  return newBoardArray; ////provide an array of empty nullCells.
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const playComputerMove = function(currentPlayer) {
  let availableCells = nullCells();
  let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
  console.log(`Available cells are: `, availableCells);
  console.log(`Random cell: `, randomCell, currentPlayer);

  board[randomCell] = currentPlayer; // save the AI move into our game board array
  console.log(board);

  const cell = $(`#${randomCell}`); // use the randomCell number to make an ID selector for jQuery to get the DOM node for us
  // console.log(cell);
  playMove(cell); // pass the DOM node of the randomly chosen cell into playMove to place the move on the screen
  // console.log(typeof currentPlayer);

};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const checkForWinner = function ( currentPlayer  ){

  const winner = winPatterns(currentPlayer);

  if (winner !== '') { // it checkes the cell not to be empty.
    if (winner === 'X') { //it compares the char and choose the winner.

      // console.log(`currentPlayer X is the winner.`);
      // console.log(currentPlayer);
      trigger(currentPlayer);
    } else if ((winner === 'O')) {
      // console.log(`* currentPlayer O is the winner *`);
      // console.log(currentPlayer);
      trigger(currentPlayer);
    }
  }

};
const winPatterns = function(player) {

  //if statement cheke different winning patterns.
  if (board[0] === player && board[1] === player && board[2] === player ||
    board[3] === player && board[4] === player && board[5] === player ||
    board[6] === player && board[7] === player && board[8] === player ||
    board[0] === player && board[3] === player && board[6] === player ||
    board[1] === player && board[4] === player && board[7] === player ||
    board[2] === player && board[5] === player && board[8] === player ||
    board[2] === player && board[4] === player && board[6] === player ||
    board[0] === player && board[4] === player && board[8] === player
  ) {
    gameOver = true;
    console.log("Win!", player);
    return player;
  } else {
    return `Game Over!`;
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const trigger = function(player) {
  console.log('trigger()');
  $(".popup-content").text(`Player ${player} won the game.`)
  // $(".popup-content").text(`Player ${currentPlayer} won the game.`)
  // $(".popup-overlay").hide();
  $(".popup-overlay").show();
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const resetGame = function() {
  // console.log('reset!');
  // console.log(gameOver);
  if (gameOver) {
    board = [
      null, null, null,
      null, null, null,
      null, null, null
    ];
    // console.log(board);
    move = 1;
    player = "X";
    gameOver = false;
    // return gameOver = false;
  }
  // reset
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const playMove = function(clickedSquare) {
  console.log("currentPlayer:", player);
  if (player === 'X') {
    // $(clickedSquare).text("X");
    $(clickedSquare).css({
      backgroundImage: "url(images/x.png)",
      backgroundSize: "100px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    });
  } else {
    //otherwise is "O".
    // $(clickedSquare).text("O");
    $(clickedSquare).css({
      backgroundImage: "url(images/o.png)",
      backgroundSize: "100px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    })
  }
  move++; //it counts next moves.
};

const switchPlayer = function(){
  if (player === 'X') {
    player = "O";
  } else {
    player = "X";
  }
};

//JQUERY//////////////////////////////////////////////////////////////////////////////////////////////////

$("table tr td").on("click", function() {
  // console.log($(this).attr("id"));
  let id = $(this).attr("id"); //it takes the id of each cell.
  if (move <= 9) { //max of moves

    // check that the square is empty and check game still continues.
    if (board[id] === null && gameOver === false) {

      board[id] = player;

      // play the human player's move, and see if they won
      playMove(this); //it refers to the function which set the "x" and "o" images and css.
      checkForWinner( player );
      switchPlayer(); // will switch from X to O

      // now play the AI player's move, and see if they won
      playComputerMove( player );
      checkForWinner( player );
      switchPlayer();  // will switch from O back to X (the human player)

    } else {
      // the square is not empty - do not let the move happen
      console.log("invalid click");
      return;
    }
  } //if move <=9
  // console.log($(this).text());


});

$("#reset").on("click", function() {
  $(".popup-overlay").hide();
  resetGame();

  $("td").css({
    backgroundImage: "",
  })
  $("td").html("");
  // reset the game

});
