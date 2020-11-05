class Dustbin {
    constructor(x, y, width, height, angle, thickness) {
       
        this.angle = angle;
        this.angle = 0;
        this.bottomBody = Bodies.rectangle(x, y, width, height, thickness, angle, options, { isStatic=true });
        this.leftWallBody = Bodies.rectangle(this.dustbin.width / 2 - this.dustbin.height / 2, { isStatic: true })
        Matter.Body.setAngle(this.leftWallbody, this.angle)
        this.rightWallBody = Bodies.rectangle(+this.dustbin.width / 2 - this.body.height / 2, thickness, angle, { isStatic=true })
        Matter.Body.setAngle(this.leftWallbody-1 * this.angle)

        this.width = width;
        this.height = height;
        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody)
    }
    display(){
     
      var posleft=this.leftWallBody.position;
      
      push();
      translate(posleft.x,posleft.y,this.rightWallBody,this,this.leftWallbody,this.bottomBody);
      rectMode(centre);
      angleMode(radius)
      fill("red");
      stroke(4);
      rotate=this.setAngle
      rect(0,0,this.wallthickness,this.dustbin.height);
      pop();
      push();

      var posright=this.rightWallbody.position;
      translate(posright.x,posright.y,this.rightWallBody,this,this.leftWallbody,this.bottomBody);
      rectMode(centre);
      angleMode(radius)
      fill("red");
      stroke(4);
      rotate(-1*this.angle)
      rect(0,0,this.wallthickness,this.dustbin.height);
      pop();
      push();
      var posbottom=this.bottomBody.position;
      translate(posbottom.x,posbottom.y,this.rightWallBody,this,this.leftWallbody,this.bottomBody);
      rectMode(centre);
      angleMode(radius)
      fill("red");
      stroke(4);
      rotate(-1*this.angle)
      rect(0,0,this.wallthickness,this.dustbin.height);
    }

}