
// global var 
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");
let move = 5;
/*function startGame(){
    player();
}*/
class player{
    constructor (x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 1;
    this.alive = true;
    this.lives = 2;
    this.rotSpeed = 3;
}
    draw(){
        ctx.beginPath(); 
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(75, 100);
        this.ctx.lineTo(100, 75);
        ctx.lineTo(125, 100);
    }
}
const player = new player(100, 25, 'black');
console.log(player);
/*
var player =() =>{
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    ctx.beginPath(); 
    this.ctx.moveTo(100,25);
    this.ctx.lineTo(75, 100);
    this.ctx.lineTo(100, 75);
    ctx.lineTo(125, 100);
    ctx.fill();
};
*/