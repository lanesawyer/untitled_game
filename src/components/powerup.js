//----- Enemy Component -----
// The main file to determine enemy behavior
Crafty.c('Powerup', {
  init: function () {
    this.requires('Actor, Color')
    .color('#555555');
  },

  powerLevel: function(powerLevel) {
    if(powerLevel === undefined) {
      return this._power;
    } else {
      this._power = powerLevel;
      return this;
    }
  },

  collect: function() {
    this.destroy();
  }
});