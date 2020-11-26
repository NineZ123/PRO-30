class Polygon{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
        this.image = loadImage("polygon.png");
       
        World.add(world, this.body);
      }
      display(){
  
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 40,40);
        pop();
      }
}