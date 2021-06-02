class Rock {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'restitution':0.9,
          'friction':0.8,
          'density':12
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };