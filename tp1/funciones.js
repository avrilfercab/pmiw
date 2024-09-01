
function invertir() {
  if (mouseIsPressed) {
    negro = color(255);
    blanco = color(0);
  } else {
    negro = color(0);
    blanco = color(255);
  }
}
function colores(posx, posy) {
  let dis = dist(posx, posy, 400, 200);
  let c = map(dis, 0, 400, 0, 255);
  if (posx > 400 && posx < 800) {
    blanco = color(200, 0, c);
    negro = color(0);
  }
}
function dibimagen() {
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      let posX = (i * ubic + ubic / 2) + (width/2);
      let posY = j * ubic + ubic / 2;

      if (espar(i, j)) {
        fill(blanco);
        rect(posX, posY, 40, 40);
        fill(negro);
        ellipse(posX, posY, 20, 20);
      } else {
        fill(negro);
        rect(posX, posY, 40, 40);
        fill(blanco);
        ellipse(posX, posY, 20, 20);
      }
    }
  }
}




function espar( x, y) {
  return ((x+y)%2 == 0);
}
