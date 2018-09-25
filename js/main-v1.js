
const winPatterns = function() {
  let cell0 = $('#0').text(); /// It takes the value of each cell to use in if statement
  let cell1 = $('#1').text();
  let cell2 = $('#2').text();
  let cell3 = $('#3').text();
  let cell4 = $('#4').text();
  let cell5 = $('#5').text();
  let cell6 = $('#6').text();
  let cell7 = $('#7').text();
  let cell8 = $('#8').text();


  //if statement cheke different winning patterns.
  if ((cell0 === cell1) && (cell1 === cell2)) {
    return cell2;
  } else if ((cell3 === cell4) && (cell4 === cell5)) {
    return cell5;
  } else if ((cell6 === cell7) && (cell7 === cell8)) {
    return cell8;
  } else if ((cell0 === cell3) && (cell3 === cell6)) {
    return cell6;
  } else if ((cell1 === cell4) && (cell4 === cell7)) {
    return cell7;
  } else if ((cell2 === cell5) && (cell5 === cell8)) {
    return cell8;
  } else if ((cell0 === cell4) && (cell4 === cell8)) {
    return cell8;
  } else if ((cell2 === cell4) && (cell4 === cell6)) {
    return cell6;
  } else {
    return `Game Over!`;
  }
};


//JQUERY/////////////////////////////

let move = 1; // counter of clicks
$("table tr td").on("click", function() {
  let $text = $(this).text();
  // console.log($text);
  if (move <= 9) { //max of moves
    if ($text === "") {
      if ((move % 2) == 1) {
        $(this).text("X");
      } // player1 moves are odd which is "X"
      else {
        $(this).text("O");
      } ///otherwise is "O".
      move++; //it counts next moves.

    } else {
      console.log("invalid click");
      return false;
    }
  } //if move <=9
  // console.log($(this).text());
  if (winPatterns() !== '') { // it checkes the cell not to be empty.
    if (winPatterns() === 'X') { //it compares the char and choose the winner.
      alert(`player X is the winner.`);
      return;
    } else if ((winPatterns() === 'O')){
      alert(`player O is the winner.`);
      return;

    }
  }
});
