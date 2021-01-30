class Ground{
    constructor(x, y, width, height){
       var options={
        isStatic:true,
    }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }

      display(){
     
      strokeWeight(4);
      fill("brown");
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
      }
    }
