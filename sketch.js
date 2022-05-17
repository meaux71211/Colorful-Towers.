var box1;
var box2;
var box3;
var box4;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(10,300,30,100,"violet");
  box2 = new Box(40,250,40,150,"lightblue");
  box3 = new Box(80,220,40,180,"red");
  box4 = new Box(120,150,40,250,"green");
}

function draw() 
{
  background(220);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
}

