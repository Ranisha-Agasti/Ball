class Ground {
    constructor(x,y){
        var options = {
            isStatic:true
        }
       this.body = Matter.Bodies.rectangle(400, 400, 1000, 20, options)

       World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y,1000,20)
        
    }
}