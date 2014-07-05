Game = {

  // Creates a grid of 70x50 using 16x16 tiles
  map_grid: {
    width: 70,
    height: 50,
    tile: {
      width: 16,
      height: 16
    }
  },

  // Returns the total width of the game screen (map width * tile width)
  width: function() {
    return this.map_grid.width * this.map_grid.tile.width;
  },

  // Returns the total height of the game screen (map height * tile height)
  height: function() {
    return this.map_grid.height * this.map_grid.tile.height;
  },

  // Initialize and start the game
  start: function() {
    Crafty.init(Game.width(), Game.height());
    Crafty.background('rgb(87, 109, 20)');

    // Start at the loading screen to give everything time to load
    Crafty.scene('Loading');
  }
}

// Start the game once the page loads
window.addEventListener('load', Game.start);