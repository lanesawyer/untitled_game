//----- Player Component -----
// The main player in the game
Crafty.c('Player', {
  init: function() {
    this.requires('Actor, Fourway, Collision, Color')
    .fourway(2)
    .onHit('Enemy', this.enterEnemy)
    .stopOnSolids()
    .color("#FFFFFF");
  },

  enterEnemy: function(data) {
    var enemy = data[0].obj;
    Crafty.scene('InsideEnemy', enemy);
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