class pantalla {

  constructor(pArray, textos) { 
    this.p = pArray;               
    this.txt = textos;
  }
  pantallaInicio() {
    image(this.p[0], 0, 0, width, height);
    textAlign(CENTER);
    text(this.txt[0], (width/2), 400);
  }

  pantallaJuego() {
    image(this.p[1], 0, 0, width, height);
    objjuego.dibujar();
    objjuego.reiniciarautoenemigos();
    push();
    fill("yellow")
    text(this.txt[9] + round(objjuego.tiempoactual) + " / " + objjuego.tiempolimite , 230, 40);
    pop();
    if (!musica.isPlaying()) {
      musica.loop();
    }
  }

  pantallaPerdiste() {
    image(this.p[2], 0, 0, width, height);
    fill(0);
    rect(50, 350, 580, 90);
    fill(255);
    text(this.txt[1], 345, 400);
  }

  pantallaGanaste() {
    image(this.p[3], 0, 0, width, height);
    fill(0);
    rect(20, 430, 600, 40);
    fill(255);
    text (textAlign(CENTER));
    text(this.txt[2], width/2, 455);
  }

  pantallaReglas() {
    image(this.p[4], 0, 0, width, height);
    fill(255);
    textSize(30);
    text(this.txt[3], 460, 200);
    textSize(14);
    text(this.txt[4], 460, 230);
    fill(0);
    text(this.txt[5], 300, 450);
  }

  pantallaCreditos() {
    image(this.p[5], 0, 0, width, height);
    fill(255)
      text(this.txt[6], 230, 416);
    text(this.txt[7], 450, 416);
    text(this.txt[8], width/2, 460);
  }
}
