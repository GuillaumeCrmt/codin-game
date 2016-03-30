
var Player = {

	sprite : null,

	game : null,

	init: function(game) {
		this.game = game;
		this.sprite = this.game.add.sprite(20,20,'player');
	},

	moveTo: function(x,y) {
		this.game.add.tween(this.sprite).to( { x: x , y: y }, 200, Phaser.Easing.Linear.None, true);
	},

	take: function(item) {
		item.sprite.x = 0;
		item.sprite.y = 0;
		this.sprite.addChild(item.sprite);
	}
};