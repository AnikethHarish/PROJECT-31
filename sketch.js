var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var colour;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    divisions.push(new Divisions(k+80, height-divisionHeight/2, 10, divisionHeight));
    divisions.push(new Divisions(k+160, height-divisionHeight/2, 10, divisionHeight));
    divisions.push(new Divisions(k+240, height-divisionHeight/2, 10, divisionHeight));
    divisions.push(new Divisions(k+320, height-divisionHeight/2, 10, divisionHeight));
    divisions.push(new Divisions(k+400, height-divisionHeight/2, 10, divisionHeight));
    divisions.push(new Divisions(k+480, height-divisionHeight/2, 10, divisionHeight));
    divisions.push(new Divisions(k+560, height-divisionHeight/2, 10, divisionHeight));
    divisions.push(new Divisions(k+640, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,150));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,225));
  }
  
  //create 4th row of plinko objects
  for (var j = 30; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,300));
  }
  //create particle objects
  for (var p = 15; p <=width-10; p=p+50) 
  {
    particles.push(new Particle(p,800));
    
}
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
    
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2+10,width/2-10),10,10));
    
    
  }
}