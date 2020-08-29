class Ground{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,700,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(120)
        rectMode(CENTER)
        rect(pos.x,pos.y,700,20);
    }
}