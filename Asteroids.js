
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
        ctx.moveTo((start_X), (start_Y));
        ctx.lineTo((start_X)-20, (start_Y)+50);
        ctx.lineTo((start_X),    (start_Y)+35);
        ctx.lineTo((start_X)+20, (start_Y)+50);
        ctx.stroke();
        ctx.fill();
    }
}
// calling player to canvas!!!
player = new player(start_X, start_Y, 'black');
player.draw();
console.log(player);
class projectile{
    constructor (x, y, speed, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
    
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
// adding event for projectiles!!
addEventListener('click', (event) =>{
    const projectile = new Projectile(
        event.clientX,
        event.clientY,
        3,
        'blue'
    )
})
projectile.draw();


