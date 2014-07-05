//----- Enemy Component -----
// The main file to determine enemy behavior
Crafty.c('Enemy', {
  init: function() {
    this.requires('Actor, Color')
    .color("#000000");
  },
});