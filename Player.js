class Player{
    constructor(){
        this.body = Bodies.rectangle(50,400,50,50);
        this.image = loadImage("images/Running Boy.jpg");
       /*  camera.position.x = this.body.position.x;
        camera.position.y = this.body.position.y; */
        console.log(this.body);
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,50,400,this.image.width/4,this.image.height/4);
    }
}