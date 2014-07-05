//----- Loading Scene -----
// Handles the loading of assets such as images and audio files
Crafty.scene('Loading', function() {

  // Loading text
  Crafty.e('2D, DOM, Text')
    .text('Loading; please wait...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() });

  Crafty.load([
    'assets/player.png'
  ], function() {
    Crafty.sprite(16, 'assets/player.png', {
      spr_player_stage1: [0, 0],
      spr_player_stage2: [1, 0],
      spr_player_stage3: [2, 0],
      spr_player_stage4: [3, 0],
    });

    // Once everything is loaded, start the game
    Crafty.scene('Overworld');
  });
});