//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    bgimg = loadImage("./Assets/bg0.png");
}

function setup(){
    canvas = createCanvas(600, 600)
    engine = Engine.create();
    world = engine.world;

    var Ball_Options={
        restitution:1.3
    }

    var Ground_Options={
        isStatic: true
    }

    var Brick_Options={
        friction:0,
        restitution:0.5
    }

    
    Ball1 = Bodies.circle(125, 450, 55, Ball_Options);
    Ball2 = Bodies.circle(200, 450, 50, Ball_Options);
    Brick2 = Bodies.rectangle(400, 550, 10, 20, Brick_Options);
    Bricks = Bodies.rectangle(400, 500, 10, 20, Brick_Options);
    Bricke = Bodies.rectangle(400, 450, 10, 20, Brick_Options);
    Box = Bodies.rectangle(400, 350, 50, 50, Brick_Options);
    Ground = Bodies.rectangle(300, 590, 600, 20, Ground_Options);

    Composite.add(world, [Ball1, Ball2, Box, Brick2, Bricks, Bricke, Ground]);
}

function draw(){
    background(bgimg);
    Engine.update(engine);
    rectMode(CENTER);
    fill('green')
    rect(Ground.position.x, Ground.position.y, 600, 20);
    fill('grey')
    rect(Bricks.position.x, Bricks.position.y, 100, 20);
    rect(Brick2.position.x, Brick2.position.y, 100, 20);
    rect(Bricke.position.x, Bricke.position.y, 100, 20);
    fill('yellow')
    rect(Box.position.x, Box.position.y, 50, 50)
    fill('red')
    ellipse(Ball1.position.x, Ball1.position.y, 55);
    ellipse(Ball2.position.x, Ball2.position.y, 50);

}