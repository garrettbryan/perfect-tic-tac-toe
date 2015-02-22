//model
var tileValues = [];
var tileCount = 9;
for (var i = 0; i < tileCount; i++){
  tileValues[i] = {
    name: i,
    ownedBy: 0
  }
}

var Game = function() {

};



var minimax =  function(game){
  if game.over return (score.game);
    var scores = [],
       moves = [];
    game.getAvailableMoves.forEach(function(move){
      var possibleGame = game.getNewState(move);
      scores.push minimax(possibleGame);
      moves.push move;
    });
    //min or max calculation
    if (game.activeTurn === "player") {
      var index = 0;
      var maxScoreIndex = scores.reduce(function(previous,current){
        return previous > current ? previous:current;
      });
      var choice = movesScoreIndex;
    }
  }
}

var Player = function(data) {
  this.color = data.color || red;
}


var Tile = function(data) {
  this.name = ko.observable(data.name);
  this.ownedBy = ko.observable(data.ownedBy);

  this.chooseOwner = function() {
    console.log(this.name());
    this.ownedBy('player');
  }

}

var ViewModel = function() {

  var self = this;

  this.tileList = ko.observableArray([]);

  tileValues.forEach(function(tileItem){
    self.tileList.push( new Tile(tileItem) );
  });

  this.reset = function(){
    ko.utils.arrayForEach(this.tileList(), function(tile){
      console.log(tile.ownedBy(0));
    });
  };
/*
  this.currentCat = ko.observable( this.catList()[0] );

  this.selectCat = function() {
    self.currentCat(this);
  }

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
*/
}

ko.applyBindings(new ViewModel());
