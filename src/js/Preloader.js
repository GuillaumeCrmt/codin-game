g.Preloader = function(game) {};
g.Preloader.prototype = {
	preload: function() {
		this.preloadBg = this.add.sprite((g._WIDTH-297)*0.5, (g._HEIGHT-145)*0.5, 'preloaderBg');
		this.preloadBar = this.add.sprite((g._WIDTH-158)*0.5, (g._HEIGHT-50)*0.5, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('starfield', 'assets/img/deep-space.png');
		this.load.image('item', 'assets/img/item.png');
		this.load.image('panel', 'assets/img/panel.png');
		this.load.image('panel-box', 'assets/img/panel-box.png');
		this.load.image('panel-left', 'assets/img/panel-left.png');
		this.load.image('title', 'assets/img/title.png');
		this.load.image('screen-bg', 'assets/img/game-plate.png');

		this.load.image('border-horizontal', 'assets/img/border-horizontal.png');
		this.load.image('border-vertical', 'assets/img/border-vertical.png');

		// START GAME IMAGE LOAD
		this.load.image('building-mainmenu', 'assets/img/building-mainMenu.png');
		this.load.image('sky-mainmenu', 'assets/img/sky-mainMenu.png');
		this.load.image('clouds-mainmenu', 'assets/img/clouds-mainMenu.png');
		this.load.image('clouds-1', 'assets/img/clouds-1.png');
		this.load.image('clouds-2', 'assets/img/clouds-2.png');
		this.load.image('clouds-3', 'assets/img/clouds-3.png');
		this.load.image('clouds-4', 'assets/img/clouds-4.png');

		this.load.image('plane', 'assets/img/plane.png');
		this.load.image('sucess', 'assets/img/sucess.png');

		// GAME IMAGE LOAD
		//		BOX BUTTON
		this.load.image('add', 'assets/buttons/button-add.png');
		this.load.image('copyfrom', 'assets/buttons/button-copyfrom.png');
		this.load.image('copyto', 'assets/buttons/button-copyto.png');
		this.load.image('dec', 'assets/buttons/button-dec.png');
		this.load.image('inbox', 'assets/buttons/button-inbox.png');
		this.load.image('inc', 'assets/buttons/button-inc.png');
		this.load.image('jump', 'assets/buttons/button-jump.png');
		this.load.image('jumpn', 'assets/buttons/button-jumpn.png');
		this.load.image('jumpz', 'assets/buttons/button-jumpz.png');
		this.load.image('outbox', 'assets/buttons/button-outbox.png');
		this.load.image('sub', 'assets/buttons/button-sub.png');
		this.load.image('label', 'assets/buttons/button-label.png');
		this.load.image('mark', 'assets/buttons/mark.png');


		//		STATE BUTTON

		this.load.spritesheet('button-home', 'assets/buttons/button-home.png', 30, 30);
		this.load.spritesheet('button-play-speed', 'assets/buttons/button-play.png', 24, 25);
		this.load.spritesheet('button-pause', 'assets/buttons/button-pause.png',24,25);
		this.load.spritesheet('button-stop', 'assets/buttons/button-stop.png',24,25);
		this.load.spritesheet('button-nextStep','assets/buttons/button-nextStep.png',24,25);
		this.load.spritesheet('button-nextStep','assets/buttons/button-nextStep.png',24,25);
		this.load.image('lastKey','assets/buttons/lastKey.png');

		//		PLAYER SHEET
		this.load.spritesheet('player', 'assets/img/player.png', 100, 90);
		this.load.spritesheet('drone', 'assets/img/drone.png', 35, 46);

		// LEVEL SHEET
		this.load.spritesheet('levelSelection', 'assets/img/level-selection.png', 30, 28);
		this.load.bitmapFont('font72', 'assets/font/font72.png', 'assets/font/font72.xml');

	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
