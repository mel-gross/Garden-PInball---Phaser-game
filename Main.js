gameObj.Main = function (game) {

};

gameObj.Main.prototype = {
    create: function () {
        console.log('Main');
        //---BACKGROUND:---
        var spBackground = this.stage.backgroundColor = "#ACDEB8";
        //this.stage.borderColor ="#000000";

        //---GRAPHICS:---
        var rectangleGrp = this.add.graphics(0, 0);
        rectangleGrp.beginFill(0xF8F8F8);
        rectangleGrp.lineTo(720, 0);
        rectangleGrp.lineTo(720, 195);
        rectangleGrp.lineTo(0, 195);
        rectangleGrp.endFill();

        //---SPRITES:---
        var spLogo = this.add.sprite(this.world.centerX, 2, 'logo');
        spLogo.scale.setTo(.5, .5);
        spLogo.anchor.setTo(0.5, 0);

        var spBall = this.add.sprite(235, 230, 'ball');
        spBall.scale.setTo(.6, .6);
        var spFlower = this.add.sprite(595, 185, 'flower');
        spFlower.scale.setTo(.35, .35);
        //Rotate flower
        spFlower.angle += 30;
        var spLeaf = this.add.sprite(200, 500, 'leaf');
        spLeaf.scale.setTo(.35, .35);
        var spSucc = this.add.sprite(580, 465, 'succ');
        spSucc.scale.setTo(.40, .35);
        spSucc.angle += 40;

        var icStopWatch = this.add.sprite(100, 675, 'stopWatch');
        icStopWatch.scale.setTo(.4, .4);
        //---TEXT AND STYLE:---
        //style parameters for the game, comma separating, no comma on last paramenter (IT IS AN ARRAY)
        var generalStyle = {
            width: '150px',
            font: '35px Trebuchet MS',
            fill: 'black',
            align: 'left'
        };
        //fonts are too streatched, change character width
        var numberStyle = {
            width: '150px',
            font: '40px Trebuchet MS',
            fill: 'black',
            align: 'left'
        }

        var instructions1 = "Click and hold";
        var instructions2 = "to launch the ball";
        var instructions3 = "Move by clicking the flippers";
        var instructions4 = "or using the arrow keys";
        var instructions5 = "Get points when";
        var instructions6 = "you touch the plants";
        var instructions7 = "You have";
        var instructions8 = "2:00";
        var instructions9 = "minutes";
        var instructions10 = "to get 1000 points";
        var instructions11 = "Don't fall!";


        //line height of 45 and text block gap is 95
        var txInstructions1 = this.add.text(330, 215, instructions1, generalStyle);
        var txInstructions2 = this.add.text(305, 260, instructions2, generalStyle);
        var txInstructions3 = this.add.text(70, 355, instructions3, generalStyle);
        var txInstructions4 = this.add.text(105, 400, instructions4, generalStyle);
        var txInstructions5 = this.add.text(270, 495, instructions5, generalStyle);
        var txInstructions6 = this.add.text(235, 540, instructions6, generalStyle);
        var txInstructions7 = this.add.text(125, 635, instructions7, generalStyle);
        var txInstructions8 = this.add.text(150, 675, instructions8, numberStyle);
        var txInstructions9 = this.add.text(240, 680, instructions9, generalStyle);
        var txInstructions10 = this.add.text(90, 725, instructions10, generalStyle);
        txInstructions10.addColor('#F05B1B', 7);
        txInstructions10.addColor('#000000', 12);
        var txInstructions11 = this.add.text(460, 685, instructions11, generalStyle);
        //x and y posit., string/var you wanna display, style you wanna use



        //---BUTTONS:---
        //the numbers given are the indexes of the frames in this order: OVER, OUT, DOWN
        var btPlay = this.add.button(this.world.centerX, 810, 'playButton', this.actionOnClick, this, 1, 0, 2);
        btPlay.anchor.setTo(0.5, 0);
        // widht, height, key, function called, this, Over, out, down
        
  },
actionOnClick: function (){
    console.log('Play button clicked');
    this.state.start('Play');
}
};
