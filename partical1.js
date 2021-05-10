class Particle1{
    constructor(x,y,r){
        var options = {
     'restitution':0.4
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r=r;
        this.image1 = loadImage("snow4.webp");
        //this.image2 = loadImage("snow5.webp");
        World.add(world, this.body);
        }
        display(){
    
    var pos=this.body.position;
    var angle=this.body.angle;
    
        push();
     translate(pos.x,pos.y);
     rotate(angle);
    imageMode(CENTER);
    noStroke();
    //fill(this.color);
    image(this.image1,0,0, this.r, this.r);
    //image(this.image2,0,0,this.r,this.r);
        pop();
          }
        }    