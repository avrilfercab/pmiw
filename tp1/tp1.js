 /*https://youtu.be/YUJW7UiHAHI
 Avril Fernandez 119027/4
 comision 2
 */

var imagen;
var cant = 10;
var ubic = 40;
var x = 400;
var negro, blanco;

function preload() {
  imagen = loadImage("/assets/imagen.png");
  negro = color(0);
  blanco = color(255);
}


function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
}


function draw() {
  image(imagen, 0, 0, 400, 400);
  invertir();
  colores(mouseX, mouseY);
  dibimagen();
}
