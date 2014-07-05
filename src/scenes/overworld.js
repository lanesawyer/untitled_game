//----- Overwold Scene -----
// The main area of the game
Crafty.scene('Overworld', function() {
  // A 2D array to keep track of all occupied tiles
  this.occupied = new Array(Game.map_grid.width);
  for (var i = 0; i < Game.map_grid.width; i++) {
    this.occupied[i] = new Array(Game.map_grid.height);
    for (var y = 0; y < Game.map_grid.height; y++) {
      this.occupied[i][y] = false;
    }
  }

  createPlayer(this);
  createEnemies(this);
  createWorld(this);
});

var createWorld = function(scene) {

};

var createEnemies = function (scene) {
  scene.enemy = Crafty.e('Enemy').at(15, 15);
};

var createPlayer = function(scene) {
  scene.player = Crafty.e('Player').at(10, 10);
  scene.occupied[scene.player.at().x][scene.player.at().y] = true;
};