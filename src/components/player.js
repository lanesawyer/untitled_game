//----- Player Component -----
// The main player in the game
Crafty.c('Player', {
  init: function() {
    this.requires('Actor, Fourway, Collision, Color')
    .fourway(2)
    .onHit('Enemy', this.health)
    .onHit('Powerup', this.collectPowerup)
    .stopOnSolids()
    .color("#FFFFFF");

    this._health = 4;
    this.powerLevel = 0;
  },

  health: function(data) {
    var enemy = data[0].obj;
    this._health -= enemy.damage();
    console.log(this._health);
    if(this._health <= 0) {
      console.log('Game Over');
    }
  },

  collectPowerup: function(data) {
    var powerup = data[0].obj;
    this.powerLevel += powerup.powerLevel();
    powerup.collect();
  },

  // Registers a stop-movement function to be called when
  //  this entity hits an entity with the "Solid" component
  stopOnSolids: function() {
    this.onHit('Solid', this.stopMovement);
    return this;
  },
 
  // Stops the movement
  stopMovement: function() {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  },
});