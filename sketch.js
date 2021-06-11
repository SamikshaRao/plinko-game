var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=100; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }  
  for (var k = 0; k <=200; k = k + 150) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 
  for (var k = 0; k <=250; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 
  for (var k = 0; k <=350; k = k + 320) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 
  for (var k = 0; k <=450; k = k + 420) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 
  for (var k = 0; k <=550; k = k + 520) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 
  for (var k = 0; k <=650; k = k + 620) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 
  for (var k = 0; k <=750; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 35; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 20; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
if(frameCount %60 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %70 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %80 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %90 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %100 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %110 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %120 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
} 
if(frameCount %130 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %140 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %150 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %160 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %170 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %180 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
} 
if(frameCount %190 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}
if(frameCount %200 === 0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
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
  for(var h=0; h<particles.length; h++){
    particles[h].display();
  }
}