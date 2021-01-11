const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ball,rope,box1,box2,box3,box4,box5, ground;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create
    engine = engine.world;
    ground = new Ground(600,580,1200,20);
    ball = new Ball(200,200,50);
    rope = new Rope (ball.body,{x:100,y:100})
}
function draw(){
    background(255);
    ground.display();
    ball.display();
    rope.display();
    box1.display();
    box2.display();
    box4.display();
    box5.display();
}