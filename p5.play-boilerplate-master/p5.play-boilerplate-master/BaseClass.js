class BaseClass{
    constructor(x, y, width, height,color, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      this.color=color;
      this.image=loadImage("hexagon1.jpg")
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill(this.color);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
       
        pop();
      }
      addPic(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill(this.color);
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,65,65);
       
       
        pop();
      }
}