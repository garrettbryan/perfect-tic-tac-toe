var board = [
  "p","c",0,
  "c","p",0,
  0,0,0
];

var board1;

var game  = new Game();
game.init(board1, "p");
//minimax(game);
console.log(minimax(game));