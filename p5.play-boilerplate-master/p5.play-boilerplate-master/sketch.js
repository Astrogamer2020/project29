const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;
var  slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
polygon=new Polygon(250,190,1,1);
   
   
  
//layer1
    box1 = new Box(630,530,30,30,"blue");
    box2 = new Box(660,530,30,30,"blue");
    box3 = new Box(690,530,30,30,"blue");
    box4 = new Box(720,530,30,30,"blue");
    box5 = new Box(750,530,30,30,"blue");
    box6 = new Box(780,530,30,30,"blue");
    box7 = new Box(810,530,30,30,"blue");
//layer2
    box8 = new Box(660,500,30,30,"red");
    box9 = new Box(690,500,30,30,"red");
    box10 = new Box(720,500,30,30,"red");
    box11 = new Box(750,500,30,30,"red");
    box12 = new Box(780,500,30,30,"red");
    //layer3
    box13 = new Box(690,470,30,30,"green");
    box14 = new Box(720,470,30,30,"green");
    box15 = new Box(750,470,30,30,"green");
//layer4
box16 = new Box(720,440,30,30,"orange");
    ground1=new Ground(730,540,260,10);
    ground2=new Ground(1000,300,200,10);
    //layer1
    box17 = new Box(940,290,30,30,"red");
    box18 = new Box(970,290,30,30,"red");
    box19 = new Box(1000,290,30,30,"red");
    box20 = new Box(1030,290,30,30,"red");
    box21 = new Box(1060,290,30,30,"red");
   //layer2
   box22 = new Box(970,260,30,30,"green");
   box23 = new Box(1000,260,30,30,"green");
   box24 = new Box(1030,260,30,30,"green");
   //layer3
   box25 = new Box (1000,230,30,30,"orange");


   
    slingshot = new SlingShot(polygon.body,{x:250, y:190});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    
    ground1.display();
    ground2.display();
    //layer1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
//layer2
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
  //layer3
  box13.display();
  box14.display();
  box15.display();
//layer4
box16.display();
//layer1
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
   //layer2
   box22.display();
   box23.display();
   box24.display();
   //layer3
   box25.display();
   polygon.addPic();
   
    slingshot.display();  
    detectcollision(polygon,box1); 
    detectcollision(polygon,box2); 
    detectcollision(polygon,box3); 
    detectcollision(polygon,box4); 
    detectcollision(polygon,box5); 
    detectcollision(polygon,box6); 
    detectcollision(polygon,box7); 
    detectcollision(polygon,box8);
    detectcollision(polygon,box9); 
    detectcollision(polygon,box10); 
    detectcollision(polygon,box11); 
    detectcollision(polygon,box12); 
    detectcollision(polygon,box13);
    detectcollision(polygon,box14); 
    detectcollision(polygon,box15); 
    detectcollision(polygon,box16);
    detectcollision(polygon,box17);
    detectcollision(polygon,box18); 
    detectcollision(polygon,box19); 
    detectcollision(polygon,box20); 
    detectcollision(polygon,box21); 
    detectcollision(polygon,box22);
    detectcollision(polygon,box23); 
    detectcollision(polygon,box24); 
    detectcollision(polygon,box25);
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    
    
    }

function mouseReleased(){
   slingshot.fly();
}
function detectcollision(lstone,lmango)
{
	stoneBodyPosition=lstone.body.position;
	mangoBodyPosition=lmango.body.position;
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,	mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <= (lmango.width+lstone.width)){
        Matter.Body.applyForce(lmango.body, lmango.body.position, { x:100, y: 100 });
    }
}