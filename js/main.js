let player = "X";
let move = 1; // counter of clicks
let gameOver = false;

let board = [
  null, null, null,
  null, null, null,
  null, null, null
]; /// It takes the value of each cell to use in if statement


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
    // console.log(gameOver);
    return player;
  } else {
    return `Game Over!`;
  }
};



const trigger = function(player) {
  console.log('trigger()');
  $(".popup-content").text(`Player ${player} won the game.`)
  // $(".popup-overlay").hide();
  $(".popup-overlay").show();
};

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

const playMove = function(clickedSquare) {
  // let id = $("table tr td").attr("id");
  if ((move % 2) == 1) {
    // player1 moves are odd which is "X"
    player = "X";
    // $(clickedSquare).text("X");
    $(clickedSquare).css({
      backgroundImage: "url(images/x.png)",
      backgroundSize: "100px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    })
  } else {
    //otherwise is "O".
    player = "O";
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

//JQUERY/////////////////////////////

$("table tr td").on("click", function() {
  // console.log($(this).attr("id"));
  let id = $(this).attr("id"); //it takes the id of each cell.
  let $text = $(this).html();
  if (move <= 9) { //max of moves

    // check that the square is empty and check game still continues.
    console.log('$text', `(${$text})`);
    if ($text === "" && gameOver === false) {

      playMove(this); //it refferes to the function which set the "x" and "o" images and css.
      board[id] = player;
      console.log(board);

      const winner = winPatterns(player);
      if (winner !== '') { // it checkes the cell not to be empty.
        if (winner === 'X') { //it compares the char and choose the winner.

          // console.log(`player X is the winner.`);
          // console.log(player);
          trigger(player);
        } else if ((winner === 'O')) {
          // console.log(`* player O is the winner *`);
          // console.log(player);
          trigger(player);
        }
      }

      // playComputerMove();

      // switch back to human player

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
