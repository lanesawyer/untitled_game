//----- Enemy Component -----
// The main file to determine enemy behavior
Crafty.c('Enemy', {
  init: function() {
    this.requires('Actor, Color')
    .color("#000000");
  },

  // Used to set or get damage caused by an enemy
  damage: function(damage) {
    if(damage === undefined) {
      return this._damage;
    } else {
      this._damage = damage;
      return this;
    }
  },
});