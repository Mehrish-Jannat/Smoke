class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.array = []
  }
  
  display() {
    if (this.body.position.x>200&&this.body.velocity.x>10){
    // this is collecting individual x y values of the bird where it has travelled
    var place = [this.body.position.x,this.body.position.y]
    // x, y pairs are being sent to big array
    this.array.push(place)
    //[[x1,y1],[x2,y2],[x3,y3],....]
    }
    //iterating through the big array
    for (var i = 0 ; i<this.array.length;i++){
      image(this.smoke,this.array[i][0],this.array[i][1])
      }
    super.display();
  }
}
