//----- HUD Components -----
// The Heads Up Display shows vital information
Crafty.c('HealthBar', {
  init: function() {
    this.requires('2D, Canvas, Color')
    .attr({ w: 100, h: 20, x: 15, y: 15 })
    .color('#FF0033');
  }
});

Crafty.c('PowerLevelBar', {
  init: function() {
    this.requires('2D, Canvas, Color')
    .attr({ w: 100, h: 20, x: Game.map_grid.width * Game.map_grid.tile.width - 115, y: 15 })
    .color('#3300FF');
  }
});
