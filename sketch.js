const Engine = Matter.Engine
const World = Matter.World
function setup() {
  createCanvas(800,450);
  engine = Engine.create()
  world = engine.world
  
  box1 = new Building(600,350)
  box2 = new Building(600,250)
  box3 = new Building(600,150)
  box4 = new Building(600,50)
  box5 = new Building(720,350)
  box6 = new Building(720,250)
  box7 = new Building(720,150)
  box8 = new Building(720,50)
  ground = new Ground()
  ball = new Ball()
  var options = {
    bodyA: ball.body,
    pointB:{
      x:550,y:100
    },
    stiffness : 0.04, length : 150
  }
  attachment = Matter.Constraint.create(options)
  World.add(world,attachment)
}

function draw() {
  background("black");  
  Engine.update(engine)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  ground.display()
  ball.display()
  line(550,100,ball.body.position.x,ball.body.position.y)
}