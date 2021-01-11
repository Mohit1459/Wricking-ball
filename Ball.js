class Ball {
    constructor(x,y, radius, angle){
        var options = {
            denstiy:1,
            frictionAir: 0.005
        };
        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius;
        World.add(world,this.body);

        }
        display(){
            var angle = this.body.angle;
            push();
            translate(body.position.x,this.body.position.y);
           rotate(angle)
           circle(0,0,this.radius);
           pop();
        }
    }