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


var Tile = function(data, model) {
  this.row = ko.observable(data.row);
  this.col = ko.observable(data.col);
  this.player = ko.observable(data.player);
  this.flipped = ko.observable(0);

  this.chooseOwner = function() {
    if (model.freshGame()){
      console.log(this.row() +"-" + this.col());
      this.player('player');
      this.flipped(1);
    }
  }

}


var ViewModel = function() {

  var self = this;
  this.freshGame = ko.observable(1);
  this.hoodOpen = ko.observable(0);
  this.tileList = ko.observableArray([]);
  this.cog = $('.glyphicon-cog');
  this.cogMovement = {
    angle: 12,
    jitter: {
      x: 0,
      y: 0
    }
  };

  tiles.forEach(function(tileItem){
    self.tileList.push( new Tile(tileItem, self) );
  });

  this.animateCog = function(){
    setInterval(function(){
        this.cog.style.transform = "rotate(" + this.cogMovement.angle + "deg)"
        this.cog.style.transform = "translate" + this.cogMovement.
    })
    this.cog.style.transform = "rotate("
  }

  this.openHood = function(){
    this.hoodOpen(this.hoodOpen() === 0 ? 1 : 0);
    console.log(this.hoodOpen());
  };

//setInterval(function () {alert("Hello")}, 3000);

  this.reset = function(){
    this.freshGame(0);
    ko.utils.arrayForEach(this.tileList(), function(tile){
      tile.flipped(0);
      setTimeout(function () {
        tile.player(0);
        self.freshGame(1);
      }, 500);
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
