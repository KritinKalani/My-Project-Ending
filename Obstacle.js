class Obstacle{
    constructor(x,y){
        var options = {
            restitution: 0.7
        }
        this.body = Bodies.circle(x,y,15,options);
        //this.x = random(0,700);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(0);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,15,15);
    }
}