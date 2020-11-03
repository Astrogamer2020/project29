class Polygon{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
    
      this.image=loadImage("hexagon1.jpg")
        World.add(world, this.body);
      }
     
      addPic(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,65,65);
       
       
        pop();
      }
}