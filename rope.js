class Rope{
    constructor(body1,body2,offsetX,offsetY){
       this.offsetX=offsetX
       this.offsetY=offsetY   
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.Rope=Constraint.create(options);

        World.add(world,this.Rope);
    }

    display(){
        var pointa=this.Rope.bodyA.position;
        var pointb=this.Rope.bodyB.position;
        strokeWeight(4);
        line(pointa.x,pointa.y,pointb.x+this.offsetX,pointb.y+this.offsetY);
    }

}