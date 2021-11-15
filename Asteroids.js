// notes : Constructors need parameters and those parameters seem to be for when users are going to mess with things right
// sooooo use a method over a constructor when holding a bunch of info on an object??
//class Player{
//    constructor (x, y, color)  << see parameters soo when calling i/user have to enter stuff for this
// i dont want to enter things because thats too much the method we will make is better
//        {this.x = x; this.y = y; this.color = color;}
//        
//       
//
//
// global var 
//const canvas = document.querySelector('canvas');

var can = document.getElementById("gameCanvas");
const ctx = can.getContext("2d");
const FPS = 30;
//can.width = 1020;
//can.height = 720;
const playerSize = 60; // size in pixels?? 
const turn_speed = 360; // turn speed in degrees per second
// declaring player method

var player = {
    x: can.width/2,
    y: can.height/2,
    r: playerSize /2,
    a: 90 / 180 * Math.PI // converting this to Radians -- 90 is straight up so to point upwards we do that

};

setInterval(update, 1000 / FPS);

function update(){
    // drawing canvas again :(
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,can.width,can.height)
    // draw ship
    ctx.strokeStyle = "white",
    ctx.lineWidth = playerSize/20,
    ctx.beginPath();
    ctx.moveTo(// nose of the ship
        player.x + player.r * Math.cos(player.a),
        player.y - player.r * Math.sin(player.a),
    );// you can easily just do the graphing with numbers buuuuut imma just copy this
    ctx.lineTo( // left of player
        player.x - player.r * (Math.cos(player.a) + Math.sin(player.a)),
        player.y + player.r * (Math.sin(player.a) - Math.cos(player.a))
    );
    ctx.lineTo( // right of player
        player.x - player.r * (Math.cos(player.a) - Math.sin(player.a)),
        player.y + player.r * (Math.sin(player.a) + Math.cos(player.a))
    );
     ctx.closePath();   
    ctx.stroke();
  

    //rotate ship

    // move  the ship
}
// event handler for keys
addEventListener("keydown", keyDown);
addEventListener("keyup", keyUp);
//pressing Keys
function keyDown(ev){
    switch(ev.keyCode){
        case 37: // left arrow key (rotate ship left )
        player.r = turn_speed / 180 *Math.PI/FPS
            break;
        
        case 38: // up arrow key (propel ship forward)
            break;
        
        case 39:
            player.r = -turn_speed / 180 *Math.PI/FPS
            break; // right arrow key(rotate ship right)

    }
}
// No longer Pressing Keys
function keyUp(){
    switch(ev.keyCode){
        case 37: // left arrow key (stop rotate ship left )
        player.r = 0
            break;
        
        case 38: // up arrow key (stop propelling ship forward)
            break;
        
        case 39:
            player.r = 0
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

// Animating projectiles




// rotate ship



