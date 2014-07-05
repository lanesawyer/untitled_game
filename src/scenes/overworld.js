//----- Overwold Scene -----
// The main area of the game
Crafty.scene('Overworld', function() {
  this.player = Crafty.e('Player').at(10, 10);
  console.log(this.player);
});