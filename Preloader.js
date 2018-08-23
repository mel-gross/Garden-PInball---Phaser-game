gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
    preload: function () {
        console.log("Preloader");
        //change stage background color to light green
        this.stage.backgroundColor = "#ACDEB8";

        //Progress bar animation 
        this.preloadBg = this.add.sprite((720 - 800) / 2, (960 - 300) / 2, 'preloaderBg');
        //width of stage, minus width of image divided by two, same for height
        this.preloadBar = this.add.sprite((720 - 800) / 2, (960 - 300) / 2, 'preloaderBar');
        //creates preloader animation !(will computer how long it will take to load and fill it accordingly) 
        this.load.setPreloadSprite(this.preloadBar);

        //  Load the Google WebFont Loader script
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        //assets
        //intro screen
        this.load.image('logo', 'assets/logo.jpg');
        this.load.image('stopWatch', 'assets/stopWatchIcon.png');
        this.load.spritesheet('playButton', 'assets/startGameButton.png', 402, 112);
        this.load.image('flower', 'assets/flowerStart.png');
        this.load.image('leaf', 'assets/bounceLeaf04.png');
        this.load.image('succ', 'assets/succ02.png');

        //game screen
        this.load.image('ball', 'assets/ball.png');
        this.load.image('bounceLeaf01', 'assets/bounceLeaf01.png');
        this.load.image('bounceLeaf02', 'assets/bounceLeaf02.png');
        this.load.image('bounceLeaf03', 'assets/bounceLeaf03.png');
        this.load.image('bounceLeaf04', 'assets/bounceLeaf04.png');
        this.load.image('bounceLeafCorner', 'assets/bounceLeafCorner.png');
        this.load.image('bounceBushCorner', 'assets/cornerBush.png');
        this.load.image('slideLeaf01', 'assets/slideLeaf01.png');
        this.load.image('slideLeaf02', 'assets/slideLeaf02.png');
        this.load.image('succ01', 'assets/succ01.png');
        this.load.image('succ02', 'assets/succ02.png');
        this.load.image('succ03', 'assets/succ03.png');
        this.load.image('tube', 'assets/tube.png');
        this.load.image('vine01', 'assets/vine01.png');
        this.load.image('vine02', 'assets/vine02.png');
        this.load.image('leftFlipper', 'assets/leftFlipper.png');
        this.load.image('rightFlipper', 'assets/rightFlipper.png');
        this.load.image('miniSuccLeft', 'assets/lefMiniSucc.png');
        this.load.image('miniSuccRight', 'assets/rightMiniSucc.png');

        //score screens
        this.load.image('loserBackground', 'assets/loserBackground.png');
        this.load.image('loserFrame', 'assets/loserFrame.png');
        this.load.image('winnerBackground', 'assets/winnerBackground.png');
        this.load.image('winnerFrame', 'assets/winnerFrame.png');
        this.load.spritesheet('replayButton', 'assets/winnerPlayAgainButton.png', 402, 155);
        this.load.spritesheet('replayButton', 'assets/loserPlayAgainButton.png', 402, 155);

        // Load temp buttons
        this.load.spritesheet('winButton', 'assets/btn_win.png', 90, 90);
        this.load.spritesheet('loseButton', 'assets/btn_lose.png', 90, 90);
        this.load.spritesheet('pointsButton', 'assets/btn_points.png', 90, 90);
    },
    
    create: function () {
        this.state.start('Main');
        }
};
    
