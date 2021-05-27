class Launcher{ 
    constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.pointB = pointB ;
    this.laun = Constraint.create(options);
    World.add(world, this.laun);
}

attach(body){
    this.laun.bodyA = body
 }

fly(){
    this.laun.bodyA = null;
}

display(){
    if(this.laun.bodyA){
    var pointA = this.laun.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}

}

