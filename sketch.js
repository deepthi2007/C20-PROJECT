
var r = 0;
var g = 50;
var b=255;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
function setup(){
  createCanvas(1200,400);
}
function draw(){
  // change the value of Red based on the mouse movement about the X axis
  let r = map(mouseX,0,1200,0,255);
  // change the value of green  based on the mouse movement about the X axis
  let g = map(mouseX,0,1200,150,200);
  // change the value of blue based on the mouse movement about the X axis
  let b = map(mouseX,0,1200,255,0);
  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);
  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,200,50,50);
  // Remember to fill the canvas with white paint before creating the ellipse.
}