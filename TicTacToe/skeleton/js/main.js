var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  var el = $('.ttt');
  var game = new Game();
  new View(game, el);
  // Your code here
});
