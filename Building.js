class Building {
    constructor(x,y){
       this.body = Matter.Bodies.rectangle(x, y, 70, 70)
       World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y,70,70)
    }
}