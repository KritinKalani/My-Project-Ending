const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var man, ground;
var obstaclesA = [];
var CoinA = [];

function preload() {
}

function setup() {
    createCanvas(700, 500)
    engine = Engine.create();
    world = engine.world;
    man = new Player();
    ground = new Ground(350, 450);
    obstacles = new Obstacle(200, 200);
    coin = new Coin(200, 200);
}

function draw() {
    background(255, 255, 255);
    Engine.update(engine);
    man.display();
    ground.display();

    //camera.position.x = man.position.x;

    console.log(camera.position.x);
    //console.log(man);

    if (frameCount % 50 === 0) {
        CoinA.push(new Coin(random(0, 700), 0));
    }

    if (frameCount % 200 === 0) {
        obstaclesA.push(new Obstacle(random(0, 700), 0));
    }

    /*for(var i = 0;i < obstacle.length;i++){
        obstacle[i].display(); */
    //}

    for (var i = 0; i < obstaclesA.length; i++) {
        //obstaclesA[i].body.position.y
        obstaclesA[i].display();
        console.log("y: " + obstaclesA[i].body.position.y );
        console.log("T/F: " + obstaclesA[i].body.position.y > 400);
        if (obstaclesA[i].body.position.y > 400) {
            World.remove(world, obstaclesA[i])
        }
    }

    for (var k = 0; k < CoinA.length; i++) {
        //obstaclesA[i].body.position.y
        CoinA[k].display();
        if (CoinA[k].body.position.y > 400) {
            World.remove(world, CoinA[k])
        }
    }

    /* if (obstacles !== null) {
        obstacles.display();
        /* if (obstacles.body.position.y > 400) {
           World.remove(world,obstacles)
          } */
    //}
    //keyPressed();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Body.applyForce(obstacles.body, obstacles.body.position, { x: 10, y: 400 });
    }
    if(keyCode === RIGHT_ARROW){
        Body.setVelocity(man.body,200);
    }
}