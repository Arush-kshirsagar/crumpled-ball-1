class Paper{
    constructor(x,y,radius){
     var options={
         isStatic:false,
         restitution=0.3,
         friction=0.5,
         density=1.2
     }
     this.radius=radius;
     this.x=x;
     this.y=y;
     this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    

     World.add(world,this.body);
    }
    display(){
       var pos=this.body.position;
       push();
       translate(pos.x,pos.y,this.radius) 
       rectMode(CENTRE);
       ellipse(this.x,this.y,this.radius,this.radius)
       fill("yellow");
       pop()
    }
}