//model
var tileValues = [];
var tileCount = 9;
for (var i = 0; i < tileCount; i++){
  tileValues[i] = {
    name: i,
    ownedBy: 0
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
