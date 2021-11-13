
// global var 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = 1020;
canvas.height = 720;
const start_X = canvas.width/2;
const start_Y = canvas.height/2;
console.log(canvas)
/*function startGame(){
    player();
}*/
class Player{
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
        ctx.moveTo((start_X), (start_Y));
        ctx.lineTo((start_X)-20, (start_Y)+50);
        ctx.lineTo((start_X),    (start_Y)+35);
        ctx.lineTo((start_X)+20, (start_Y)+50);
        ctx.stroke();
        ctx.fill();
    }
}
// calling projectiles in now!! 
const player = new Player(start_X, start_Y, 'black');
player.draw();
//console.log(player);
class Projectile{
    constructor (x, y, radius, speed, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
    this.radius = radius;
}
    draw(){
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, false)
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
// adding event for projectiles!!

addEventListener('click', (event) =>{
    const projectile = new Projectile(
        event.clientX -448,
        event.clientY - 8,
        3,
        null,'blue'

    )
    
projectile.draw();

})

projectile.draw();


