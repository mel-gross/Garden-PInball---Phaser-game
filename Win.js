gameObj.Win = function (game) {};

gameObj.Win.prototype = {
  create: function () {
    console.log('State - stateTemplate');
//---BACKGROUND:---
        this.stage.backgroundColor = "#f8f8f8";
          
        //---GRAPHICS:---
        var rectangleGrp = this.add.graphics(0,0);
        rectangleGrp.beginFill(0xFF8F08);
        rectangleGrp.lineTo(720,0);
        rectangleGrp.lineTo(720,150);
        rectangleGrp.lineTo(0,150);
        rectangleGrp.endFill();
          
        
        //---IMAGES:---
        var background = this.add.image(this.world.centerX, this.world.centerY, 'winnerBackground');
            background.anchor.set(0.5);
          
        var frame = this.add.image(345, 565, 'winnerFrame');
            frame.anchor.set(0.5);
            frame.scale.setTo(.52,.47);
          
          
        //---SCORE AND TEXT:---
        var generalStyle = { width: '150px',font: '30px Trebuchet MS', fill: 'balck', align: 'left'};
        var numberStyle = { width: '150px', font: '65px Trebuchet MS', fill: 'balck', align: 'left', strokeThickness: '2.5'};
        var titleStyle = {width: '150px', font: '100px Trebuchet MS', fill: "#F5F88D", align: 'left', strokeThickness: '4', stroke:'#F5F88D'};
          
        var titleStr = "YOU WON!";
          
        var scoreTitleStr = "FINAL SCORE:";
        var  scoreNum = gameObj.gScore;
        var pointsStr = "points";
          
        var timeTitleStr = "FINAL TIME:";
        var timeStr = gameObj.gTime;
        var minutesStr = "minutes";
        
        var txTitle = this.add.text(this.world.centerX, 80, titleStr, titleStyle);
            txTitle.anchor.set(0.5,0.5);
        
        var txScoreTitle = this.add.text(155,400, scoreTitleStr, generalStyle);
        var txScore = this.add.text(190,455, scoreNum, numberStyle);
        var txPoints = this.add.text(200,550, pointsStr, generalStyle);
          
        var txTimeTitle = this.add.text(405,400, timeTitleStr, generalStyle);
        var txTime = this.add.text(400, 450, timeStr, numberStyle);
        var txMinutes = this.add.text(427,550, minutesStr, generalStyle);
          
        //---BUTTON:---
        var btPlay = this.add.button(this.world.centerX, 620, 'replayButton', this.actionOnClick, this, 1, 0, 2 );
          btPlay.anchor.setTo(0.5, 0);
        // widht, height, key, function called, this, Over, out, down

        
         }, 
    //look separate functions with coma!
     actionOnClick: function () {
        console.log('play button clicked');
        this.state.start('Play');
      }
};

