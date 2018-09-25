
let player = "X";
let move = 1; // counter of clicks
let gameOver = false;

const board = [
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
    return player;
  } else {
    return `Game Over!`;
  }
};


const resetGame = function() {
  console.log('reset!');
  if (gameOver) {

    return false;
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
  let id = $(this).attr("id");//it takes the id of each cell.
  let $text = $(this).text();
  // console.log($text);
  if (move <= 9) { //max of moves

    // check that the square is empty and check game still continues.
    if ($text === "" && gameOver === false) {

      playMove(this); //it refferes to the function which set the "x" and "o" images and css.
      board[id] = player;
      console.log(board);

      if (winPatterns(player) !== '') { // it checkes the cell not to be empty.
        if (winPatterns(player) === 'X') { //it compares the char and choose the winner.
          alert(`player X is the winner.`);
        } else if ((winPatterns(player) === 'O')) {
          alert(`player O is the winner.`);
        }
      }
    } else {
      // the square is not empty - do not let the move happen
      console.log("invalid click");
      return;
    }
  } //if move <=9
  // console.log($(this).text());


});

// $("#reset").click(resetGame);
// $("#reset").on("click", function() {
//   gameOver = false;
//
//   $("td").css({
//     backgroundImage: "",})
//   $("td").html("");
//
//   // $("table tr td").empty();
//   player = "X";
//   move = 1;
// })




$(document).ready(function(){
    $("#reset").hover(function(){
        $(this).css("background-color", "#375bcf");
        }, function(){
        $(this).css("background-color", "#45cb25");
    });
});
$(document).ready(function(){
    $("#start").hover(function(){
        $(this).css("background-color", "#375bcf");
        }, function(){
        $(this).css("background-color", "#45cb25");
    });
});
//





// $("table tr td").ready(function(){
//     $("#reset").click(function(){
//         $("td").css({ backgroundImage:""});
//     });
// });
