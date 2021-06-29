class Paper{
    constructor(x, y, r) {
      var options = {
        'density':1.2,
        'friction': 0,
        'restitution':0.3
      };
      this.radius = r;
      this.x = x;
	    this.y = y;
      this.body = Bodies.circle(this.x,this.y,this.radius/2, options);
    
      World.add(world, this.body);
      this.image = loadImage("paper.png")
    };
    display(){
      var pos = this.body.position;
      
  
      push();
     // translate(pos.x, pos.y);
     // rotate(angle);
      imageMode(CENTER)
      image(this.image,pos.x,pos.y, this.radius,this.radius);
      pop();
    };
  };
	
	