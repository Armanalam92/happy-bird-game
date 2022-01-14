const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var engine, world;
var canvas;



var ground;
var boxes = [];
var bird;
var mConstraint;


function preload() {
  
}

function setup() {
  const canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(width/2, height-20, width, 20);
  for(let i = 0; i <3; i++) {
  boxes[i] = new Box(300,300-i*75,50,75);
 }
 
 
 bird = new Bird(50, 300, 25);
 
  const mouse = Mouse.create(canvas.elt);
 const options = {
   mouse: mouse
 }

 mConstraint = MouseConstraint.create(engine, options);
 World.add(world, mConstraint);

}




function draw() {
  background(189);


 
  ground.show();
 
  for (var box of boxes) {
    box.show();
  }
  
  bird.show();


  Engine.update(engine);

  
}

