class Coin{
    constructor(x,y){

    var options = {
        restitution : 0.3
    }

        this.body = Bodies.circle(x,y,15,options);
        //this.x = random(0,700);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill(255,153,0);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,15,15);
    }
}