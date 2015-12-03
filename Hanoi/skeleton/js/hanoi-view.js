var HanoiView = function(game, $el){
  this.$el = $el;
  this.game = game;
  this.setupTowers();
}

HanoiView.prototype.setupTowers = function() {
  for ( var prong = 0; prong < 3; prong++ ) {
    var ul = $("<ul>");
    ul.data("idx", prong);

    for ( var rung = 0; rung < 3; rung++ ) {
      var li = $("<li>");
      ul.append(li);
    }
  this.$el.append(ul);
  }
}

module.exports = HanoiView;
