let angle = 0;
let w = 20;
let ma;
let maxD;

function setup(){
  createCanvas(400,400, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 180, 200);
}

function draw(){
  background(200);
  ortho(-400, 400, 400, -400, 0, 1000);

  rotateY(ma);
  rotateX(QUARTER_PI);
  //translate(width/2, height/2);
  //rectMode(CENTER);

  //rotateX(angle*0.25);
  let offset = 0;
  for(let z=0; z < height; z +=w){
    for(let x=0; x < width; x +=w){
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 50, 300));
      //fill(255, 255, 255, 5);
      normalMaterial(175, 175, 255);
      translate(x - width / 2, 0, z - height / 2);
      box(w-2, h, w-2);
      //rect(x-width/2 + w/2, 0, w-2, h);
      pop();
    }
  }
  angle -= 0.055;
}
