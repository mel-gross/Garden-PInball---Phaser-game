//This is the first thing that loads once game is running (loading page)

var gameObj = {
  // Global variables are decleared here!!
  gScore: 1000,
  gTime: "01:20"
};

gameObj.Boot = function (game) {};

gameObj.Boot.prototype = {
//preloading preload-animation assets
  preload: function () {
    console.log("State - Boot");
        this.load.image('preloaderBg', 'assets/loading-bg.png');
        this.load.image('preloaderBar','assets/loading-bar.png');
  },
  create: function () {
    //Executing Preloader.js
    this.state.start('Preloader');
  }
};
