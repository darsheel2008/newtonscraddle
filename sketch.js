
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var floor;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    //Create the Bodies Here.
	rope1=new rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2=new rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3=new rope(bob3.body,roof.body,-bobDiameter*2,0);
	rope4=new rope(bob4.body,roof.body,-bobDiameter*2,0);
	rope5=new rope(bob5.body,roof.body,-bobDiameter*2,0);
	bob1=new bob(60,80,70);
  bob2=new bob(80,80,70) 
  bob3=new bob(100,80,70) 
  bob4=new bob(120,80,70) 
  bob5=new bob(140,80,70) 
	floor=new roof(400,500,50,10);
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.displa();
  bob3.display();
  bob4.display();
  bob5.display();
  floor.display();
  drawSprites();
 
}




