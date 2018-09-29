///second edition

let player = "X";
let move = 1; // counter of clicks
let gameOver = false;
let newBoardArray = [];



let board = [
  null, null, null,
  null, null, null,
  null, null, null
]; /// It takes the value of each cell to use in if statement

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const nullCells = function() { //It checkes for cells which is empty
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

const playComputerMove = function(aiPlayer) {
  let availableCells = nullCells();
  let randomCell;
  let humanPlayer = "X"; //this is human humanPlayer, which is always "X"


//////////////////////////////////////////////////////////////////////////////// up to down For "O"


if(board[0] === aiPlayer && board[3] === aiPlayer && board[6] === null){
board[6] = aiPlayer;
randomCell = 6;
} else if(board[2] === aiPlayer && board[5] === aiPlayer && board[8] === null){
board[8] = aiPlayer;
randomCell = 8;
} else if(board[1] === aiPlayer && board[4] === aiPlayer && board[7] === null){
board[7] = aiPlayer;
randomCell = 7;
} else if(board[3] === aiPlayer && board[6] === aiPlayer && board[0] === null){
board[0] = aiPlayer;
randomCell = 0;
} else if(board[0] === aiPlayer && board[6] === aiPlayer && board[3] === null){
board[3] = aiPlayer;
randomCell = 3;
} else if(board[4] === aiPlayer && board[7] === aiPlayer && board[1] === null){
board[1] = aiPlayer;
randomCell = 1;
} else if(board[1] === aiPlayer && board[7] === aiPlayer && board[4] === null){
board[4] = aiPlayer;
randomCell = 4;
} else if(board[5] === aiPlayer && board[8] === aiPlayer && board[2] === null){
board[2] = aiPlayer;
randomCell = 2;
} else if(board[2] === aiPlayer && board[8] === aiPlayer && board[5] === null){
board[5] = aiPlayer;
randomCell = 5;
} else if(board[2] === aiPlayer && board[8] === aiPlayer && board[5] === null){
board[5] = aiPlayer;
randomCell = 5;
//////////////////////////////////////////////////////////////////////// Left to right For "O"
} else if(board[0] === aiPlayer && board[1] === aiPlayer && board[2] === null){
board[2] = aiPlayer;
randomCell = 2;
} else if(board[1] === aiPlayer && board[2] === aiPlayer && board[0] === null){
board[0] = aiPlayer;
randomCell = 0;
} else if(board[0] === aiPlayer && board[2] === aiPlayer && board[1] === null){
board[1] = aiPlayer;
randomCell = 1;
} else if(board[3] === aiPlayer && board[4] === aiPlayer && board[5] === null){
board[5] = aiPlayer;
randomCell = 5;
} else if(board[4] === aiPlayer && board[5] === aiPlayer && board[3] === null){
board[3] = aiPlayer;
randomCell = 3;
} else if(board[3] === aiPlayer && board[5] === aiPlayer && board[4] === null){
board[4] = aiPlayer;
randomCell = 4;
} else if(board[6] === aiPlayer && board[7] === aiPlayer && board[8] === null){
board[8] = aiPlayer;
randomCell = 8;
} else if(board[7] === aiPlayer && board[8] === aiPlayer && board[6] === null){
board[6] = aiPlayer;
randomCell = 6;
} else if(board[6] === aiPlayer && board[8] === aiPlayer && board[7] === null){
board[7] = aiPlayer;
randomCell = 7;
/////////////////////////////////////////////////////////////////////////// Cross Part For "O"
} else if(board[0] === aiPlayer && board[4] === aiPlayer && board[8] === null){
board[8] = aiPlayer;
randomCell = 8;
} else if(board[4] === aiPlayer && board[8] === aiPlayer && board[0] === null){
board[0] = aiPlayer;
randomCell = 0;
} else if(board[0] === aiPlayer && board[8] === aiPlayer && board[4] === null){
board[4] = aiPlayer;
randomCell = 4;
} else if(board[2] === aiPlayer && board[4] === aiPlayer && board[6] === null){
board[6] = aiPlayer;
randomCell = 6;
} else if(board[4] === aiPlayer && board[6] === aiPlayer && board[2] === null){
board[2] = aiPlayer;
randomCell = 2;
} else if(board[6] === aiPlayer && board[2] === aiPlayer && board[4] === null){
board[4] = aiPlayer;
randomCell = 4;
    //////////////////////////// Up To Down For "x"

  } else if(board[0] === humanPlayer && board[3] === humanPlayer && board[6] === null){
    board[6] = aiPlayer;
    randomCell = 6;
  } else if(board[2] === humanPlayer && board[5] === humanPlayer && board[8] === null){
    board[8] = aiPlayer;
    randomCell = 8;
  } else if(board[1] === humanPlayer && board[4] === humanPlayer && board[7] === null){
    board[7] = aiPlayer;
    randomCell = 7;
  } else if(board[3] === humanPlayer && board[6] === humanPlayer && board[0] === null){
    board[0] = aiPlayer;
    randomCell = 0;
  } else if(board[0] === humanPlayer && board[6] === humanPlayer && board[3] === null){
    board[3] = aiPlayer;
    randomCell = 3;
  } else if(board[4] === humanPlayer && board[7] === humanPlayer && board[1] === null){
    board[1] = aiPlayer;
    randomCell = 1;
  } else if(board[1] === humanPlayer && board[7] === humanPlayer && board[4] === null){
    board[4] = aiPlayer;
    randomCell = 4;
  } else if(board[5] === humanPlayer && board[8] === humanPlayer && board[2] === null){
    board[2] = aiPlayer;
    randomCell = 2;
  } else if(board[2] === humanPlayer && board[8] === humanPlayer && board[5] === null){
    board[5] = aiPlayer;
    randomCell = 5;
  } else if(board[2] === humanPlayer && board[8] === humanPlayer && board[5] === null){
    board[5] = aiPlayer;
    randomCell = 5;
  //////////////////////////////////////////////////////////////////////// Left to right For "x"
} else if(board[0] === humanPlayer && board[1] === humanPlayer && board[2] === null){
    board[2] = aiPlayer;
    randomCell = 2;
  } else if(board[1] === humanPlayer && board[2] === humanPlayer && board[0] === null){
    board[0] = aiPlayer;
    randomCell = 0;
  } else if(board[0] === humanPlayer && board[2] === humanPlayer && board[1] === null){
    board[1] = aiPlayer;
    randomCell = 1;
  } else if(board[3] === humanPlayer && board[4] === humanPlayer && board[5] === null){
    board[5] = aiPlayer;
    randomCell = 5;
  } else if(board[4] === humanPlayer && board[5] === humanPlayer && board[3] === null){
    board[3] = aiPlayer;
    randomCell = 3;
  } else if(board[3] === humanPlayer && board[5] === humanPlayer && board[4] === null){
    board[4] = aiPlayer;
    randomCell = 4;
  } else if(board[6] === humanPlayer && board[7] === humanPlayer && board[8] === null){
    board[8] = aiPlayer;
    randomCell = 8;
  } else if(board[7] === humanPlayer && board[8] === humanPlayer && board[6] === null){
    board[6] = aiPlayer;
    randomCell = 6;
  } else if(board[6] === humanPlayer && board[8] === humanPlayer && board[7] === null){
    board[7] = aiPlayer;
    randomCell = 7;
    /////////////////////////////////////////////////////////////////////////// Cross Part For "x"
  } else if(board[0] === humanPlayer && board[4] === humanPlayer && board[8] === null){
    board[8] = aiPlayer;
    randomCell = 8;
  } else if(board[4] === humanPlayer && board[8] === humanPlayer && board[0] === null){
    board[0] = aiPlayer;
    randomCell = 0;
  } else if(board[0] === humanPlayer && board[8] === humanPlayer && board[4] === null){
    board[4] = aiPlayer;
    randomCell = 4;
  } else if(board[2] === humanPlayer && board[4] === humanPlayer && board[6] === null){
    board[6] = aiPlayer;
    randomCell = 6;
  } else if(board[4] === humanPlayer && board[6] === humanPlayer && board[2] === null){
    board[2] = aiPlayer;
    randomCell = 2;
  } else if(board[6] === humanPlayer && board[2] === humanPlayer && board[4] === null){
  } else if(board[6] === humanPlayer && board[2] === humanPlayer && board[4] === null){
    board[4] = aiPlayer;
    randomCell = 4;

    /////////////////////////////////////////Check if the corner is free to choose
  }else if(board[4] === null){
      board[4] = aiPlayer;
      randomCell = 4;
  } else if(board[0] === null ){
      board[0] = aiPlayer;
      randomCell = 0;
  } else if(board[0] === null ){
      board[3] = aiPlayer;
      randomCell = 3;
  } else if(board[0] === null ){
      board[6] = aiPlayer;
      randomCell = 6;
  } else if(board[0] === null ){
      board[8] = aiPlayer;
      randomCell = 8;

//////////////////////////////////
  } else {
    randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    console.log(`Available cells are: `, availableCells);
    console.log(`Random cell: `, randomCell, aiPlayer);

    board[randomCell] = aiPlayer; // save the AI move into our game board array
    console.log(board);
  }

  const cell = $(`#${randomCell}`); // use the randomCell number to make an ID selector for jQuery to get the DOM node for us
  console.log(cell);
  playMove(cell); // pass the DOM node of the randomly chosen cell into playMove to place the move on the screen
  // console.log(typeof aiPlayer);

};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const checkForWinner = function ( currentPlayer  ){

  const winner = winPatterns(currentPlayer);

  if (winner !== '' || winner !== false) { // it checkes the cell not to be empty.
    if (winner === 'X') { //it compares the char and choose the winner.
      // console.log(`currentPlayer X is the winner.`);
      // console.log(currentPlayer);
      trigger(currentPlayer);
    } else if ((winner === 'O')) {
      // console.log(`* currentPlayer O is the winner *`);
      // console.log(currentPlayer);
      trigger(currentPlayer);
    } else if (move > 9) {
      gameOver = true;
      draw();
    }
  }

};
/////////////////////////////////////////////////////////////////

const winPatterns = function(player) {

  console.log('player value inside winPatterns(): ', player);
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
    // console.log("Win!", player);
    return player;
  } else {
    // gameOver = true;
    return false;
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

const draw = function(player) {
  console.log('draw()');
  $(".popup-content").text(`It a draw!`)
  // $(".popup-content").text(`Player ${currentPlayer} won the game.`)
  // $(".popup-overlay").hide();
  $(".popup-overlay").show();
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const resetGame = function() {
  // console.log('reset!');
  // console.log(gameOver);
    board = [
      null, null, null,
      null, null, null,
      null, null, null,
      null, null, null
    ];
    console.log(board);
    move = 1;
    player = "X";
    gameOver = false;
    // return gameOver = false;
    // newBoardArray = [];
    // playComputerMove = false;
  // reset
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const playMove = function(clickedSquare) {
  console.log("currentPlayer:", player);
  if (player === 'X') {
    $(clickedSquare).css('background-image', "url(images/x.png)");
  } else {
    //otherwise is "O".
    $(clickedSquare).css('background-image', "url(images/o.png)");
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
  console.log("move", move);
  console.log(board);
  let id = $(this).attr("id"); //it takes the id of each cell.
  if (move <= 9) { //max of moves

    // check that the square is empty and check game still continues.
    if (board[id] === null && gameOver === false) {

      board[id] = player;

      // play the human player's move, and see if they won
      playMove(this); // play the human move into the clicked square (stored in 'this')
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
  }
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



//
