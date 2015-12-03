var HanoiView = require('./hanoi-view.js');
var HanoiGame = require('../../hanoi-core-solution/src/game.js');

$(function () {
  console.log("I am available on this page");
  var rootEl = $('.hanoi');
  var game = new HanoiGame();
  new HanoiView(game,rootEl);

});
