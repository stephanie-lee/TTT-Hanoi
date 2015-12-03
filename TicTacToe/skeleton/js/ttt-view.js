var View = function (game, $el) {
  this.$el = $el;
  this.game = game;

  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.on("click", "li", (function(event) {
    var square = event.currentTarget;
    this.makeMove(square);
  }).bind(this))
};

View.prototype.makeMove = function (square) {
  var pos = $(square).data("pos");
  var currentPlayer = this.game.currentPlayer;

  try{
    this.game.playMove(pos);
  } catch(e) {
    alert("Not good move dummy!");
    return;
  }

  $(square).addClass(currentPlayer);

  if(this.game.isOver()) {
    this.$el.off("click");
    var caption = $("<figcaption>");
    var winner = this.game.winner();
    this.$el.addClass("gameover")

    if (winner) {
      caption.html(winner + " wins!");
      this.$el.addClass(winner + "-won");
    } else {
      caption.html("It's a tie.");
    }

    this.$el.append("<br>");
    this.$el.append(caption);
  }
};

View.prototype.setupBoard = function () {
  var ul = $("<ul>");
  ul.addClass("group");

  for ( var rowIdx = 0; rowIdx < 3; rowIdx++ ) {
    for ( var colIdx = 0; colIdx < 3; colIdx++ ){
      var li = $("<li>");
      li.data("pos", [rowIdx, colIdx]);
      ul.append(li);
    }
  }

  this.$el.append(ul);
};

module.exports = View;
