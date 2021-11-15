
// global var 
//const canvas = document.querySelector('canvas');
var canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 1020;
canvas.height = 720;
const FPS = 30;
const start_X = canvas.width/2;
const start_Y = canvas.height/2;
const turn_speed = 360; // turn speed in degrees per second

setInterval(update,1000 / FPS);

function update(){
    // drawing canvas again :(
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height)
    
}

// declaring Player constructor and insides

class Player{
    constructor (x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.rotation = this.rotation;
    this.angle = this.angle;
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

const player = new Player(start_X, start_Y, 'black');
player.draw();
// rotation of player


// event handler for keys
addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);

//pressing Keys
function keyDown(ev){
    switch(ev.keyCode){
        case 37: // left arrow key (rotate ship left )
        Player.rotation = turn_speed / 180 *Math.PI/FPS
            break;
        
        case 38: // up arrow key (propel ship forward)
            break;
        
        case 39:
            Player.rotation = -turn_speed / 180 *Math.PI/FPS
            break; // right arrow key(rotate ship right)

    }
}
// No longer Pressing Keys
function keyUp(){
    switch(ev.keyCode){
        case 37: // left arrow key (stop rotate ship left )
        Player.rotation = 0
            break;
        
        case 38: // up arrow key (stop propelling ship forward)
            break;
        
        case 39:
            Player.rotation = 0
            break; // right arrow key(stop rotate ship right)

    }

}

// calling projectiles in now!! 
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
    update(){
        this.draw
        this.x = this.x + this.speed.x;
        this.y = this.y + this.speed.y;
    }
}
const projectiles = []
// Animating projectiles
function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,canvas.width, canvas.height)
    player.draw
    projectiles.forEach((Projectile) =>{
        Projectile.update()
    })
}
// adding event for projectiles!!
addEventListener('click', (event) =>{
    const angle = Math.atan2(
        event.clientX - canvas.height
    )
  
    /* const projectile = new Projectile(
        //event.clientX = player.
        event.clientX -448, event.clientY - 8,3,null,'blue'
    )
*/    
projectile.draw();

})

projectile.draw();

// rotate ship
Player.angle += Player.rotation;


