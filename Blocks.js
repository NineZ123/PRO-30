class Block{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed>3){
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          rectMode(CENTER);
         rect(this.body.position.x, this.body.position.y);
          pop();


        }
        strokeWeight(2)
        
      }
};