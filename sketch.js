
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var paper,dustbin,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);
	paper=new Paper(200,200,20);
	dustbin=new Dustbin(500,500,200,20,470,500,20,100,530,500,20,100);
  var render=Render.create=(){
element:document.body;
engine:Engine;
options:{
	width=43
	height=40
	frames=false
}
  }

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyDown===UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}



