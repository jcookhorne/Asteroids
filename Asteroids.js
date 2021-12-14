// notes : Constructors need parameters and those parameters seem to be for when users are going to mess with things right
// sooooo use a method over a constructor when holding a bunch of info on an object??
//class Player{
//    constructor (x, y, color)  << see parameters soo when calling i/user have to enter stuff for this
// i dont want to enter things because thats too much the method we will make is better
//        {this.x = x; this.y = y; this.color = color;}
// global var 
//const canvas = document.querySelector('canvas');

var can = document.getElementById("gameCanvas");
const ctx = can.getContext("2d");


const FPS = 30;
const friction = 0.7;
const playerSize = 40; // size in pixels?? 
const turn_speed = 360; // turn speed in degrees per second
const speed = 5;

// declaring player method

var player = {
    x: can.width/2,
    y: can.height/2,
    r: playerSize /2, // radius of the ship
    a: 90 / 180 * Math.PI, // converting this to Radians -- 90 is straight up so to point upwards we do that
    rot: 0, // setting rotation to 0
    thrusting:false,
    thrust: {
        x:0,
        y:0
    }

};
// event handler for player
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// game loop
setInterval(update, 1000/FPS);

function keyDown(/** @type {keyboard Event}*/ev){
    switch(ev.keyCode){
        case 37: // left arrow key (rotate ship left )
        player.rot = turn_speed / 180 *Math.PI/FPS
            break;
        
        case 38: // up arrow key (propel ship forward)
        player.thrusting = true;
            break;
        case 39:
            player.rot = -turn_speed / 180 *Math.PI/FPS
            break; // right arrow key(rotate ship right)
        case 40: // down arrow key (propel ship backwards)
            player.thrusting = false;
            break;
    }
}
// No longer Pressing Keys
function keyUp(/** @ype {Keyboard} */ev){
    switch(ev.keyCode){
        case 37: // left arrow key (stop rotate ship left )
        player.rot = 0
            break;
        case 38: // up arrow key (stop propelling ship forward)
        player.thrusting = false;
            break;
        
        case 39:
            player.rot = 0
            break; // right arrow key(stop rotate ship right)
        case 40:
            player.thrusting = false;
            break;
    }
}




function update(){
    // drawing canvas again :(
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,can.width,can.height)
    // thrust the ship
    if(player.thrusting){
        player.thrust.x += speed * Math.cos(player.a) / FPS;
        player.thrust.y -= speed * Math.sin(player.a) / FPS;
    } else{
        // apply friction ( only works when ship isn't moving.)
        player.thrust.x -= friction * player.thrust.x/FPS;
        player.thrust.y -= friction * player.thrust.y/FPS;
    }
    // draw ship
    ctx.strokeStyle = "white",
    ctx.lineWidth = playerSize/20,
    ctx.beginPath(); // for a quick trig reminder
    // cos = x and sin = y  the graph is normal but (0,0) is in the top right corner
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
    player.a += player.rot;
    // move  the ship
    player.x += player.thrust.x;
    player.y += player.thrust.y;


    // handle edge of screen
    if (player.x < 0 - player.r) {
        player.x = can.width + player.r;
    } else if (player.x > can.width + player.r) {
        player.x = 0 - player.r; }
    if (player.y < 0 - player.r) {
        player.y = can.height + player.r;
     } else if (player.y > can.height + player.r) {
            player.y = 0 - player.r;
    }
    }
// calling projectiles in now!! 
/** 
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
}*/