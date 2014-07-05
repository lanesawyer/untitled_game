//----- Player Component -----
// The main player in the game
Crafty.c('Player', {
  init: function() {
    this.requires('Actor, Fourway, Collision, spr_player_stage0_level0')
    .fourway(2)
    .onHit('Enemy', this.health)
    .onHit('Powerup', this.collectPowerup)
    .stopOnSolids();

    this._health = 4;
    this._powerLevel = 0;
    this._stage = 0;
  },

  health: function(data) {
    var enemy = data[0].obj;
    this._health -= enemy.damage();
    if(this._health <= 0) {
      console.log('Game Over');
    }
  },

  collectPowerup: function(data) {
    var powerup = data[0].obj;
    var oldPowerLevel = this._powerLevel;
    this._powerLevel += powerup.powerLevel();

    if(this._powerLevel % 5 === 0) {
      this._stage += 1;
    }

    console.log(this._stage);
    console.log(this._powerLevel);

    this.toggleComponent("spr_player_stage" + this._stage + "_level" + oldPowerLevel,"spr_player_stage" + this._stage + "_level" + this._powerLevel);

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