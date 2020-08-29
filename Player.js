class Player{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,100,100);
        this.image = loadImage("images/Running Boy.jpg");
       /*  camera.position.x = this.body.position.x;
        camera.position.y = this.body.position.y; */
        console.log(this.body);
        World.add(world, this.body);
    }
    display(){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.image.width/4,this.image.height/4);
    }
}