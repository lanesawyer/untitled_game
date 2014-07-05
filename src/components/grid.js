//----- Grid Component -----
// This provides a grid in which to place items
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },

  setSize: function(width, height) {
    this.w = width;
    this.h = height;
  },
 
  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  },

  // Sets the entity to a random position on the grid
  // TODO: Ensure spawn at empty grid point
  atRandom: function() {
    var randomX = Math.floor(Math.random() * Game.map_grid.width) * Game.map_grid.tile.width;
    var randomY = Math.floor(Math.random() * Game.map_grid.height) * Game.map_grid.tile.height;

    this.attr({ 
      x: randomX,
      y: randomY
    });
    return this; 
  }
});
 
// An "Actor" is an entity that is drawn in 2D on canvas
// via our logical coordinate grid
Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  },
});
