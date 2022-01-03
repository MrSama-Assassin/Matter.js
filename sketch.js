//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    bgimg = loadImage("./Assets/bg0.png");
}

function setup(){
    canvas = createCanvas(192*6, 108*6)
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
        restitution:1
    }

    Ball = Bodies.circle(330, 450, 15, Ball_Options);
    Brick = Bodies.rectangle(330, 400, 85, 20, Brick_Options);
    Brick2 = Bodies.rectangle(330, 500, 85, 100, Brick_Options);
    Bricks = Bodies.rectangle(330, 100, 35, 20, Brick_Options);
    Bricke = Bodies.rectangle(330, 200, 10, 20, Brick_Options);
    Ground = Bodies.rectangle(192*6, 108*6, 2400, 10, Ground_Options);

    Composite.add(world, [Ball, Brick, Brick2, Bricks, Bricke, Ground]);
}

function draw(){
    background(bgimg);
    Engine.update(engine);
    rectMode(CENTER);
    fill("green")
    rect(Ground.position.x, Ground.position.y, 2400, 10);
    fill("red")
    ellipse(Ball.position.x, Ball.position.y, 30);
    fill("brown")
    rect(Brick.position.x, Brick.position.y, 100, 20)
    fill("black")
    rect(Bricks.position.x, Bricks.position.y, 50, 20)
    fill("orange")
    rect(Bricke.position.x, Bricke.position.y, 25, 20)
    rect(Brick2.position.x, Brick2.position.y, 25, 100)
}