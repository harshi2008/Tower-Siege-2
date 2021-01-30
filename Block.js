class Block {
  constructor(x, y, width, height){
      var options={
        isStatic:false,
        'friction':0.7,
        'restitution':0.8,
        'density':1,
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world,this.body);
}

display(){
  if(this.body.speed < 3){
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
   translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    fill("lightgreen");
    rectMode(CENTER);
   rect(0, 0, this.width, this.height);
   pop();
  }
   

  else{
     World.remove(world, this.body);
     push();
    this.Visiblity = this.Visiblity - 5;
    //tint(255,this.Visiblity);
    //rect(this.body.position.x, this.body.position.y, 50, 50);
    pop();
   }
  };
}