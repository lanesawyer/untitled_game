//----- Loading Scene -----
// Handles the loading of assets such as images and audio files
Crafty.scene('Loading', function() {

  // Loading text
  Crafty.e('2D, DOM, Text')
    .text('Loading; please wait...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() });

  // Once everything is loaded, start the game
  Crafty.scene('Overworld');
});