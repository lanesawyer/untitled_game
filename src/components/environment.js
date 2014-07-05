//----- Tree Component -----
Crafty.c('Tree', {
  init: function() {
    this.requires('Actor, Solid, Color')
    .color("#FF0000");

    this.setSize(Game.map_grid.tile.width, Game.map_grid.tile.height * 3);
  },
});
 
//----- Bush Component -----
Crafty.c('Bush', {
  init: function() {
    this.requires('Actor, Solid, Color')
    .color("#00FF00");

    this.setSize(Game.map_grid.tile.width, Game.map_grid.tile.height);
  },
});
 
//----- Rock Component -----
Crafty.c('Rock', {
  init: function() {
    this.requires('Actor, Solid, Color')
    .color("#0000FF");

    this.setSize(Game.map_grid.tile.width, Game.map_grid.tile.height);
  },
});