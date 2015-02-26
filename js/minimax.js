




/*
must choose player.
*/
var Game = function() {
  this.board = [];
  this.totalTurns = 0;
  this.activeTurn = "";
  this.win = "";

};

Game.prototype.init = function(board, turn){
  this.board = board || [
    0,0,0,
    0,0,0,
    0,0,0
  ];
  this.activeTurn = turn || "p";
  console.log (this.board);
}

Game.prototype.getAvailableMoves = function() {
  var moves = [],
    i = 0;
  for (var i = 0; i < this.board.length; i++){
    if (!this.board[i]){
      moves.push(i)
    }
  }
  console.log(moves);
  return moves;
};

Game.prototype.nextPlayer = function(){
  this.activeTurn = (this.activeTurn === "p" ? "c" : "p");
}

Game.prototype.getNewState = function (move) {
  var tempBoard = this.board.concat();
  this.totalTurns++;
  //console.log(tempBoard);
  console.log(this.activeTurn + this.totalTurns);

  tempBoard[move] = this.activeTurn;
  return tempBoard;
};

/*
check if game has a winning configuration
*/
Game.prototype.over = function() {
  var result = false;
  if (this.totalTurns > 4 &&
      ((this.board[0]+this.board[1]+this.board[2]).toString().search(/ppp|ccc/) +1 ||
      (this.board[3]+this.board[4]+this.board[5]).toString().search(/ppp|ccc/) +1 ||
      (this.board[6]+this.board[7]+this.board[8]).toString().search(/ppp|ccc/) +1 ||
      (this.board[0]+this.board[3]+this.board[6]).toString().search(/ppp|ccc/) +1 ||
      (this.board[1]+this.board[4]+this.board[7]).toString().search(/ppp|ccc/) +1 ||
      (this.board[2]+this.board[5]+this.board[8]).toString().search(/ppp|ccc/) +1 ||
      (this.board[0]+this.board[4]+this.board[8]).toString().search(/ppp|ccc/) +1 ||
      (this.board[2]+this.board[4]+this.board[6]).toString().search(/ppp|ccc/) +1 )) {
    console.log("game over");
    result = true;
  }
  return result;
};

var indexOfMaxValue = function(array){
  var maxIndex = 0,
    maxValue = array[0];
  for (var i = 1; i < array.length; i++){
    if (maxValue < array[i]) {
      maxValue = array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

var indexOfMinValue = function(array){
  var minIndex = 0,
    minValue = array[0];
  for (var i = 1; i < array.length; i++){
    if (minValue > array[i]) {
      minValue = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}

var score = function(game) {
  //console.log(game)
  var score = 0;
  if (game.activeTurn === "p") {
    score = -10;
  } else if (game.activeTurn === "c") {
    score = 10;
  } else {
    score = 0;
  }
  console.log("score" + score);
  return score;
};

/*
r.toString().search
http://neverstopbuilding.com/minimax
http://en.wikipedia.org/wiki/Tic-tac-toe
*/
var minimax = function(game){
  console.log(game.board);
  if (game.over()) {
    return score(game);
  }
  var scores = [],
     moves = [];
  //console.log(this.getAvailableMoves);
  game.getAvailableMoves().forEach(function(move){
    console.log(move);
    var possibleGame = new Game();
    possibleGame.init(game.getNewState(move), game.nextPlayer());
    //console.log(possibleGame);
    scores.push(minimax(possibleGame));
    moves.push(move);
  });
  //min or max calculation
  if (game.activeTurn === "c") {
    var maxScoreIndex = indexOfMaxValue(scores);
    var choice = moves[maxScoreIndex];
    return scores[maxScoreIndex];
  }else{
    var minScoreIndex = indexOfMinValue(scores);
    var choice = moves[minScoreIndex];
    return scores[minScoreIndex];
  }
}