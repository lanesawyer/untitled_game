//----- Loading Scene -----
// Handles the loading of assets such as images and audio files
Crafty.scene('Loading', function() {

  // Loading text
  Crafty.e('2D, DOM, Text')
    .text('Loading; please wait...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() });

  Crafty.load([
    'assets/player_stage0.png',
    'assets/player_stage1.png'
  ], function() {
    // Player Stage 0
    Crafty.sprite(16, 'assets/player_stage0.png', {
      spr_player_stage0_level0: [0, 0],
      spr_player_stage0_level1: [1, 0],
      spr_player_stage0_level2: [2, 0],
      spr_player_stage0_level3: [3, 0],
      spr_player_stage0_level4: [4, 0],
    });

    // Player Stage 1
    Crafty.sprite(32, 'assets/player_stage1.png', {
      spr_player_stage1_level5: [0, 0],
      spr_player_stage1_level6: [1, 0],
      spr_player_stage1_level7: [2, 0],
      spr_player_stage1_level8: [3, 0],
      spr_player_stage1_level9: [4, 0],
    });

    // Once everything is loaded, start the game
    Crafty.scene('Overworld');
  });
});