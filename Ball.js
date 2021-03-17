class Ball {
    constructor(){
       this.body = Matter.Bodies.circle(200,100, 25)
       World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y,50,50)
        
    }
}