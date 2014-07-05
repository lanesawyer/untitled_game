//----- Player Component -----
// The main player in the game
Crafty.c('Player', {
  init: function() {
    this.requires('Actor, Fourway, Color')
    .fourway(2)
    .color("#FFFFFF");
  }
});