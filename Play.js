gameObj.Play = function (game) {
    //Make local vars for all functions in this file
    var txScore; // Display text score
    var timerObj; //timer Object
    var timerSeconds; //Current count down time
    var txTime;
    var leftKey;
    var rightKey;
    var leftFlipper;
    var rightFlipper;
    var spBall;
	var ballCollisionGroup;
	var flippersCollisionGroup;
};

gameObj.Play.prototype = {
    create: function () {
        console.log('play - playTemplate');
        //---BACKGROUND:---
        this.stage.backgroundColor = "#ACDEB8";
        
        
        //---GRAPHICS:---
        var rectangleGrp = this.add.graphics(0, 0);
        rectangleGrp.beginFill(0xF8F8F8);
        rectangleGrp.lineTo(720, 0);
        rectangleGrp.lineTo(720, 100);
        rectangleGrp.lineTo(0, 100);
        rectangleGrp.endFill();

        //---SPRITES:---
        var spLogo = this.add.sprite(this.world.centerX, 5, 'logo');
        spLogo.scale.setTo(.25, .25);
        spLogo.anchor.setTo(0.5, 0);
        var icStopWatch = this.add.sprite(500, 30, 'stopWatch');
        icStopWatch.scale.setTo(.4, .4);
        
        spBall = this.add.sprite(220, 100, 'ball');
        spBall.scale.setTo(.45, .45);
        
        var spTube = this.add.sprite(630, 250, 'tube');
        spTube.scale.setTo(.35, .35);

        var spSucc1 = this.add.sprite(280, 300, 'succ01');
        spSucc1.scale.setTo(.35, .35);
        var spSucc2 = this.add.sprite(430, 200, 'succ02');
        spSucc2.scale.setTo(.35, .35);
        var spSucc3 = this.add.sprite(150, 170, 'succ03');
        spSucc3.scale.setTo(.35, .35);

        var spVine01 = this.add.sprite(190, 460, 'vine01');
        spVine01.scale.setTo(.4, .4);
        var spVine02 = this.add.sprite(70, 380, 'vine02');
        spVine02.scale.setTo(.4, .4);

        var spSlideLeaf01 = this.add.sprite(0, 660, 'slideLeaf01');
        spSlideLeaf01.scale.setTo(.45, .45);
        var spSlideLeaf02 = this.add.sprite(290, 370, 'slideLeaf02');
        spSlideLeaf02.scale.setTo(.35, .35);
        spSlideLeaf02.angle += -8;

        var spBounceLeafCorner = this.add.sprite(0, 100, 'bounceLeafCorner');
        spBounceLeafCorner.scale.setTo(.35, .35);
        var spBounceBushCorner = this.add.sprite(500, 100, 'bounceBushCorner');
        spBounceBushCorner.scale.setTo(.35, .35);
        var spBounceLeaf01 = this.add.sprite(320, 660, 'bounceLeaf01');
        spBounceLeaf01.scale.setTo(.35, .35);
        var spBounceLeaf02 = this.add.sprite(550, 660, 'bounceLeaf02');
        spBounceLeaf02.scale.setTo(.45, .45);
        var spBounceLeaf03 = this.add.sprite(620, 470, 'bounceLeaf03');
        spBounceLeaf03.scale.setTo(.45, .45);
        var spBounceLeaf04 = this.add.sprite(440, 560, 'bounceLeaf04');
        spBounceLeaf04.scale.setTo(.45, .45);

        var miniSuccRight = this.add.sprite(520, 840, 'miniSuccRight');
        miniSuccRight.scale.setTo(.45, .45);
        var miniSuccLeft = this.add.sprite(150, 840, 'miniSuccLeft');
        miniSuccLeft.scale.setTo(.45, .45);
        
        leftFlipper = this.add.sprite(190, 810, 'leftFlipper');
        leftFlipper.scale.setTo(1);
        rightFlipper = this.add.sprite(470, 800, 'rightFlipper');
        rightFlipper.scale.setTo(1);

        //TEMPORARY BUTTONS
        //btPoints = this.add.button(210, 855, 'pointsButton', this.pointsFun, this, 1, 0, 2);
        gameObj.gScore = 0;
        var btWin = this.add.button(20, 855, 'winButton', this.winnerFun, this, 1, 0, 2);
        var btLose = this.add.button(595, 855, 'loseButton', this.loserFun, this, 1, 0, 2);


        //---SCORE AND TEXT:---
        var numberStyle = {
            width: '150px',
            font: '65px Trebuchet MS',
            fill: 'balck',
            align: 'left'
        };
        var scoreNum = gameObj.gScore;
        txScore = this.add.text(75, 15, scoreNum, numberStyle);
        //txScore.scale.setTo(2, 2);

        //COUNTDOWN'
        var timeStr = gameObj.gTime;
        gameObj.gTime = '01:20';
        txTime = this.add.text(550, 15, timeStr, numberStyle);
        timerSeconds = 80; //total timer = 01:20;
        timerObj = this.game.time.create(false);
        //create timer object using Phaser built in function. 
        //Look! its a "game." false is for auto destory option. 
        timerObj.loop(1000, this.updateTimerFun, this);
        //set timer to occur every 1 sec. 
        //Parameters: how often in miliseconds, function call, existis inside the obj
        timerObj.start(); //start timer
    
        //CONTROLLERS            
        leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        leftKey.onDown.add(this.leftFlipperDown, this);
        leftKey.onUp.add(this.leftFlipperUp, this);
        rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        rightKey.onDown.add(this.rightFlipperDown, this);
        rightKey.onUp.add(this.rightFlipperUp, this);
        leftFlipper.inputEnabled = true;
        leftFlipper.events.onInputDown.add(this.leftFlipperDown, this);
        leftFlipper.events.onInputUp.add(this.leftFlipperUp, this);
        rightFlipper.inputEnabled = true;
        rightFlipper.events.onInputDown.add(this.rightFlipperDown, this);
        rightFlipper.events.onInputUp.add(this.rightFlipperUp, this);
        

        //GAME PHYSICS
		this.physics.startSystem(Phaser.Physics.P2JS);//p2 physics
        this.physics.p2.gravity.y = 100; //adds gravity to the game
		//this.physics.p2.setImpactEvents(true);
		this.physics.p2.restitution = 1.0;
		
		var spriteMaterial = this.physics.p2.createMaterial('spriteMaterial');
   		var worldMaterial = this.physics.p2.createMaterial('worldMaterial');
    	var contactMaterial = this.physics.p2.createContactMaterial(spriteMaterial, worldMaterial, { restitution: 1.0 });
		this.physics.p2.setWorldMaterial(worldMaterial);
		
		var flippers = this.add.group();
		flippers.enableBody = true;
		flippers.physicsBodyType = Phaser.Physics.P2JS;
		
		this.physics.p2.enable([spBall, leftFlipper, rightFlipper]);
		
    	spBall.body.setCircle(10);
		spBall.body.data.gravityScale = 1;
		spBall.body.setMaterial(spriteMaterial);
		spBall.body.data.gravityScale = 1;
		
		leftFlipper.body.clearShapes();
		leftFlipper.body.loadPolygon('physicsData', 'leftFlipper');
		leftFlipper.body.data.gravityScale = 0;
		leftFlipper.body.setMaterial(spriteMaterial);
		
		rightFlipper.body.clearShapes();
		rightFlipper.body.loadPolygon('physicsData', 'rightFlipper');
		rightFlipper.body.setMaterial(spriteMaterial);
		rightFlipper.body.data.gravityScale = 0;
		
		
		spBall.body.onBeginContact.add(this.blockHit, this);
		
		
        //this.physics.p2.checkCollision.down = false; //makes the top, left and right walls bounce, but the bottom not
        //this.physics.p2.enable([spBall, leftFlipper, rightFlipper], Phaser.Physics.p2); //which sprites will be affected by the p2 physics
        
        
        //BALL PHYSICS
        //spBall.body.gravity.y = 100;
        //spBall.checkWorldBounds = true;
        //spBall.events.onOutOfBounds.add(this.loserFun, this); //ends game when ball falls past the bottom of the screen
        //spBall.body.bounce.setTo(.9,.9);
        //spBall.body.checkCollision = true;
        
        //FLIPPERS PHYSICS
        //leftFlipper.body.checkCollision = true;
        //leftFlipper.body.immovable = true;
        //rightFlipper.body.checkCollision = true;
        //rightFlipper.body.immovable = true;

    }, // end create 
    blockHit: function (body, bodyB, shapeA, shapeB, equation){
        console.log('ball hit flipper');
    },
    winnerFun: function () {
        //console.log('Win button clicked');
        this.state.start('Win');
    },
    loserFun: function () {
        //console.log('Lose button clicked');
        this.state.start('Lose');
    },
    pointsFun: function () {
        console.log('points button called');
        gameObj.gScore += 10; // increasing the points by 10 (or = gScore+10)
        // to reference the global var, we add the gameObj to reference the global
        txScore.text = gameObj.gScore; //display score/ link to txScore var ( dont forget to declare as global on gameObj fun)
    },
    updateTimerFun: function () {
        //console.log('update timer called');
        timerSeconds--; //decrement by one
        if (timerSeconds >= 0) {
            var displayMin = Math.floor(timerSeconds / 60); //Math floor takes decimals out
            //padding the minutes and seconds are less than than padding with a 0
            if (displayMin < 10) {
                displayMin = '0' + displayMin;
            }
            var displaySec = timerSeconds % 60; //Math floor takes decimals out
            //padding the minutes and seconds are less than than padding with a 0
            if (displaySec < 10) {
                displaySec = '0' + displaySec;
            }
            gameObj.gTime = displayMin + ":" + displaySec;

            txTime.text = gameObj.gTime;
        }
        if (timerSeconds == 0 && gameObj.gScore >= 100) {
            console.log('no time left');
            this.winnerFun();
        } else if (timerSeconds == 0) {
            this.loserFun();
        }
    },
    leftFlipperDown: function (){
        console.log('left key pressed');
        leftFlipper.angle -= 60;
        
    },
    leftFlipperUp: function (){
        //console.log('left key released');
        leftFlipper.angle += 60;
        
    },
     rightFlipperDown: function (){
        console.log('right key pressed');
        rightFlipper.angle += 60;
        
    },
    rightFlipperUp: function (){
        //console.log('right key released');
        rightFlipper.angle -= 60;
        
    }
};
