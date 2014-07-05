//----- Player Component -----
// The main player in the game
Crafty.c('Player', {
  init: function() {
    this.requires('Actor, Fourway, Collision, spr_player_stage1')
    .fourway(2)
    .onHit('Enemy', this.health)
    .onHit('Powerup', this.collectPowerup)
    .stopOnSolids();

    this._health = 4;
    this._powerLevel = 1;
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
    this._powerLevel += powerup.powerLevel();

    if(this._powerLevel === 2) {
      this.toggleComponent("spr_player_stage1","spr_player_stage2");
    } else if(this._powerLevel === 3) {
      this.toggleComponent("spr_player_stage2","spr_player_stage3");
    } else if(this._powerLevel === 4) {
      this.toggleComponent("spr_player_stage3","spr_player_stage4");
    }
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