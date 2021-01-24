class Chain{
    constructor(bodyA,pointB){
    
    var options = {
        bodyA : bodyA,
        pointB: pointB
       // length : 10,
        //stiffness: 0.04
    }
        this.chain = Constraint.create(options)
         
    World.add(world,this.chain);
    }
   /* fly(){
        this.chain.bodyA = null
    }*/
    
    
    display()
    {
     if(this.chain.bodyA)
     {
    var PointA = this.chain.bodyA.position;
    var PointB = this.chain.pointB;
    strokeWeight(5);
    line(PointA.x,PointA.y,PointB.x,PointB.y);
    
    }
    }
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    