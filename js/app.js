//model

var tiles = [
  {
    row: 'top',
    col: 'left',
    player: 0,
  },
  {
    row: 'top',
    col: 'center',
    player: 0,
  },
  {
    row: 'top',
    col: 'right',
    player: 0,
  },
  {
    row: 'middle',
    col: 'left',
    player: 0,
  },
  {
    row: 'middle',
    col: 'center',
    player: 0,
  },
  {
    row: 'middle',
    col: 'right',
    player: 0,
  },
  {
    row: 'bottom',
    col: 'left',
    player: 0,
  },
  {
    row: 'bottom',
    col: 'center',
    player: 0,
  },
  {
    row: 'bottom',
    col: 'right',
    player: 0,
  },
];

/*
TODO: separate concerns.
  I: Model
    A: Game
      1:board
        a: 3x3 array of tiles
      2:potential tile values either be x,o,0
      3:turn: boolean
        a: while true human player's turn
        b: while false all input events are disregarded.
        c: starting after turn 5, begin checking for a victory
      4:time
    B: Player
      1: score
      2: speed
      3: controller
        a: human
        b: ai
          i: perfect
          ii: random
*/



var Game = function() {

};


var Player = function(data) {
  this.color = data.color || red;
}





var Tile = function(data, vm) {
var tile = this;
  this.x = '<div class="player-mark"><i class="fa-5x fa fa-times text-center"></i></div>'
  this.o = '<div class="player-mark"><i class="fa-5x fa fa-circle-o text-center"></i></div>'
  this.row = ko.observable(data.row);
  this.col = ko.observable(data.col);
  this.player = ko.observable(data.player);
  this.flipped = ko.observable(0);


  this.chooseOwner = function() {
    if (vm.gameState()){
      console.log(this.row() +"-" + this.col());
      this.player(this.x);
      this.flipped(1);
      do {
        var len = vm.tileList().length,
          choice = Math.floor(Math.random() * len);
        console.log(vm.tileList().length);
      } while (vm.tileList()[choice].flipped() === 1)
      vm.thinking(true);
      setTimeout(function() {
        vm.thinking(false);
        vm.decision(true);
        console.log('light');
      }, 1000);
      setTimeout(function(){
        console.log('off');
        vm.decision(false);
        vm.tileList()[choice].player(tile.o);
        vm.tileList()[choice].flipped(1)
      }, 1500)
      //console.log(vm.tileList()[choice].player());
    }
  }
}



/*
All interactions happen from the viewModel.
  There are 3 game states.
    1. start - who goes first
    2. playing - each round is composed of a single move by each player.
    3. over - when all board positions have been filed or there are three in a row.
      The earliest that a player may win a game is the first move of round 3, aka move 5
.  There are 2 difficulty levels. They can be changed at any time.
    1. random
    2. perfect opponent.
*/
var viewModel = function() {

  var self = this;
  this.thinking = ko.observable(false);
  this.decision = ko.observable(false);
  this.gameTime = ko.observable(0);
  this.difficulty = ko.observable(1);
  this.gameState = ko.observable('start');
  this.hoodOpen = ko.observable(0);
  this.tileList = ko.observableArray([]);
  this.currentPlayer = ko.observable('player');
  this.move = 0;
  var t0 = Date.now();
  setInterval(function(){
    t1 = Date.now();
    dt =  t1 - t0;
    console.log(self.gameTime() + dt);
    self.gameTime(self.gameTime() + dt);
    t0 = t1;
  }, 100)

  tiles.forEach(function(tileItem){
    self.tileList.push( new Tile(tileItem, self) );
  });

  this.playerSelectTile = function() {

  };

  this.openHood = function(){
    this.hoodOpen(this.hoodOpen() === 0 ? 1 : 0);
    console.log(this.hoodOpen());
  };

//setInterval(function () {alert("Hello")}, 3000);

  this.reset = function(){
    console.log(self.cog);
    this.gameState(0);
    ko.utils.arrayForEach(this.tileList(), function(tile){
      tile.flipped(0);
      setTimeout(function () {
        tile.player(0);
        self.gameState(1);
      }, 500);
    });
  };
};

viewModel.player = ko.pureComputed(function(){
  return this.currentPlayer(this.currentPlayer() === 'player' ? 'computer' : 'player');
  }, viewModel);

viewModel.gameOver = function() {
  var result = false;
  if (this.move > 4 &&
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
}

ko.applyBindings(new viewModel());
