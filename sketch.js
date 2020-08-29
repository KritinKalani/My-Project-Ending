const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var man, ground;
var obstaclesA = [];
var coinA = [];
var score = 0;

function preload() {
}

function setup() {
    createCanvas(700, 500)
    engine = Engine.create();
    world = engine.world;
    man = new Player(40, 400);
    ground = new Ground(350, 450);
    obstacles = new Obstacle(200, 200);
    coin = new Coin(200, 200);
}

function draw() {
    background(255, 255, 255);
    text("Score: " + score)
    console.log(score);
    Engine.update(engine);
    man.display();
    ground.display();

    //camera.position.x = man.position.x;

    //console.log(camera.position.x);
    //console.log(man);

    if (frameCount % 50 === 0) {
        coinA.push(new Coin(random(0, 700), 0));
    }

    if (frameCount % 200 === 0) {
        obstaclesA.push(new Obstacle(random(0, 700), 0));
    }

    /*for(var i = 0;i < obstacle.length;i++){
        obstacle[i].display(); */
    //}

    //to Display Obstacles
    for (var i = 0; i < obstaclesA.length; i++) {
        //obstaclesA[i].body.position.y
        obstaclesA[i].display();

    }

    // to destroy Obstacles
    for (var i = 0; i < obstaclesA.length; i++) {
        if (obstaclesA[i].body.position.y > 400) {
            World.remove(world, obstaclesA[i].body);
            obstaclesA.splice(i,1);
        }
    }

    //Display Coins
    for (var k = 0; k < coinA.length; k++) {
        //obstaclesA[i].body.position.y
        coinA[k].display();
    }

    //destroy Coins
    for (var k = 0; k < coinA.length; k++) {
        //console.log("coin Array Length: " + coinA.length);
         if (coinA[k].body.position.y > 400) {
            //console.log("index of coin on ground " + k);
            World.remove(world, coinA[k])
            coinA.splice(k,1);
            //console.log("after remove: " + coinA.length);
        }
        if(man.body.position.x === coinA[k].body.position.x && man.body.position.y === coinA[k].body.position.y){
            score++;
            console.log(score);
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
        Body.applyForce(obstacles.body, obstacles.body.position, { x: 0, y: 30 });
    }
    if (keyCode === RIGHT_ARROW) {
        Body.setVelocity(man.body, { x: 10, y: 0 });
    }
    if (keyCode === LEFT_ARROW) {
        Body.setVelocity(man.body, { x: -10, y: 0 });
    }
}