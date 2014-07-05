//----- Overwold Scene -----
// The main area of the game
Crafty.scene('Overworld', function() {
  // A 2D array to keep track of all occupied tiles
  this.occupied = new Array(Game.map_grid.width);
  for(var i = 0; i < Game.map_grid.width; i++) {
    this.occupied[i] = new Array(Game.map_grid.height);
    for(var y = 0; y < Game.map_grid.height; y++) {
      this.occupied[i][y] = false;
    }
  }

  createPlayer(this);
  createEnemies(this);
  createWorld(this);
});

var createPlayer = function(scene) {
  scene.player = Crafty.e('Player').at(10, 10);
  scene.occupied[scene.player.at().x][scene.player.at().y] = true;
};

var createEnemies = function (scene) {
  scene.enemy = Crafty.e('Enemy').at(15, 15);
  scene.enemy.setSize(Game.map_grid.tile.width * 6, Game.map_grid.tile.height * 6);
  scene.occupied[scene.enemy.at().x][scene.enemy.at().y] = true;
};

var createWorld = function(scene) {
  for(var x = 0; x < Game.map_grid.width; x++) {
    for(var y = 0; y < Game.map_grid.height; y++) {
      if(Math.random() < 0.01 && !scene.occupied[x][y]) {
        var object = Math.floor(Math.random() * 3);
        if(object == 0) {
          Crafty.e('Tree').at(x, y);
        } else if(object == 1) {
          Crafty.e('Bush').at(x, y);
        } else if(object == 2) {
          Crafty.e('Rock').at(x, y);
        }
        scene.occupied[x][y] = true;
      }
    }
  }
};