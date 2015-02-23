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

var Game = function() {

};


var Player = function(data) {
  this.color = data.color || red;
}


var Tile = function(data) {
  this.row = ko.observable(data.row);
  this.col = ko.observable(data.col);
  this.player = ko.observable(data.player);

  this.chooseOwner = function() {
    console.log(this.row() +"-" + this.col());
    this.player('player');
  }

}

var ViewModel = function() {

  var self = this;

  this.tileList = ko.observableArray([]);

  tiles.forEach(function(tileItem){
    self.tileList.push( new Tile(tileItem) );
  });

  this.reset = function(){
    ko.utils.arrayForEach(this.tileList(), function(tile){
      console.log(tile.player(0));
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
