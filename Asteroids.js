
// global var
let canvas, ctx;
function startGame(){
    myGameArea.start();
}
var myGameArea = () => {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext("2d");
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 50, 50);
}
var shape = () =>{
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 10;

    // Wall
    ctx.strokeRect(75, 140, 150, 110);
    
    // Door
    ctx.fillRect(130, 190, 40, 60);
    
    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
}
//document.addEventListener('DOMContentLoaded', myGameArea)
//ctx.strokeStyle = 'red'
//ctx.fillStyle = 'red';
//ctx.fillRect(10, 10, 50, 50);

var keyboard = {
    left: 37,
    right: 39,
    space: 32,

    keys: {},
    
    logKeyDown: function(event) {
        console.log(event.keyCode);
    },

    keyDown: function(event) {
        this.keys[event.keyCode] = true;
    },

    keyUp: function(event) {
        this.keys[event.keyCode] = false;
    }
};

