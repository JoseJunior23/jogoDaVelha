let board = ['','','','','','','','',''];
let turn = 0;
let symbols = ['o','x'];
let gameOver = false;
let statesWinner =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4,6]
]

function handleMove(position) {

  if(gameOver){
    return;
  }


  if(board[position]== "") {
    board[position] = symbols[turn];

    gameOver = winner();

    if(gameOver == false){

      turn = turn == 0 ? 1 : 0;
      
    }
  }
  return gameOver;  
}


function winner(){
 
  for(let i =0; i < statesWinner.length; i++){
      let sequences = statesWinner[i];

      let position1 = sequences[0];
      let position2 = sequences[1];
      let position3 = sequences[2];

      if(board[position1] != '' && 
        board[position1] == board[position2] && 
        board[position1] == board[position3]
      ){
        return true;
      }
  }
  return false;
}