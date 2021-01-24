class Block {
    constructor(x,y,width,height,color){
    
        var options = {
            'restitution' : 0.5,
            //'friction' : 0.3,
            'density' : 0.0003
    
    
        }
    
    
    this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height =height;
     this.x = x;
     this.y = y;
     this.color = color;
     //this.image = loadImage("sprites/image/wood1.png")
    
    World.add(world,this.body);
    }
    
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    strokeWeight(2)
    stroke("black");
    fill(this.color);
    rect(0,0,this.width,this.height);
    pop();
    
     
    
    }
    
    
    };