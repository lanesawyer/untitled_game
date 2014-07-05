//----- Player Component -----
// The main player in the game
Crafty.c('Player', {
  init: function() {
    this.requires('Actor, Fourway, Collision, Color')
    .fourway(2)
    .onHit('Enemy', this.enterEnemy)
    .color("#FFFFFF");
  },

  enterEnemy: function(data) {
    Crafty.scene('InsideEnemy');
  }
});