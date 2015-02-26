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

var Computer = function() {
}

Computer.prototype.random = function() {
  var choice = Math.floor(Math.random())*viewModel.tileList.length;
  viewModel.tileList[choice].player('computer').flipped(1);
}

var Tile = function(data, vm) {
  this.row = ko.observable(data.row);
  this.col = ko.observable(data.col);
  this.player = ko.observable(data.player);
  this.flipped = ko.observable(0);

  this.chooseOwner = function() {
    if (vm.freshGame()){
      console.log(this.row() +"-" + this.col());
      this.player('player');
      this.flipped(1);
      do {
        var len = vm.tileList().length,
          choice = Math.floor(Math.random() * len);
        console.log(vm.tileList().length);
      } while (vm.tileList()[choice].flipped() === 1)
      vm.tileList()[choice].player('computer');
      vm.tileList()[choice].flipped(1);
      console.log(vm.tileList()[choice].player());
    }
  }
}


var viewModel = function() {

  var self = this;
  this.freshGame = ko.observable(1);
  this.hoodOpen = ko.observable(0);
  this.tileList = ko.observableArray([]);

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
    this.freshGame(0);
    ko.utils.arrayForEach(this.tileList(), function(tile){
      tile.flipped(0);
      setTimeout(function () {
        tile.player(0);
        self.freshGame(1);
      }, 500);
    });
  };
};

viewModel.player = ko.pureComputed(function(){
});



ko.applyBindings(new viewModel());
