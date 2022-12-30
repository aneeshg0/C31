class Boat {

  constructor(x, y, width, height, boatPos) {
    var options = {
      restitution:0.8,
      friction:1,
      density:1
    };
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.images = loadImage("assets/boat.png")
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0,this.boatPosition,this.width,this.height);
    pop();
  }
}
