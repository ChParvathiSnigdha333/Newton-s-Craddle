const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5 ;
var roof;
var rope1, rope2, rope3, rope4, rope5 ;

function preload()
{
	
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob (560,350,30)
	bob2 = new Bob (500,350,30)
	bob3 = new Bob (440,350,30)
	bob4 = new Bob (380,350,30)
	bob5 = new Bob (320,350,30)

	roof = new Roof (440,120,300,15)

	rope1 = new Rope(bob1.body,roof.body,120,0);
	rope2 = new Rope(bob2.body,roof.body,60,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,-60,0);
	rope5 = new Rope(bob5.body,roof.body,-120,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();

  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
      Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-20,y:50});
	}
}